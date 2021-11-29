import Footer from "../components/footer"
import Header from "../components/header"

export const AddPost = () => {
    return (
        <div>
            <Header />
            <div class="post-main">
                <form>
                    <legend>Post</legend>
                    <div class="form-input split--vertical">

                        <input type="text" placeholder="Title" />
                        <input type="text" placeholder="Description" />
                        <input type="text" placeholder="languages" />
                        <input type="number" placeholder="price" />
                        <input type="submit" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddPost;