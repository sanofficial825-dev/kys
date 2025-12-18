import * as service from "../services/brand.service.js";

export const getAllBrands = async (req, res) => {
  try {
    const {search} = req.query;
    const data = await service.getAllBrands(search);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
