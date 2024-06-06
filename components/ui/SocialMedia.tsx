import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
  FiFacebook,
  FiShare,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiFacebook />,
    url: "https://www.stoman.me/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
  {
    id: 5,
    icon: <FiYoutube />,
    url: "https://www.youtube.com/c/",
  },
];

export default function Social() {
  return (
    <ul className="flex gap-4 sm:gap-8 justify-center">
      {socialLinks.map((link) => (
        <a
          href={link.url}
          target="__blank"
          key={link.id}
          className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
        >
          <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
        </a>
      ))}
    </ul>
  );
}
