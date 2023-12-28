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
  date: string;
  comment: string;
  title: string;
  description: string;

  _id: string;
  image: string;
  user: {
    // Define the structure of the user object if needed
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface IEvent {
  id: string;
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export interface IPopularCamp {
  title: string;
  description: string;
  image: StaticImageData;
  event_date: string;
  event_time: string;
  location: string;
  banner: string;
}

export type IUser = {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
  bloodGroup: string;
  address: string;
  dateOfBirth: string; // Assuming the date is in ISO 8601 format
  totalDonation: number;
  totalReceived: number;
  available: boolean;
  notification: number;
};

export type IPerson = {
  id: string;
  name: string;
  title: string;
  role: string;
  email: string;
  telephone: string;
  donation: number;
  imageUrl: string;
};
