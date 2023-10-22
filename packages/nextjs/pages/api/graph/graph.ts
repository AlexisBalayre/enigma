import axios from 'axios';
import { handleServerError } from '../../helpers/errors';
import { TheGraphRequest } from '../../interfaces';
import loadConfig from '../../config';

loadConfig();

const theGraphApiKey = process.env.THE_GRAPH_API_KEY;

if (!theGraphApiKey) {
   throw new Error('THE_GRAPH_API_KEY required.');
}

const url = `https://gateway.thegraph.com/api/${theGraphApiKey}/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7`;

export default async function handler(req, res) {
  try {
    // Check if the request body is present
    if (!req.body) {
      throw new Error('Request body is missing');
    }

    const count = req.body.count;

    if (!count) {
      throw new Error('Count is missing');
    }

    const query = `
      {
        tokens(first: ${count}) {
          id
          name
          symbol
          decimals
          lastPriceBlockNumber
          lastPriceUSD
        }
      }
    `;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };

    try {
      const response = await axios.post(url, { query }, { headers: { 'Content-Type': 'application/json' } });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
  } catch (err) {
    handleServerError(res, err);
  }
}
