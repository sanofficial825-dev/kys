import * as service from "../services/product.service.js";
import { getFilteredProducts } from '../services/product.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const data = await service.getAllProducts();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await service.getProductById(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getProducts2 = async (req, res) => {
    try{
        const {brandName} = req.query;
        if(brandName){
            const data = await service.getProductsByBrandName(brandName);
            res.json({success: true, data: data});
        }
        else{
            const data = await service.getAllProducts();
            res.json({success: true, data: data});
        }
        
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const getProductNamesByBrandName = async (req, res) => {
    try{
        const {brandName} = req.query;
        if(brandName){
            const data = await service.getProductsNameByBrandName(brandName);
            res.json({success: true, data: data});
        }
        else{
            res.json({success: true, data: []});
        }
        
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const getProductsByCategory = async(req, res)=> {
  try{
    const category = req.query;
    if(category){
      const data = await service.getProductsByCategory();
      res.json({success: true, data: data})
    }
    else{
      res.json({error: 'category name is mandatory'})
    }
  }
  catch(e){
    res.status(500).json({error: err.message});
  }

}

// this is for filtering products based on query params like brand, category, id 
// or get all products if no filters are applied
export const getProducts = async (req, res) => {
  const { brand, category, id, search, page, limit } = req.query;

  const filters = {
    brand: brand?.trim() || undefined,
    category: category?.trim() || undefined,
    id: id?.trim() || undefined,
    search: search?.trim() || undefined,
    page: page?.trim() || undefined,
    limit: limit?.trim() || undefined
  };

  const products = await getFilteredProducts(filters);
  res.json(products);
};
