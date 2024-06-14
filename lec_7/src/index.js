import { app } from "./task.js";

import * as dotenv from "dotenv";

dotenv.config({ path: "./env" });

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running at port: ${process.env.PORT || 4000}`);
});
