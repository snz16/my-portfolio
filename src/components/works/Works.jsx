import "./works.scss"
import { useState } from "react";


export default function Works() {
      const [currentSlide, setCurrentSlide] = useState(0); //Decides what slide you're on
    const data = [ //Slide details
        {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
        id: "2",
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
        id: "3",
        icon: "./assets/writing.png",
        title: "Branding",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];


    const handleClick = (way)=> {
        way === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) //Allows you to go left until you are at the first item
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0); //Allows you to go right until you are at the last item
    };

     return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
            </div>
            <img className="arrow left"
                src="assets/arrow.png" 
                alt="arrow left"
                onClick={()=>handleClick("left")}
            />
            <img className="arrow right"
                src="assets/arrow.png" 
                alt="arrow right"
                onClick={()=>handleClick("left")}

            />
        </div>
    );
}
