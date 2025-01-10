const cloudinary = require("cloudinary").v2
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const multer = require("multer")


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ecommerce",
        resource_type: "image",
        public_id: (req, file) => "computed-filename-using-request"
    },
})

const parsers = multer({storage: storage})

module.exports = {
    parsers,
    cloudinary,
};