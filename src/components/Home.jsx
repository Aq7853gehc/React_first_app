import React from "react";
import "../style/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution of all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in childern.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            architecto odit deserunt consequuntur doloribus, reiciendis aperiam
            quasi culpa pariatur in autem. Unde fugit harum accusamus quae qui
            aut nesciunt ducimus magni porro possimus? Quis saepe eius, odio eum
            quo cum a eligendi expedita sunt excepturi enim atque vitae
            doloremque nam consequatur hic error labore, in aspernatur optio
            suscipit! Odit quas possimus expedita non beatae unde itaque
            repellat nulla cumque rerum ex quo velit cupiditate saepe mollitia
            perferendis, dolorum quod optio accusamus soluta sit modi laudantium
            eius omnis? Non exercitationem nisi inventore nulla porro, fugit,
            sequi illum, saepe natus officia in? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quia iste maxime enim libero?
            Blanditiis qui sunt voluptatibus inventore dicta, modi voluptatum,
            ab id omnis, facilis expedita quia sit necessitatibus! Quo sapiente
            perferendis atque asperiores, sed incidunt nesciunt provident a,
            quibusdam velit debitis adipisci repellat aut voluptatum illo, sunt
            minus ea autem suscipit maiores tenetur praesentium. Obcaecati
            quisquam, quos vel officiis debitis totam at corporis? Qui alias
            quam saepe animi quaerat dolorem provident nobis, architecto eos
            velit delectus reprehenderit impedit eaque perspiciatis a accusamus
            repellendus blanditiis nostrum. Cum, aliquam at atque voluptatibus
            maxime numquam repellat facilis soluta cupiditate fuga quo
            accusamus.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
