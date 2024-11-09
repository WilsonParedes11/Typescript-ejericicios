"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app/app.component");
const app_config_server_1 = require("./app/app.config.server");
const bootstrap = () => (0, platform_browser_1.bootstrapApplication)(app_component_1.AppComponent, app_config_server_1.config);
exports.default = bootstrap;
