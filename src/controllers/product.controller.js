import * as service from "../services/product.service.js";

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


export const getProducts = async (req, res) => {
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