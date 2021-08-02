import { Route, Switch } from "react-router-dom"
import { AboutPage } from "../pages/about/about"
import { MainPage } from "../pages/main/main"
import { TicketsPage } from "../pages/tickets/tickets"

export const MainContainer = () => {
  return (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/tickets' component={TicketsPage}/>
    </Switch>

  )
}