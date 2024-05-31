import { Menu } from "@/types/menu";
import { Url, parse } from "url";



const menuData: Menu[] = [
  {
    id: 100,
    title: "Home",
    path: "/",
    newTab: false,
    href: ""
  },
  {
    id: 200,
    title: "About",
    path: "/about",
    newTab: false,
    href: ""
  },
  {
    id: 3300,
    title: "Categories",
    newTab: false,
    submenu: [
      {
        id: 33001,
        title: "Médical et Santé",
        path: "/blog",
        newTab: false,
        href: ""
      },
      {
        id: 33002,
        title: "Défenses des animaux",
        path: "/blog",
        newTab: false,
        href: ""
      },
      {
        id: 33003,
        title: "Soutien aux orphelins",
        path: "/blog",
        newTab: false,
        href: ""
      },
      {
        id: 33004,
        title: "écoles et éducation",
        path: "/blog",
        newTab: false,
        href: ""
      },
      {
        id: 33005,
        title: "Aide aux sinistrés",
        path: "/blog",
        newTab: false,
        href: ""
      },
    ],
    href: ""
  },
  {
    id: 300,
    title: "Support",
    path: "/contact",
    newTab: false,
    href: ""
  },
  {
    id: 400,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 4001,
        title: "About Page",
        path: "/about",
        newTab: false,
        href: ""
      },
      {
        id: 4002,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
        href: ""
      },
      {
        id: 4003,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
        href: ""
      },
      {
        id: 4004,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
        href: ""
      },
      {
        id: 4005,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
        href: ""
      },
      {
        id: 4006,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
        href: ""
      },
      {
        id: 4007,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
        href: ""
      },
      {
        id: 4008,
        title: "Error Page",
        path: "/error",
        newTab: false,
        href: ""
      },
    ],
    href: ""
  },
];
export default menuData;