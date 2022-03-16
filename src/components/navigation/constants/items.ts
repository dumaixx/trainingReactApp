import { AppRoutes } from "../../../constants/app-routes";
import { PageNames } from "../../../constants/page-names";

export interface IItemNavigation {
  id: number;
  name: string;
  route: string;
}

export const items: IItemNavigation[] = [
  {
    id: 1,
    name: PageNames.Main,
    route: AppRoutes.Main,
  },
  {
    id: 2,
    name: PageNames.Special,
    route: AppRoutes.Special,
  },
  {
    id: 3,
    name: PageNames.About,
    route: AppRoutes.About,
  },
];