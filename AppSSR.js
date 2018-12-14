import React from "react";
//使用静态 static router
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import Loadable from "react-loadable";

//下面这个是需要让react-loadable在服务端可运行需要的，下面会讲到
import { getBundles } from "react-loadable/webpack";
import stats from "../build/react-loadable.json";

import AppRoutes from "src/AppRoutes";

class SSR {
  render(url, data) {
    let codules = [];
    const context = {};
    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={url} context={context}>
          <AppRoutes initialData={data} />
        </StaticRouter>
      </Loadable.Capture>
    );
    let bundles = getBundles(stats, modules);
    return {
      html,
      scripts: this.generateBundleScripts(bundles)
    };
  }

  generateBundleScripts(bundles) {
    return bundles
      .filter(bundle => bundle.file.endsWith(".js"))
      .map(bundle => {
        return `<script type="text/javascript" src="${
          bundle.file
        }"></script>\n`;
      });
  }

  static preloadAll() {
    return Loadable.preloadAll();
  }
}

export default SSR;
