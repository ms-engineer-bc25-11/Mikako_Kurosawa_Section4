import express from 'express';

import userRouter from './routes/user';
import expenseRouter from './routes/expenses';
import categoryRouter from './routes/categories';

const app = express();
// const port = 4000;

app.use(express.json());// どのURLを、どのrouterに渡すか

// APIルーティング
app.use('/api/users', userRouter);
app.use('/api/expenses', expenseRouter);
app.use('/api/categories', categoryRouter);

// 動作確認用ルート
// GET /
app.get('/', (_req, res) => {
  // res.send('Hello World!');
  // res.send('API is running');
  res.status(200).json({ status: 'ok' })
});

export default app;

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// app.listen()していない
// appをexportしている => テストコードからそのままimportして使える
