import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Association el fell pour l'environnement",
    paragraph:
      "c'est une association qui fait beaucoup d'opérations de sauvetages et d'adoptions de plusieurs chiens et chats errants, avec l'accueil dans le centre des animaux malades ou handicapés.",
    image: "/images/blog/blog1.png",
    
    tags: ["+102 %"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "SFAX el khayria",
    paragraph:
      " c'est une association en Tunisie dédiée à soutenir les orphelins. Elle fournit un hébergement sécurisé, une éducation, et des soins médicaux aux enfants sans soutien familial, leur offrant ainsi une chance de construire un avenir meilleur .",
    image: "/images/blog/blog2.png",
   
    tags: ["+216 %"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "La Cimade.",
    paragraph:
      " c'est une organisation dédiées pour aider les réfugiés et les migrants par le biais de programmes d'intégration, d'assistance juridique et de soutien psychologique Ces efforts visent à améliorer les conditions de vie des personnes déplacées .",
    image: "/images/blog/blog.png",
    
    tags: ["115 %"],
    publishDate: "2024",
  },
];
export default blogData;
