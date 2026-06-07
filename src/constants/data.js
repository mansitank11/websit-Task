import heroImg from "../assets/img/1.webp";
import img2File from "../assets/img/2.jpg";

import img4File from "../assets/img/4.jpg";
import img5File from "../assets/img/5.webp";
import img6File from "../assets/img/6.webp";
import img7File from "../assets/img/7.webp";
import img8File from "../assets/img/8.webp";

export const IMAGES = {
  hero: heroImg,
  img2: img2File,
  gif: "https://asensebranding.s3.ap-south-1.amazonaws.com/portfolio/adani/3.gif",
  img4: img4File,
  img5: img5File,
  img6: img6File,
  img7: img7File,
  img8: img8File,
};

export const NAV_LINKS = ["Home", "About Us", "Spices", "Heritage", "Contact Us"];
export const SERVICES_TAGS = ["Ground Spices", "Blended Masalas", "Whole Spices", "Pickles"];

export const GALLERY_ITEMS = [
  { src: IMAGES.img2, label: "Signature Blends", category: "Blended Masalas", size: "large" },
  { src: IMAGES.img4, label: "Pure Ground Spices", category: "Ground Spices", size: "small" },
  { src: IMAGES.img5, label: "Aromatic Whole Spices", category: "Whole Spices", size: "small" },
  { src: IMAGES.img6, label: "Traditional Pickles", category: "Pickles", size: "small" },
  { src: IMAGES.img7, label: "Festive Gift Boxes", category: "Gift Packs", size: "small" },
  { src: IMAGES.img8, label: "Estd. 1955 Quality Selection", category: "Ground Spices", size: "wide" },
];

export const FOOTER_COMPANY = ["About Us", "Our Heritage", "Quality Standards", "Exports", "Recipes", "Careers", "Contact Us"];
export const FOOTER_SERVICES = ["Ground Spices", "Blended Masalas", "Whole Spices", "Asafoetida (Hing)", "Premium Pickles", "Gift Packs"];
export const SOCIALS = ["Facebook", "Instagram", "LinkedIn", "Behance", "Pinterest", "WhatsApp", "Youtube", "X"];
