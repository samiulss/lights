const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true)
    } else {
        //reject file
        cb({ message: 'Unsupported file format' }, false)
    }
}

const upload = multer({
    storage: storage,
    // limits: { fileSize: maxSize },
    fileFilter: fileFilter
})

module.exports = upload;
