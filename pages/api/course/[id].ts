const postgres = require("postgres")
const sql = postgres({});
const pool = require("../../../db/db")


import { NextApiRequest, NextApiResponse } from "next";

const getCourseById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const id = req.query.id;

        const course = await pool.query("select * from course where ID=$1", [id])
        if (course.rows[0]) {
            res.json(course.rows[0]);
        } else {
            res.json(false)
        }
        /*
                if (req.method !== "GET") {
                    res.status(500).json({ message: "We only accept GET requests" })
                }
                res.json({ byId: id, message: 'getCourseById' })
                */
    } catch (err) {
        console.log(err.message)
    }
}

export default getCourseById;
