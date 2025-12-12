import { pool } from "../config/db.js";
import knexInstance from '../config/knex.js';

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


export async function getProductsNameByBrandName(brandName) {
  const results = await pool.query('Select product_name from kys_brand_products where brand_name ilike $1', [brandName]);
  return results.rows.map(row => row.product_name);
}

export async function getProductsByBrandName(brandName) {
  const results = await pool.query('Select * from kys_products where brand_name ilike $1', [brandName]);
  return results.rows;
}

export async function getProductsByCategory(brandName) {
  const results = await pool.query("select * from kys_products where  category_name='Vitamin'");
  return results.rows;
}

export const getFilteredProducts = async (filters) => {
    let query = knexInstance('kys_products').select('*');

    if (filters.brand) {
      const brands = filters.brand.split(',').map(b => b.trim()).filter(Boolean);
      if (brands.length) query = query.whereIn('brand_name', brands);
    }

    if (filters.category) {
      const categories = filters.category.split(',').map(c => c.trim()).filter(Boolean);
      if (categories.length) query = query.whereIn('category_name', categories);
    }

    if (filters.id) {
      const ids = filters.id.split(',').map(i => i.trim()).filter(Boolean);
      if (ids.length) query = query.whereIn('kys_id', ids);
    }

    // 3. Text search (name OR description)
    if (filters.search) {
      const search = `%${filters.search.trim()}%`;
      query = query.where(builder =>
        builder
          .where('product_name', 'like', search)
          // .orWhere('description', 'like', search)
      );
    }

    // 4. Pagination (safe defaults)
    const page = Math.max(1, filters.page || 1);
    const limit = Math.min(100, Math.max(1, filters.limit || 20)); // max 100 per page
    const offset = (page - 1) * limit;

    // Get total count (for frontend meta)
    // const totalResult = await query.clone().count('* as total').first();
    // const total = Number(totalResult?.total || 0);

    // Apply limit + offset
    query = query.limit(limit).offset(offset);

    return await query;
}
