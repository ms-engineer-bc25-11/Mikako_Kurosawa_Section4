import express from 'express';

import userRouter from './router/user';

const app = express();
// const port = 4000; => moved to index.ts

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`); => moved to index.ts
// });