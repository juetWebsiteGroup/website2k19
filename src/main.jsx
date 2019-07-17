import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBarPackage from "./juet/header/navbarMain.jsx";
import FooterMake from "./juet/footer/footerMain.jsx";

import { AdmissionNavbar } from "./juet/Admissions/tempAdm/AdmissionNavbar";
import { AdmissionFooter } from "./juet/Admissions/tempAdm/AdmissionFooter";
// import {renderRoutes} from 'react-router-config'
import { routes } from "./Routes.jsx";
import "./juet/LandingPage/styles/body.css";

import { ErrorPageNotFound } from "./juet/NotFound/NotFound.jsx";
class IndexRender extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBarPackage />
        {/* <AdmissionNavbar /> */}
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => {
            return <Route key={path} path={path} exact={exact} render={props => <C {...props} {...rest} />} />;
          })}
          <Route component={ErrorPageNotFound} />
        </Switch>
        {/* <AdmissionFooter /> */}
        <FooterMake />
      </div>
    );
  }
}
export default withRouter(IndexRender);
