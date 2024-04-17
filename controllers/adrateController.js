const AdRate = require("../models/Adrate");

// Read
exports.getAllAdRates = (req, res) => {
  AdRate.find().sort({ type: 1, stt: 1, website: 1, position: 1, platform: 1, url: 1})
    .then((adRates) => {
      // console.log(adRates)
      let maxType = 7;
  
      let mapping = {
        1: [
          "STT\nNO",
          "Website\nWebsite",
          "Tên vị trí\nAds Position",
          "Kích thước (px)\nDimensions (px)",
          "Nền tảng\nPlatform",
          "Demo\nDemo",
          "Cách tính giá\nBuying Method",
          "Trang chủ \nHomepage",
          "Roadblock xuyên site \n(Độc quyền ngày)\nCross-site roadblock\n(Exclusive date)",
          "CTR trung bình (%)\nAverage CTR (%)",
          "Est. Traffic\n/tuần\n/slot",
        ],
        2: [
          "STT",
          "Website\nWebsite",
          "Tên vị trí\nAds Position",
          "Kích thước (px)\nDimensions (px)",
          "Nền tảng\nPlatform",
          "Demo\nDemo",
          "Cách tính giá\nBuying Method",
          "Đơn Giá (VNĐ)",
          "CTR trung bình (%)\nAverage CTR (%)",
          "Est. Impression",
          "note"
        ],
        3: [
          "STT",
          "Website",
          "Tên vị trí",
          "Kích thước",
          "Nền tảng",
          "Demo",
          "Cách tính giá",
          "TRANG CHỦ \n(Đã gồm VAT)",
          "XUYÊN TRANG \n(Đã gồm VAT)",
          "CHUYÊN MỤC (*)\n(Đã gồm VAT)",
          "Est. Traffic",
        ],
        4: [
          "STT\nNO",
          "Website\nWebsite",
          "Tên vị trí\nAds Position",
          "Kích thước (px)\nDimensions (px)",
          "Nền tảng\nPlatform",
          "Demo\nDemo",
          "Cách tính giá\nBuying Method",
          "Trang chủ \nHomepage",
          "Roadblock xuyên site \n(Độc quyền ngày)\nCross-site roadblock\n(Exclusive date)",
          "CTR trung bình (%)\nAverage CTR (%)",
          "Est. Traffic\n/tuần\n/slot",
        ],
        6: [
          "STT",
          "Website",
          "Tên vị trí",
          "Kích thước",
          "Nền tảng",
          "Demo",
          "Cách tính giá",
          "Trang chủ\n(đã gồm VAT)",
          "Roadblock xuyên site \n(Độc quyền ngày)\n(chưa bao gồm VAT)",
          "CTR trung bình (%)",
          "Est. Traffic",
        ],
        5: [
          "STT",
          "Website",
          "Tên vị trí",
          "Kích thước",
          "Nền tảng",
          "Demo",
          "Tuần\n(Chia sẻ 3)",
          "Tháng\n(Chia sẻ 3)",
          "Quý\n(Chia sẻ 3)",
          "Est. CTR (%)",
          "Est. Traffic",
        ],
        7: [
          "STT",
          "WEBSITE",
          "FORMAT",
          "KÍCH THƯỚC",
          "NỀN TẢNG",
          "DEMO",
          "CÁCH TÍNH GIÁ",
          "TRANG CHỦ",
          "XUYÊN TRANG CHI TIẾT",
          "XUYÊN TRANG",
          "Est Traffic\n/Tuần\n/Slot",
        ],
      };
      res.json(adRates);
      // res.render("index", {  maxType: maxType, mapping: mapping, adRates: adRates });
    })
    .catch((err) => res.status(500).render("error", { error: err }));
};


exports.getAdratesByType = (req, res) => {
  const type = req.params.type;
  AdRate.find({ type: type }).sort({ type:1, stt: 1, website: 1, position: 1, platform: 1, url: 1})
      .then((adRates) => {
        res.json(adRates);
      })
      .catch((err) => res.status(500).json({ error: err }));
};


// Route handler để xử lý yêu cầu POST đến "/api/ad-rates"
exports.createAdRate = (req, res) => {
  // Lấy dữ liệu từ req.body
  const adRateData = req.body;

  // Tạo một bản ghi AdRate mới với dữ liệu được gửi từ client
  AdRate.create(adRateData)
      .then((newAdRate) => {
        // Trả về dữ liệu JSON của bản ghi mới về phía client
        res.status(201).json(newAdRate);
      })
      .catch((err) => {
        // Nếu có lỗi xảy ra, trả về mã lỗi 500 và thông báo lỗi
        res.status(500).json({ error: err });
      });
};


// Route handler để xử lý yêu cầu GET đến "/api/ad-rates/:id"
exports.getAdRateById = (req, res) => {
  // Lấy ID từ params
  const adRateId = req.params.id;

  // Tìm AdRate theo ID
  AdRate.findById(adRateId)
      .then((adRate) => {
        // Nếu tìm thấy, trả về dữ liệu JSON của AdRate
        if (adRate) {
          res.json(adRate);
        } else {
          // Nếu không tìm thấy, trả về mã lỗi 404 (Not Found)
          res.status(404).json({ message: "AdRate not found" });
        }
      })
      .catch((err) => {
        // Nếu có lỗi xảy ra, trả về mã lỗi 500 và thông báo lỗi
        res.status(500).json({ error: err });
      });
};

// Route handler để xử lý yêu cầu PUT đến "/api/ad-rates/:id"
exports.updateAdRate = (req, res) => {
  // Lấy ID từ params
  const adRateId = req.params.id;
  // Lấy dữ liệu cập nhật từ req.body
  const updatedData = req.body;

  // Tìm và cập nhật AdRate theo ID
  AdRate.findByIdAndUpdate(adRateId, updatedData, { new: true })
      .then((updatedAdRate) => {
        // Nếu cập nhật thành công, trả về dữ liệu JSON của AdRate đã được cập nhật
        res.json(updatedAdRate);
      })
      .catch((err) => {
        // Nếu có lỗi xảy ra, trả về mã lỗi 500 và thông báo lỗi
        res.status(500).json({ error: err });
      });
};

// Route handler để xử lý yêu cầu DELETE đến "/api/ad-rates/:id"
exports.deleteAdRate = (req, res) => {
  // Lấy ID từ params
  const adRateId = req.params.id;

  // Tìm và xóa AdRate theo ID
  AdRate.findByIdAndDelete(adRateId)
      .then(() => {
        // Nếu xóa thành công, trả về mã lỗi 204 (No Content)
        res.status(204).send();
      })
      .catch((err) => {
        // Nếu có lỗi xảy ra, trả về mã lỗi 500 và thông báo lỗi
        res.status(500).json({ error: err });
      });
};


