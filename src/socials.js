import { FaBluesky } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socials = [
  {
    name: "Blue Sky",
    icon: <FaBluesky />,
    link: "https://bsky.app/profile/atakanermis.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/atakan-ermi%C5%9F-1671a01a2/",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/AtakanErmis",
  },
  {
    name: "E-Mail",
    icon: <MdOutlineEmail />,
    link: "mailto:me@atakanermis.com",
  },
];

export default socials;
