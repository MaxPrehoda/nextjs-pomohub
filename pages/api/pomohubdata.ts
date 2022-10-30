// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {postgresPool} from './functions/utils';

export default async function handler(req : any, res : any) {

  if (req.method === 'POST') {

    if (req.body) {
      const { session } = req.body;
      const { rows } = await postgresPool.query('INSERT INTO session (session) VALUES ($1) RETURNING *', [session]);
      res.status(200).json(rows)
    } else {
      res.status(400).json({message: 'session is required'})
    }
  }
}

