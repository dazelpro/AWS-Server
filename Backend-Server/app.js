const express       = require('express');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const app           = express();

// Koneksi ke mongoDB
var mongoose = require('mongoose');  
    mongoose.connect('mongodb://localhost:27017/AWSTesting',{ useNewUrlParser: true }); 
var db = mongoose.connection  
    db.on('error', console.error.bind(console, 'Koneksi gagal:'));  
    db.once('open', function() {  
    console.log('Berhasil terkoneksi');
});


// Gunakan bodyParser untuk membaca API yang dikirim user
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// Router untuk API Frontend
const frontendRoutes = require('./routes/frontend');
app.use('/api/', frontendRoutes);

// Konfigurasi Port yang digunakan
app.listen(8081, err =>{
    console.log('Berjalan di Port 8081');
});