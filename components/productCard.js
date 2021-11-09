import Image from "next/image";
import Prod from "../styles/defaultProdPic.png";
import Prof from "../styles/defaultProfPic.png";
import Star from "../styles/star.png";

const ProductCard = (props) => {
    return (
        <a href={"courses/"+props.title}>
        <div class="product">
            <div>
                <Image src={Prod} />
                <div class="innerProductContainer">
                    <div class="split">
                        <div>
                            <Image src={Prof} />
                        </div>
                        <div class="prodCardHeading">
                            <h3>{props.title}</h3>
                            <p class="gray">{props.subtitle}</p>
                        </div>
                    </div>
                    <div>
                        <h3>{props.cardDescription}</h3>
                        <div class="split">
                            <Image src={Star}/>
                            <p>5.0<span class="gray">(21)</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a>)
}

export default ProductCard;