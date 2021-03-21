const multer = require("multer");
const moment = require("moment");

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'src/uploads/')
    },
    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        cb(null, `${date}-${file.originalname}`)
    },
    id(req, file, cb) {
        cb(null, `${file.id}`)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({ storage, fileFilter })