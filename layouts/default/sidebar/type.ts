interface ChildNavItem {
  label: string;
  route: string;
}

export interface NavItem {
  icon: string;
  route: string;
  label: string;
  children?: ChildNavItem[];
}
