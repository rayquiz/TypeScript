//// [tests/cases/compiler/visibilityOfCrossModuleTypeUsage.ts] ////

//// [visibilityOfCrossModuleTypeUsage_commands.ts]
//visibilityOfCrossModuleTypeUsage

import fs = require('./visibilityOfCrossModuleTypeUsage_fs');
import server = require('./visibilityOfCrossModuleTypeUsage_server');

export interface IConfiguration {
    workspace: server.IWorkspace;
    server?: server.IServer;
}

//// [visibilityOfCrossModuleTypeUsage_server.ts]
export interface IServer {
}

export interface IWorkspace {
    toAbsolutePath(server: IServer, workspaceRelativePath?: string): string;
}

//// [visibilityOfCrossModuleTypeUsage_fs.ts]
import commands = require('./visibilityOfCrossModuleTypeUsage_commands');
function run(configuration: commands.IConfiguration) {
    var absoluteWorkspacePath = configuration.workspace.toAbsolutePath(configuration.server);
}

//// [visibilityOfCrossModuleTypeUsage_server.js]
//// [visibilityOfCrossModuleTypeUsage_commands.js]
//visibilityOfCrossModuleTypeUsage
//// [visibilityOfCrossModuleTypeUsage_fs.js]
function run(configuration) {
    var absoluteWorkspacePath = configuration.workspace.toAbsolutePath(configuration.server);
}
