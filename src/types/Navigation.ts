export type Navigation = {
  links: NavigationLink[];
  currentPage: string;
};

export type NavigationLink = {
  url: string;
  label: string;
};
