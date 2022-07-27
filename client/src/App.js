import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LayoutAdmin from "./Layout/LayoutAdmin/LayoutAdmin";

import login from "./components/Web/Login/Login";
import Register from "./components/Web/Register/Register";
import ForgotPassword from "./components/Web/ForgotPassword/ForgotPassword";
import AddItem from "./Pages/Admin/dist/Additem";
import Admin from "./Pages/Admin/Admin";


function App() {
  return (
    
      <Router basename="/">
        <Switch>
          <Route exact path={"/"} component={login} />
          <Route path={"/register"} component={Register} />
          <Route path={"/ForgotPassword"} component={ForgotPassword} />
            <Route path="/admin/additem" component={AddItem}/>
            <Route path="/admin" component={Admin}/>
        </Switch>
      </Router>
  );
}

{
  /*function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}
*/
}

export default App;
