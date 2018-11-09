import * as commander from "commander";
import { eisd } from "eisd";

commander
    .usage("[options] <directories...>")
    .arguments("[options] <directories...>")
    .option("-a, --async", "Execute npm i async across all folders, output will be a mess")
    .option(
        "-e, --allowErrors",
        "Allow errors (at default we stop when there is one). NOTE: always true when in async mode!"
    )
    .parse(process.argv);

const allowErrors = commander.allowErrors === true;
const async = commander.async === true;

eisd("npm i", commander.args, allowErrors, async);
