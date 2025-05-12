import multer from 'multer';
import path from 'path';
import fs from 'fs';


export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const uploadPath = path.resolve('uploads');
        fs.existsSync(uploadPath) || fs.mkdirSync(uploadPath, { recursive: true });

        callback(null, uploadPath);
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        const fileExtension = path.extname(file.originalname);
        const fileName = `${time}_${file.originalname}`;

        callback(null, fileName); 
    }
});