const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'db_inventaris_produk'
});

db.getConnection()
    .then(connection => {
        console.log('Berhasil terhubung ke database MySQL: ' + process.env.DB_NAME);
        connection.release();
    })
    .catch(err => {
        console.error('Koneksi ke database gagal: ', err.stack);
    });

module.exports = db;