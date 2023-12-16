export interface INav {
  name: string;
  path: string;
  children: NavList[];
}

type NavList = {
  name: string;
  path: string;
};
