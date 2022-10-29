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

  if (req.method === 'POST') {

    if (req.body.username) {
      const { username } = req.body;
      const { rows } = await postgresPool.query('INSERT INTO users (username) VALUES ($1) RETURNING *', [username]);
      res.status(200).json(rows)
    } else {
      res.status(400).json({message: 'username is required'})
    }
  }
}

