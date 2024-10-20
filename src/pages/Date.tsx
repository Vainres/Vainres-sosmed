import { useState } from "react";
import CardComponent from "../components/Card/Card";
import Layout from "../layouts/layout";
import mov1 from "../assets/img/movies/Joker2.jpg";
import mov2 from "../assets/img/movies/acquytruyhon.jpg";
import mov3 from "../assets/img/movies/quytreodau.png";
import mov4 from "../assets/img/movies/venom.jpg";
import mov5 from "../assets/img/movies/Transformerone.jpg";
import mov6 from "../assets/img/movies/question-mark-vector-icon.jpg";

import food1 from "../assets/img/food/Banhcanh.jpg";
import food2 from "../assets/img/food/bunbo.jpg";
import food3 from "../assets/img/food/bunrieu.jpg";
import food4 from "../assets/img/food/comtam.jpg";
import food5 from "../assets/img/food/Pho.jpg";
import food6 from "../assets/img/movies/question-mark-vector-icon.jpg";

import drink1 from "../assets/img/food/tratraicay.jpg";
import drink2 from "../assets/img/food/trasua.jpg";

import HeartButton from "../components/HeartButton/HeartButton";
import { pink } from "../components/interfaces/HeartButton.interface";
// import HeartSlider from "../components/Heart/Heart";
import { useNavigate } from "react-router";

const Date = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "food"
  );
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const getTitle = () => {
    switch (selectedCategory) {
      case "food":
        return "Muốn ăn gì nè ?";
      case "drink":
          return "Muốn uống gì hong?";
      case "movie":
        return "Muốn coi gì hong?";
      default:
    }
  };

  const nextQuestion = () => {
    console.log("category ",selectedCategory)
    if (selectedCategory === "movie") {
      localStorage.setItem(
        "movie",
        JSON.stringify({ movie: selectedCards.map(obj => movieData[obj])})
      );
      console.log("local storage", localStorage)
      navigate("/thankyou");
    } 
    else if(selectedCategory === "food") {
    console.log("category in food",selectedCategory)
      localStorage.setItem(
        "food",
        JSON.stringify({ food: selectedCards.map(obj => foodData[obj])})
      );
      setSelectedCategory("drink");
    console.log("category in food",selectedCategory)
  }
    else if(selectedCategory === "drink") {
    console.log("category in drink",selectedCategory)
      localStorage.setItem(
        "drink",
        JSON.stringify({ food: selectedCards.map(obj => drinkData[obj])})
      );
    }
    setSelectedCategory("movie");
  };

  const foodData = [
    {
      title: "Bánh canh ghẹ",
      image: food1,
    },
    {
      title: "Bún bò",
      image: food2,
    },
    {
      title: "Bún riêu",
      image: food3,
    },
    {
      title: "Cơm tấm",
      image: food4,
    },
    {
      title: "Phở",
      image: food5,
    },
    {
      title: "Ăn gì cũng được XD",
      image: food6,
    },
  ];

  const movieData = [
    {
      title: "Joker 2",
      image: mov1,
    },
    {
      title: "Ác quỷ truy hồn",
      image: mov2,
    },
    {
      title: "Qủy treo đầu",
      image: mov3,
    },
    {
      title: "Venom: Kèo Cuối",
      image: mov4,
    },
    {
      title: "Transformers One",
      image: mov5,
    },
    {
      title: "Phim khác",
      image: mov6,
    },
  ];

  const drinkData = [
    {
      title: "Trà trái cây",
      image: drink1,
    },
    {
      title: "Trà sữa",
      image: drink2,
    },
  ];
  return (
    <Layout>
      <h1 style={{ color: pink }}>{getTitle()}</h1>
      <main className="d-flex flex-wrap justify-content-center mt-3">
        {selectedCategory === "food" &&
          foodData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "drink" &&
          drinkData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "movie" &&
          movieData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}

        {/* {selectedCategory === "rate" && (
          <>
            <div className="d-flex flex-column justify-content-center">
              <img
                className="m-auto"
                src={img1}
                alt="Image 1"
                style={{
                  width: "300px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <h1 style={{ color: pink }} className="py-3">
                Rate how exited are you
              </h1>
            </div>
            <HeartSlider></HeartSlider>
          </>
        )} */}
      </main>
      <HeartButton
        style={{
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto",
          marginTop: "2rem",
        }}
        text="Tiếp tục ⊂(・ヮ・⊂)"
        onClick={nextQuestion}
      />
    </Layout>
  );
};

export default Date;
