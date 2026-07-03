export interface Project {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  date: string;
  image: string;
  tags: string[];
  tagsZh: string[];
  featured: boolean;
  order: number;
}

export interface Article {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  date: string;
  tags: string[];
  tagsZh: string[];
  readingTime: string;
}

export interface PlaygroundItem {
  title: string;
  description: string;
  status: "live" | "experiment" | "archived";
  link?: string;
  tags: string[];
}
