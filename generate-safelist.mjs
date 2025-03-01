import * as fs from "fs";
import { classes } from "./classes.mjs";

fs.writeFile("safelist.txt", classes.join("\n"), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Safelist created");
  }
});
