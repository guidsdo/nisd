"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("colors");
const commander = require("commander");
const sh = require("shelljs");
/**
 * This is a CLI tool helps you do npm install per given folder. If you try to do the same
 * with a normal npm command, it will install it in the wrong folder. So this tool simply
 * navigates to the proper folders and does `npm i`. That's it. #ez #boring
 */
commander.arguments("[directories...]").action(onInputReceive).parse(process.argv);
function onInputReceive(directories) {
    if (!directories.length) {
        console.error(colors_1.red("No folders given, do normal please.."));
        process.exit(1);
    }
    const command = "npm i";
    for (let directory of directories) {
        sh.pushd(directory);
        console.log(colors_1.yellow("npm installing in: " + directory));
        sh.exec(command);
        console.log(colors_1.green("Done"));
        sh.popd();
    }
    console.log();
    console.log(colors_1.bgBlack(colors_1.rainbow("Done installing in the following directories:")));
    console.log(colors_1.green(directories.join(", ")));
}
