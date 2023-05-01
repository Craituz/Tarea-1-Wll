//DB.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://craituz:crai@crai.3cbevif.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch((error) => {
  console.log('Error de conexión:', error);
});
