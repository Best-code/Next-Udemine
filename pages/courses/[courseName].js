import Image from "next/image";
import { useRouter } from "next/Router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Star from "../../styles/star.png";

const Course = () => {

    const router = useRouter();
    const { courseName } = router.query;

    return (<div>
        <Header />
        <div class="block bg-gray">
            <div class="coursePageHeadings">
                <div class="bPad4em">
                    <h1>{courseName}</h1>
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</h3>
                </div>
            </div>
            <div class="bPad2em">
                <p class="wFitContent">4.6&ensp;
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    <Image src={Star} />
                    (322,343 ratitngs)&ensp;322,343 students</p>
            </div>
            <p>Created By Zaid</p>
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
        <Footer/>
    </div>
    )
}

export default Course;