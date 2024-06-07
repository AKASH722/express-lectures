// import { app } from "./app.js";
import { app } from "./task_2.js";

import * as dotenv from "dotenv";

dotenv.config({ path: "./env" });

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running at port: ${process.env.PORT || 4000}`);
});
