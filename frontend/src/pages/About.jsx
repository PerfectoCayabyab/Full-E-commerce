import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-fill md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quis saepe cumque veniam non ullam iste nobis nisi, neque sit.
            Debitis itaque totam at alias ex aliquam maxime excepturi culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
            necessitatibus eius ab. Quae eaque molestias, reprehenderit eveniet
            animi qui perferendis maiores, maxime mollitia, minima ipsum ratione
            possimus enim nisi.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            repellendus nostrum fugit impedit voluptates ea ducimus veniam
            consequuntur corporis unde hic harum praesentium quod, voluptatem
            eveniet sint nihil, exercitationem aspernatur.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            animi.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            quo architecto reiciendis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            omnis explicabo laudantium numquam veritatis.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
