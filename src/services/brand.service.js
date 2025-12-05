import { pool } from "../config/db.js";

export async function getAllBrands() {
    const result = await pool.query("select distinct brand_name from kys_brand_products");
    return result.rows.map(row => row.brand_name);
}

