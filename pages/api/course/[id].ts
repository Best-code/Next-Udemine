const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();


const getCourseById = async (req, res) => {
    const id = parseInt(req.query.id)
    const course = await prisma.course.findUnique({
        where: {
            id: id
        }
    })
    res.json(course)
}

export default getCourseById;
