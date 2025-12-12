import { pool } from "../config/db.js";

export async function getCategoryNames(brandName) {
  const results = await pool.query('select distinct category_name from kys_products');
  return results.rows.map(row => row.category_name);
}