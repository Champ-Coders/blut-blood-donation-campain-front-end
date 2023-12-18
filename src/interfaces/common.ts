import { IconType } from "react-icons";

import { StaticImageData } from "next/image";

export interface ISocial {
  name: string;
  href: string;
  icon: any;
}

export interface ICurrentBloodRequest {
  id: string;
  location: string;
  bloodGroup: string;
  date: string;
}

export interface IBanner {
  _id: string;
  backgroundImageURL: string;
  quotes: string;
  link: string;
  videoURL: string;
}

export interface ITeamMember {
  id: string;
  name: string;
  position: string;
  image: StaticImageData;
  socialMedia: {
    id: string;
    link: string;
    icon: IconType;
  }[];
}

export interface IOurNews {
  id: string;
  date: string;
  comment: string;
  title: string;
  image: StaticImageData;
  description: string;
}
[];

export interface IEvent {
  id: string;
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
export interface IFormSelector {
  value: string;
  label: string;
}

export interface IPopularCamp {
  title: string;
  des: string;
  image: StaticImageData;
  date: string;
  timeSlot: string;
  address: string;
}
