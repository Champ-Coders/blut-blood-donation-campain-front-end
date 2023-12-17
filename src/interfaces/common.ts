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
