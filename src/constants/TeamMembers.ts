import { ITeamMember } from "@/interfaces/common";

import image1 from "../../public/assets/team-member/nora.png";
import image2 from "../../public/assets/team-member/joshi.png";
import image3 from "../../public/assets/team-member/alex.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export const TeamMembers: ITeamMember[] = [
  {
    id: "1",
    name: "Nora Khaypeia",
    position: "Co-Founder",
    image: image1,
    socialMedia: [
      {
        id: "facebook",
        link: "https://www.facebook.com/",
        icon: FaFacebookF,
      },
      {
        icon: FaTwitter,
        id: "twitter",
        link: "https://twitter.com/",
      },
      {
        id: "instagram",
        link: "https://www.instagram.com/",
        icon: FaInstagram,
      },
      {
        id: "pinterest",
        link: "https://www.pinterest.com",
        icon: FaPinterestP,
      },
    ],
  },
  {
    id: "2",
    name: "Joshi",
    position: "Co-Founder",
    image: image2,
    socialMedia: [
      {
        id: "facebook",
        link: "https://www.facebook.com/",
        icon: FaFacebookF,
      },
      {
        icon: FaTwitter,
        id: "twitter",
        link: "https://twitter.com/",
      },
      {
        id: "instagram",
        link: "https://www.instagram.com/",
        icon: FaInstagram,
      },
      {
        id: "pinterest",
        link: "https://www.pinterest.com",
        icon: FaPinterestP,
      },
    ],
  },
  {
    id: "3",
    name: "Alex",
    position: "Co-Founder",
    image: image3,
    socialMedia: [
      {
        id: "facebook",
        link: "https://www.facebook.com/",
        icon: FaFacebookF,
      },
      {
        icon: FaTwitter,
        id: "twitter",
        link: "https://twitter.com/",
      },
      {
        id: "instagram",
        link: "https://www.instagram.com/",
        icon: FaInstagram,
      },
      {
        id: "pinterest",
        link: "https://www.pinterest.com",
        icon: FaPinterestP,
      },
    ],
  },
];
