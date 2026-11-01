const db = require('../config/db');

exports.getAllProduk = async (req, res) => {
    const keyword = req.query.search || '';
    try {
        let query = 'SELECT * FROM produk';
        let params = [];

        if (keyword) {
            query += ' WHERE nama_produk LIKE ?';
            params.push(`%${keyword}%`);
        }

        query += ' ORDER BY id DESC';

        const [rows] = await db.query(query, params);
        res.render('pages/produk-list', { produk: rows, search: keyword });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

exports.getTambahProduk = (req, res) => {
    res.render('pages/produk-tambah');
};

exports.postTambahProduk = async (req, res) => {
    const { nama_produk, harga, stok, deskripsi } = req.body;
    try {
        await db.query(
            'INSERT INTO produk (nama_produk, harga, stok, deskripsi) VALUES (?, ?, ?, ?)',
            [nama_produk, harga, stok, deskripsi]
        );
        res.redirect('/produk'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menyimpan data produk');
    }
};

exports.getEditProduk = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM produk WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).send('Data produk tidak ditemukan');
        }
        res.render('pages/produk-edit', { produk: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

exports.postEditProduk = async (req, res) => {
    const { id } = req.params;
    const { nama_produk, harga, stok, deskripsi } = req.body;
    try {
        await db.query(
            'UPDATE produk SET nama_produk = ?, harga = ?, stok = ?, deskripsi = ? WHERE id = ?',
            [nama_produk, harga, stok, deskripsi, id]
        );
        res.redirect('/produk'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal memperbarui data produk');
    }
};

exports.postHapusProduk = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM produk WHERE id = ?', [id]);
        res.redirect('/produk'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menghapus data produk');
    }
};