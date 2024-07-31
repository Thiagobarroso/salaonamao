const express = require('express');
const morgan = require('morgan');
const app = express();

//MIDDLEWARES
app.use(morgan('dev'));

//
app.set('port', 8000);

app.listen(app.get('port'), () => {
  console.log(`funcionando na porta ${app.get('port')}`);
});
