// Importing the database pool from the config file
import { pool } from '../config/config.js';

// Retrieve all products from the database
const getProducts = async () => {
    const [result] = await pool.query(`
        SELECT * 
        FROM products`);
    return result;
};

// Retrieve a single product by prodID from the database
const getProduct = async (prodID) => {
    const [result] = await pool.query(`
        SELECT * 
        FROM products
        WHERE prodID = ?`, [prodID]);
    return result;
};

// Add a new product to the database
const addProduct = async (prodName, quantity, amount, Category, prodUrl) => {
    const [product] = await pool.query(`
        INSERT INTO products (prodName, quantity, amount, Category, prodUrl) 
        VALUES (?, ?, ?, ?, ?)`,
        [prodName, quantity, amount, Category, prodUrl]);
    return getProduct(product.insertId);
};

// Edit an individual product in the database
const editProduct = async (prodID, prodName, quantity, amount, Category, prodUrl) => {
    await pool.query(`
        UPDATE products
        SET prodName = ?, quantity = ?, amount = ? , Category = ?, prodUrl = ?
        WHERE prodID = ?`,
        [prodName, quantity, amount, Category, prodUrl, prodID]);
    const editedProduct = await getProduct(prodID);
    return editedProduct;
}; 

// Delete an individual product from the database
const deleteProduct = async (prodID) => {
    const [product] = await pool.query(`
        DELETE FROM products
        WHERE prodID = ?`,
        [prodID]);
    return getProducts(product);
};

// Exporting functions to make them globally accessible
export { getProducts, getProduct, addProduct, editProduct, deleteProduct };
