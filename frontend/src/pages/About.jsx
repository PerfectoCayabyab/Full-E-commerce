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
            At Latest Fashion, we believe that style is more than just clothing
            – it’s a way to express yourself, embrace confidence, and step into
            the world with your own unique flair. We are passionate about
            curating the latest trends, timeless pieces, and fashion-forward
            designs that speak to the modern individual.
          </p>
          <p>
            Since our founding, our mission has been simple: to empower people
            through fashion by offering collections that are both versatile and
            trend-driven, without compromising on quality or comfort. We take
            pride in blending the latest designs with exceptional craftsmanship,
            ensuring that every piece you wear feels as good as it looks.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Latest Fashion, our mission is to inspire confidence and
            creativity by delivering high-quality, trendsetting fashion at
            accessible prices. We strive to make fashion an effortless
            experience for everyone, offering a seamless shopping journey and
            styles that fit a variety of tastes and lifestyles.
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
            At Latest Fashion, quality is at the heart of everything we do. We
            meticulously select premium fabrics and materials, ensuring every
            piece meets the highest standards for durability, comfort, and
            style. Our commitment to excellence means you’ll enjoy fashion that
            not only looks great but feels exceptional.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We make shopping easy and accessible, whether you're browsing from
            the comfort of your home or on the go. With a user-friendly website,
            flexible payment options, and fast shipping, we aim to provide a
            seamless experience from browsing to delivery. Fashion has never
            been more convenient.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Your satisfaction is our priority. Our dedicated customer service
            team is always here to assist you, whether you need help choosing
            the perfect outfit or have questions about your order. At Latest
            Fashion, we believe in creating lasting relationships by offering
            personalized support and care every step of the way.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
