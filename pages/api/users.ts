// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {formattedReturn, postgresPool} from './functions/utils';

import {FormattedReturnInterface} from './functions/helpers/formattedReturn';

export default async function handler(req, res) {
  const { rows } = await postgresPool.query('SELECT * FROM users');
  res.status(200).json(rows)
}

