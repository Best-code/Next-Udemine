const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();


const getCourseByTitle = async (req, res) => {
    const title = req.query.title
    const course = await prisma.course.findFirst({
        where: {
             title:  title
        }
    })
    res.json(course)
}

export default getCourseByTitle;
