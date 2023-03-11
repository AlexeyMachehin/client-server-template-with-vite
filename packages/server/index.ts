import cors from 'cors';

import express from 'express';

import { db } from './models';
import { router } from './routes/index';
import { errorMiddleware } from './middlewares/errorMiddleware';

const PORT = Number(process.env.SERVER_PORT) || 3001;
const app = express();

app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use('/bomberapi', router);
app.use(errorMiddleware);

db.sequelize.sync();

app.listen(PORT, () =>
  console.log(`  ➜ 🎸 Server is listening on port: ${PORT}`)
);
