"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const core_1 = require("@angular/core");
const platform_server_1 = require("@angular/platform-server");
const app_config_1 = require("./app.config");
const serverConfig = {
    providers: [
        (0, platform_server_1.provideServerRendering)()
    ]
};
exports.config = (0, core_1.mergeApplicationConfig)(app_config_1.appConfig, serverConfig);
