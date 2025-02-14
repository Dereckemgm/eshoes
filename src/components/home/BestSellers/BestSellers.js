import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Pantallas móviles tienen un ancho menor o igual a 768px
    };

    handleResize(); // Comprobar inicialmente
    window.addEventListener("resize", handleResize); // Listener para cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar listener
    };
  }, []);

  const calculateDiscountedPrice = (price) => {
    return Math.round(price * 0.6).toLocaleString("es-CO"); // Aplica el 40% de descuento y formatea
  };

  const products = [
    {
      _id: "1011",
      img: bestSellerOne,
      productName: "Flower Base",
      price: 35000.0,
      discountedPrice: calculateDiscountedPrice(35000.0),
      color: "Blank and White",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1012",
      img: bestSellerTwo,
      productName: "New Backpack",
      price: 18000.0,
      discountedPrice: calculateDiscountedPrice(18000.0),
      color: "Gray",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1013",
      img: bestSellerThree,
      productName: "Household materials",
      price: 2500.0,
      discountedPrice: calculateDiscountedPrice(2500.0),
      color: "Mixed",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1014",
      img: bestSellerFour,
      productName: "Travel Bag",
      price: 22000.0,
      discountedPrice: calculateDiscountedPrice(22000.0),
      color: "Black",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-5">
      <Heading heading="" />
      {isMobile ? (
        // Diseño en grid para pantallas móviles
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      ) : (
        // Carrusel para pantallas más grandes
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product._id} className="px-2">
              <Product {...product} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BestSellers;
