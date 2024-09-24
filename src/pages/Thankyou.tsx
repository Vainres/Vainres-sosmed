import HeartAnimation from "../components/HeartAnimation";
import Layout from "../layouts/layout";
import img1 from "../assets/img/happy-cat.gif";
import { FaHeart, FaStar, FaRibbon } from "react-icons/fa"; // Import icons from react-icons
import "../components/styles/Thankyou.css";

const Thankyou = () => {
  return (
    <Layout>
      <div className="thankyou-container">
        <HeartAnimation />
        {/* Add pink hearts and decorations */}
        <div className="icon-container">
          <FaHeart className="heart-icon" />
          <FaStar className="star-icon" />
          <FaRibbon className="ribbon-icon" />
        </div>
        <img
          className="thankyou-image"
          src={img1}
          alt="Happy Cat"
          style={{
            width: "300px",
            marginBottom: "20px",
            borderRadius: "15px",
            boxShadow: "0 0 20px pink", // Fancy pink glow around the image
          }}
        />
        <h1 className="thankyou-text">See you soon pookie</h1>
        <div className="icon-container-bottom">
          <FaHeart className="heart-icon-bottom" />
          <FaStar className="star-icon-bottom" />
          <FaRibbon className="ribbon-icon-bottom" />
        </div>
      </div>
    </Layout>
  );
};

export default Thankyou;
