export interface INav {
  name: string;
  path: string;
  children?: INavChildren[];
}

export interface INavChildren {
  key: string;
  label: string;
}
