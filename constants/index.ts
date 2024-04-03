import {
  twitter,
  support,
  facebook,
  instagram,
  truckFast,
  shieldTick,
} from "@/public/assets/icons";

import {
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "@/public/assets/images";

import {
  IReviews,
  IServices,
  IProducts,
  INavLinks,
  IStatistics,
  ISocialMedia,
  IFooterLinks,
} from "@/types";

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#aboutus", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contactus", label: "Contact Us" },
];

export const shoes = [thumbnailShoe1, thumbnailShoe2, thumbnailShoe3];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: "4.5",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: "4.9",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: "4.6",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: "4.7",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  // {
  //   imgURL: support,
  //   label: "Love to help you",
  //   subtext: "Our dedicated team is here to assist you every step of the way.",
  // },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks: IFooterLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1" },
      { name: "Air Max 1" },
      { name: "Air Jordan 1" },
      { name: "Air Force 2" },
      { name: "Nike Waffle Racer" },
      { name: "Nike Cortez" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us" },
      { name: "FAQs" },
      { name: "How it works" },
      { name: "Privacy policy" },
      { name: "Payment policy" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+20 1060417763", link: "tel:+201060417763" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];




