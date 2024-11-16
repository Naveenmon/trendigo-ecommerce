const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path: path.join(__dirname,'../', '.env')})

cloudinary.config({
  cloud_name: process.env.COLUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    folder:'trendigo',
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
