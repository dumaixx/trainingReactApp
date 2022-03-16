import { Route, Switch } from "react-router-dom"
import { AppRoutes } from "../../constants/app-routes"
import { AboutPage } from "../pages/about/about"
import { MainPage } from "../pages/main/main"
import { SpecialPage } from "../pages/special/special"

export const MainContainer = () => {
  return (
    <Switch>
        <Route exact path={AppRoutes.Main} component={MainPage}/>
        <Route path={AppRoutes.About} component={AboutPage}/>
        <Route path={AppRoutes.Special} component={SpecialPage}/>
    </Switch>
  );
};