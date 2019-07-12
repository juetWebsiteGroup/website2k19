import express from "express";
import path from "path";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "../../build/react-loadable.json";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import IndexRender from "../main.jsx";
import { StaticRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOMServer from "react-dom/server";
import serialize from "serialize-javascript";

import { matchRoutes } from "react-router-config";
import { routes } from "../Routes.jsx";

import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";

require("dotenv").config();
const compression = require("compression");
//import * as faculty from './middlewares/FacultyRecord'
import * as admission from "./middlewares/Admission";
import * as admCounter from "./middlewares/VisitorCount";

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(morgan());
app.use(helmet());
app.use(compression());
app.use(express.static("build", { maxage: "0" }));
app.use(express.static("views", { maxage: "31536000" }));
app.use("/juet", express.static("build", { maxage: "604800" }));
app.use("/static", express.static("static", { maxage: "2592000000" }));
//app.use('/api/faculty',faculty)
app.use("/api/admission", admission);
app.use("/api/counter", admCounter);
const juetStore = configureStore({});

app.get("/*", (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(juetStore) : Promise.resolve(null);
  });
  return Promise.all(promises).then(data => {
    const context = {};
    let modules = [];
    const ServerRenderData = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={juetStore}>
          <Router location={req.url} context={context}>
            <IndexRender />
          </Router>
        </Provider>
      </Loadable.Capture>
    );

    let bundles = getBundles(stats, modules);

    res.render("index", { RenderData: ServerRenderData, Bundles: bundles, dataFromServer: serialize(juetStore.getState()) });
  });
});

const PORT = process.env.PORT || 3000;

Loadable.preloadAll().then(() => {
  app.listen(PORT, err => {
    if (err) {
      console.log(err);
    }

    console.log("Server Started at PORT_NUMBER:" + PORT);
  });
});
