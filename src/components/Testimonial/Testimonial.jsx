import React from "react";
// import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,

return (
<>
<span id="services"></span>
<div className="py-10">
  <div className="container">
    <div className="text-center mb-20 max-w-[400px] mx-auto">
      <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
        Our Services
      </p>
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-xs text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Perspiciatis delectus architecto error nesciunt,
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
      {testimonialData.map((testimonial) => (
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
        >
          <div className="h-[100px]">
            <img
              src={testimonial.img}
              alt=""
              className="max-w-[200px] block mx-auto transform -translate-y-14
            group-hover:scale-105 group-hover:rotate-6 duration-300"
            />
          </div>
          <div className="p-4 text-center">
            <div className="w-full ">
              {/* <StarRatings
                rating={4}
                starRatedColor="yellow"
                isSelectable={false}
                starHoverColor="yellow"
                // starSelectingHoverColor
                starDimension="20px"
                changeRating={() => {}}
                numberOfStars={5}
                name="rating"
              /> */}
            </div>
            <h1 className="text-xl font-bold">{testimonial.name}</h1>
            <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
              {testimonial.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</>
);
  };


export default Testimonial;
