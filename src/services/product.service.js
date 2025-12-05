import { pool } from "../config/db.js";

// Fetch all products
export const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM kys_products LIMIT 100");
  return result.rows;
};

// Fetch single product by ID
export const getProductById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM kys_products WHERE kys_id = $1",
    [id]
  );
  return result.rows[0];
};


export async function getProductsByBrandName(brandName) {
  const results = await pool.query('Select product_name from kys_brand_products where brand_name ilike $1', [brandName]);
  return results.rows.map(row => row.product_name);
}