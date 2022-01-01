/*
    *** Multer File Uploading Middleware ***
        => Through multer middleware, we can be work with
        file uploading.
        => Multer is a node.js middleware for handling
        maltipart/form-data, which is primarily used for uploading files
*/
const express = require('express');
const path = require('path');

const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    // file destination
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/uploads/`);
    },
    // name of the file name
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(' ')
            .join('-')+'-'+ Date.now;
        cb(null, fileName + fileExt);
    },
});

const upload = multer({
    storage,
    limits: {
        fieldSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'file_upload') {
            if (
                file.mimetype === 'image/jpeg'
                || file.mimetype === 'image/png'
                || file.mimetype === 'image/jpg'
            ) {
                cb(null, true); // true mean we can able to upload file
            } else {
                cb(new Error('Only, .jpg, .png, .jpeg format allowed')); // it is going express.js by default error handling middleware
            }
        } else if (file.fieldname === 'file_upload_multiple') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true); // true mean we can able to upload file
            } else {
                cb(new Error('Only, .pdf format allowed')); // it is going express.js by default error handling middleware
            }
        }
    },
});

// *** single file uploading ***

// app.post('/', upload.single('file_upload'), (req, res) => {
//     console.log('a');
//     res.send('File Upoladed Successfully');
//     res.end();
// });

// *** multiple file uploading using one input ***
// app.post('/', upload.array('file_upload', 2), (req, res) => {
//     console.log(req.files);
//     res.send('File Upoladed Successfully');
//     res.end();
// });

// *** using multiple input for handling file upload ***

app.post(
    '/',
    upload.fields([
        {
            name: 'file_upload',
            maxCount: 1,
        },
        {
            name: 'file_upload_multiple',
            maxCount: 3,
        },
    ]),
    (req, res) => {
        console.log(req.files);
        res.send('File Upoladed Successfully');
        res.end();
    }
);

// error handling middleware
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('This is custome error');
    }
});
app.listen(5050, () => {
    console.log('Listening on the 5050');
});
