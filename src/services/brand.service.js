import { pool } from "../config/db.js";

export async function getAllBrands(search) {
    let query = `select distinct brand_name from kys_brand_products`;

    const values = [];

    if (search && search.trim()) {
        values.push(`%${search}%`);
        query += ` WHERE brand_name ILIKE $1`;
    }

    query += ` ORDER BY brand_name`;

    const result = await pool.query(query, values);

    return result.rows.map(row => row.brand_name);
}

