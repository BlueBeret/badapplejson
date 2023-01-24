// send the corresponding frames file
import fs from 'fs/promises';

export default async (req, res) => {
    const { fid } = req.query;
    const file = await fs.readFile(`public/frames/${fid}.json`);
    res.status(200).json(JSON.parse(file));
}
