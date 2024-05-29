import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: " Soutenez la lutte de Charbel contre la leucémie",
    paragraph:
      "Charbel, un mari et père dévoué, lutte contre la leucémie à 41 ans, désirant retourner au Liban pour une chirurgie vitale face aux difficultés financières en Arabie saoudite. Sa famille cherche un soutien pour alléger les frais médicaux et de voyage, dans le but de le réunir avec ses proches pour un traitement urgent. ",
    image: "/images/blog/blog-01.jpg",
   /* author: {
      name: "Sarra Mejdi",
      image: "/images/blog/author-01.png",
      designation: "Association Croissant Rouge",
    },*/
    tags: ["Urgent"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Se battre contre le cancer à 15 ans",
    paragraph:
      "Nathan, 15 ans, a reçu un diagnostic de cancer, un Sarcome Synovial, avec des métastases possibles aux poumons. Sa famille fait face à des défis financiers alors que sa mère a dû quitter son travail pour l'accompagner à l'hôpital et que son père prend en charge leurs autres enfants. Nathan commencera bientôt une chimiothérapie intensive, suivi éventuellement de radiothérapie.",
    image: "/images/blog/blog-02.jpg",
    /*author: {
      name: "Khalil Lakhoua",
      image: "/images/blog/author-02.png",
      designation: " Association Tunisienne de Lutte Contre le Cancer",
    },*/
    tags: ["Urgent"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Unir nos mains pour un miracle.",
    paragraph:
      "Evelina, 17 ans, lutte contre un cancer avancé avec une espérance de vie maximale de 13 mois sous chimiothérapie, cherchant désespérément des options de traitement malgré des ressources limitées. Ses souhaits comprennent des expériences uniques et la participation à des essais cliniques pour prolonger sa vie.",
    image: "/images/blog/blog-03.jpg",
    /*author: {
      name: "Zied Ben Bahri",
      image: "/images/blog/author-03.png",
      designation: " Association Maram",
    },*/
    tags: ["Urgent"],
    publishDate: "2024",
  },
];
export default blogData;