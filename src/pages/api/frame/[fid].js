// send the corresponding frames file
import fs from 'fs';
import path from 'path';
export default async (req, res) => {
    const { fid } = req.query;
    let framedir = path.resolve('./public', 'frames')

    let filepath = path.join(framedir, fid + '.json');

    let file = fs.readFileSync(filepath, 'utf8')

    res.status(200).json(JSON.parse(file));
}
