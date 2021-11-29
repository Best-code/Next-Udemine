import Image from "next/image";
import { useRouter } from "next/Router";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Star from "../../styles/star.png";
import axios from "axios";

const Course = () => {

    const [courseData, setCourseData] = useState(
        {
            id: 0,
            title: "",
            description: "",
            author: " ",
            published: null,
            lastUpdated: null,
            languages: " ",
            price: 0,
            reviews: 0,
            students: 0,
            rating: 0
        }
    );

    const router = useRouter()

    useEffect(async () => {
        const {courseName} = router.query
        if(courseName) {
            const url = `http://localhost:3000/api/course/${courseName.replace(' ', '%20')}`
            console.log(url)
            axios.get(url)
            .then(res => {
                let data = res.data
                    setCourseData({
                        id: data.id,
                        title: data.title,
                        description: data.description,
                        author: data.author,
                        published: data.published,
                        lastUpdated: data.lastUpdated,
                        languages: data.languages,
                        price: data.price,
                        reviews: data.reviews,
                        students: data.students,
                        rating: data.rating
                    })
                    console.log(courseData)
                }).catch(err => {
                console.log(err)
            })

        }
    }, [router.query])

    return (<div>
        <Header />
        <div class="block bg-gray">
            <div class="coursePageHeadings">
                <div class="bPad4em">
                    <h1>{courseData.title}</h1>
                    <h3>{courseData.description}</h3>
                </div>
            </div>
            <div class="bPad2em">
                <p class="wFitContent">4.6&ensp;
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    ({courseData.reviews} ratings)&ensp; {courseData.students} students</p>
            </div>
            <p>Created By Colin</p>
            <br />
            <div class="split wFitContent courseUpdates">
                <p>Last Updated 3/2021</p>
                <p>English</p>
                <p>English[AUTO], French[AUTO]</p>
            </div>
            <div class="split courseButtonsPadding">
                <a href="#">
                    <div class="courseButton"><p class="center">Wishlist</p></div>
                </a>
                <a href="#">
                    <div class="courseButton"><p class="center">Share</p></div>
                </a>
                <a href="#">
                    <div class="courseButton"><p class="center">Gift This Course</p></div>
                </a>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Course;