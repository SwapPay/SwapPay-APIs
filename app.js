import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';

import indexRouter from './routes/index';

const app = express();


app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));


app.use('/api/v1', indexRouter);

// entry point
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to SwapPay API'
  })
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // json error 
  res.status(err.status || 500);
  res.json({
    stauts: err.status,
    error: err
  });
});
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to port ${port}`));

export default app;
