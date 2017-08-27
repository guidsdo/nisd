import { ChildProcess } from "child_process";
import { bgBlack, green, rainbow, red } from "colors";
import * as commander from "commander";
import * as sh from "shelljs";

/**
 * This is a CLI tool helps you do npm install per given folder. If you try to do the same
 * with a normal npm command, it will install it in the wrong folder. So this tool simply
 * navigates to the proper folders and does `npm i`. That's it. #ez #boring
 */

commander.arguments("[directories...]").action(onInputReceive).parse(process.argv);

function onInputReceive(directories: string[]) {
    if (!directories.length) {
        console.error(red("No folders given, do normal please.."));
        process.exit(1);
    }
    const command = "npm i";
    for (let directory of directories) {
        sh.pushd(directory);
        sh.exec("npm i");
        sh.popd();
    }
    console.log();
    console.log(bgBlack(rainbow("Done installing in the following directories:")));
    console.log(green(directories.join(", ")));
}
