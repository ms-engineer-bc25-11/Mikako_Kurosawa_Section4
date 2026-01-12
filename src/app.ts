import express from 'express';

import userRouter from './routes/user';
import expenseRouter from './routes/expenses';
import categoryRouter from './routes/categories'

const app = express();
// const port = 4000;

app.use(express.json());

// APIルーティング
app.use('/api/users', userRouter);
app.use('/api/expenses', expenseRouter);
app.use('/api/categories', categoryRouter);

// 動作確認用ルート
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.send('API is running');
});

export default app;

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });