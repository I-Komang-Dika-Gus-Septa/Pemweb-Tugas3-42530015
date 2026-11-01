CREATE DATABASE IF NOT EXISTS db_inventaris_produk;
USE db_inventaris_produk;

CREATE TABLE IF NOT EXISTS produk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(100) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT NOT NULL,
    deskripsi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produk (nama_produk, harga, stok, deskripsi) VALUES
('Laptop Asus ROG', 15000000.00, 5, 'Laptop gaming performa tinggi'),
('Mechanical Keyboard', 750000.00, 15, 'Keyboard switch blue RGB'),
('Mouse Wireless Logitech', 250000.00, 30, 'Mouse ergonomis hemat baterai');