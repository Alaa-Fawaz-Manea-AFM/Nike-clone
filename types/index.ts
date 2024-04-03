export type INavLinks = {
  href: string;
  label: string;
}[];

export type IStatistics = { value: string; label: string }[];
export type IProducts = {
  imgURL: string;
  name: string;
  price: string;
  rating: string;
};

export type IServices = {
  imgURL: string;
  label: string;
  subtext: string;
};

export type IReviews = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

export type IFooterLinks = {
  title: string;
  links: { name: string; link?: string }[];
}[];

export type ISocialMedia = {
  src: string;
  alt: string;
}[];

export type IButton = {
  label: string;
  iconURL?: string;
  fullWidth?: boolean;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
};
