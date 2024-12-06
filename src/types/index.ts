export type Friend = {
  name: string;
  icon: string;
  url: string;
};

export type Article = {
  title: string;
  date: string;
  url: string;
  image?: string;
};

export type RecentPhoto = {
  image_url: string;
  description: string;
  place: string;
  created_at: string;
};
