import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 10000,
    title: "Collectez des fonds pour soutenir l’intervention médicale urgente d’un animal",
    paragraph:
      "1 animal sur 3 aura besoin d’une intervention médicale urgente cette année, pouvant impliquer une dépense importante mais pourtant nécessaire. Lancez une cagnotte GoFundMe pour venir en aide à vos animaux ou pour soutenir une association.",
    image: "/images/blog/blog1-01.jpg",
    author: {
      name: "Sarra Mejdi",
      image: "/images/blog/author1-01.png",
      designation: "Association QUATRE PATTES",
    },
    tags: ["Urgent"],
    publishDate: "2024",
  },
  {
    id: 20000,
    title: "Venez en aide aux animaux, victimes innocentes des catastrophes naturelles",
    paragraph:
      "Les catastrophes naturelles peuvent partir les animaux sauvages effrayés et les abris surchargés par les animaux de compagnie qui ont été perdus ou abandonnés par leurs propriétaires. Lancez une cagnotte GoFundMe pour soutenir un refuge ou une association qui donne à ces animaux une seconde chance.",
    image: "/images/blog/blog1-02.jpg",
    author: {
      name: "Khalil Lakhoua",
      image: "/images/blog/author1-02.png",
      designation: " Association Éthique Animale",
    },
    tags: ["Urgent"],
    publishDate: "2024",
  },
  {
    id: 30000,
    title: "Collectez des fonds pour les animaux des refuges",
    paragraph:
      "Les animaux placés en refuge ne peuvent compter que sur ces structures pour leur trouver un foyer permanent. Collectez des fonds pour couvrir l’achat de leur nourriture, de leurs fournitures et autres nécessités mais aussi pour couvrir les frais d’adoption des refuges de votre région.",
    image: "/images/blog/blog1-03.jpg",
    author: {
      name: "Zied Ben Bahri",
      image: "/images/blog/author1-03.png",
      designation: " Association Protection des animaux de Tunisie",
    },
    tags: ["Urgent"],
    publishDate: "2024",
  },
];
export default blogData;