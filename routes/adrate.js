const express = require("express");
const router = express.Router();
const adRateController = require("../controllers/adrateController");

router.get("/ad-rates", adRateController.getAllAdRates);
router.get("/ad-rates/type/:type", adRateController.getAdratesByType);
// Route POST để tạo một AdRate mới
router.post('/ad-rates', adRateController.createAdRate);

// Route GET để xem chi tiết một AdRate theo ID
router.get('/ad-rates/:id', adRateController.getAdRateById);

// Route PUT để cập nhật một AdRate theo ID
router.put('/ad-rates/:id', adRateController.updateAdRate);

// Route DELETE để xóa một AdRate theo ID
router.delete('/ad-rates/:id', adRateController.deleteAdRate);

module.exports = router;
