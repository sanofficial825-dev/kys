import * as service from "../services/common.service.js";

export const getCategoryNames = async (req, res) => {
  try {
    const data = await service.getCategoryNames();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
