const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

router.get('/', produkController.getAllProduk);
router.get('/tambah', produkController.getTambahProduk);
router.post('/tambah', produkController.postTambahProduk);
router.get('/edit/:id', produkController.getEditProduk);
router.post('/edit/:id', produkController.postEditProduk);
router.post('/hapus/:id', produkController.postHapusProduk);

module.exports = router;