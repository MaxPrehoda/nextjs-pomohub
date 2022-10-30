// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {postgresPool} from './functions/utils';

export default async function handler(req : any, res : any) {

  if (req.method === 'GET' && req.query.user_id) {
    const { rows } = await postgresPool.query('SELECT * FROM users WHERE id = $1', [req.query.user_id]);
    res.status(200).json(rows)
  }
  else if (req.method === 'GET') {
    const { rows } = await postgresPool.query('SELECT * FROM users');
    res.status(200).json(rows)
  }

  if (req.method === 'POST' && req.query.username) {
    if (req.query.username.length < 3) {
      res.status(400).json({error: 'Username must be longer than 3 characters'})
    } else if (req.query.username.length > 20) {
      res.status(400).json({error: 'Username must be shorter than 20 characters'})
    // else if the requested username is already taken
    } else if (await postgresPool.query('SELECT * FROM users WHERE username = $1', [req.query.username]).then((res: { rows: string | any[]; }) => res.rows.length > 0)) {
      res.status(400).json({error: 'Username already taken'})
    } else {
      const { rows } = await postgresPool.query('INSERT INTO users (username) VALUES ($1) RETURNING *', [req.query.username]);
      res.status(200).json(rows)
    }
  } else if (req.method === 'POST') {
    res.status(400).json({error: 'username is required'})
  }
}

