import { NextApiRequest, NextApiResponse } from "next";

const getAllCourses = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== "GET"){
        res.status(500).json({message: "We only accept GET requests"})
    }
    res.json({hello: 'world', method: req.method})
}

export default getAllCourses;