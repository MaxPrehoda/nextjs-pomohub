import {postgresPool} from './functions/utils';

export default async function handler(req : any, res : any) {

    if (req.method === 'GET') {
        const { rows } = await postgresPool.query('SELECT * FROM session');
        res.status(200).json(rows)
    }

    if (req.method === 'POST') {
        handlePostSession(req, res);
    }
  }

export const handlePostSession = async (req: any, res: any) => {
    const session = req.body;
    if (session && session.username || session.start_date || session.session_id || session.session_data) {
        if (session.session_id && session.username && session.start_date && session.session_data) {
            try {
                const sanitizedSessionId = isSessionIdSanitized(session.session_id);
                const sanitizedUsername = isUsernameSanitized(session.username);
                const sanitizedStartDate = isStartDateSanitized(session.start_date);
                const sanitizedData = isSessionDataSanitized(session.session_data);

                console.log(sanitizedSessionId, sanitizedUsername, sanitizedStartDate, sanitizedData);
                if (sanitizedSessionId && sanitizedUsername && sanitizedStartDate && sanitizedData) {
                    const { rows: userRows } = await postgresPool.query('SELECT * FROM users WHERE username = $1', [session.username]);
                    if (userRows.length > 0) {
                        const user_id = userRows[0].id;
                        const { rows } = await postgresPool.query('SELECT * FROM session WHERE session_id = $1', [session.session_id]);
                        if (rows.length > 0) {
                            console.log('session already exists');
                            const { rows } = await postgresPool.query('UPDATE session SET user_ref = $1, start_date = $2, session_data = $3 WHERE session_id = $4 RETURNING *', [user_id, session.start_date, session.session_data, session.session_id]);
                            res.status(200).json(rows)
                        } else {
                            console.log('session does not exist');
                            const { rows } = await postgresPool.query('INSERT INTO session (session_id, user_ref, start_date, session_data) VALUES ($1, $2, $3, $4) RETURNING *', [session.session_id, user_id, session.start_date, session.session_data]);
                            res.status(200).json(rows)
                        }
                    } else {
                        res.status(400).json({error: 'Username does not exist'})
                    }
                } else {
                    res.status(400).json({error: 'Invalid data provided'})
                }
            } catch (error: any) {
                return res.status(400).json({error: error.message});
            }
        } else {
            res.status(400).json({error: 'session_id, username, start_date, and data are required'})
        }
    } else {
        res.status(400).json({error: 'username, session_id, data and start_date are required'})
    }
}

export const isSessionIdSanitized = (rawInput: any) => {
    if (
        rawInput === null
        || rawInput === undefined
        || typeof rawInput !== 'number'
        || rawInput < 0) {
        throw new Error('Invalid Session ID')
    }
    return true


}
export const isUsernameSanitized = (rawInput: any) => {
    if (
        rawInput === null || rawInput === undefined || typeof rawInput !== 'string') {
        throw new Error('Invalid username')
    }
    if (rawInput.includes(';') || rawInput.includes('\'') || rawInput.includes('\"') || rawInput.includes('`') || rawInput.includes('/*') || rawInput.includes('*/') || rawInput.includes('--')) {
        throw new Error('Invalid username')
    }
    return true;
}
export const isStartDateSanitized = (rawInput: any) => {
    if (rawInput === null || rawInput === undefined || typeof rawInput !== 'string' || isNaN(Date.parse(rawInput))) {
        throw new Error('Invalid start date')
    }
    return true;
}
export const isSessionDataSanitized = (rawInput: any) => {
    if (rawInput === null || rawInput === undefined || typeof rawInput !== 'object') {
        throw new Error('Invalid session data')
    }
    return true;
}