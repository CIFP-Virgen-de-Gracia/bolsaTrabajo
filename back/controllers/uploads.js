const path = require('path');
const fs   = require('fs');
const multer = require('multer');

const { v4: uuidv4 } = require('uuid');

//const cloudinary = require('cloudinary').v2
//cloudinary.config( process.env.CLOUDINARY_URL );

const { response } = require('express');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/imgs')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage }).single('file');


const uploadFile= async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: err
                })
            }
            if (!req.file) {
                return res.status(400).json({
                    ok: false,
                    msg: 'No se ha seleccionado ningún archivo'
                })
            }
            res.status(200).json({
                ok: true,
                msg: 'Archivo subido correctamente',
                file: req.file
            })
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
   
}

const mostrarImagen = async(req, res = response ) => {
    if (req.params.path) {
        const pathImagen = path.join( __dirname, '../uploads', 'imgs', req.params.path );
        if ( fs.existsSync( pathImagen ) ) {
            return res.sendFile( pathImagen )
        }
    }

    const pathImagen = path.join( __dirname, '../assets/no-image.jpg');
    res.sendFile( pathImagen );
}
   


module.exports = {
    uploadFile,
    upload,
    mostrarImagen
}