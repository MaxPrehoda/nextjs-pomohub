// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {postgresPool} from './functions/utils';
import { UserList } from '../UserList';

export default async function handler(req : any, res : any) {

  if (req.method === 'GET') {
    const { rows } = await postgresPool.query('SELECT * FROM users');
    res.status(200).json(rows)
  }
}

