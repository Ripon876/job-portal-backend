import { config } from "dotenv";
config();

import { PORT } from "@constants/appContants";
import server from "./app";

// /**
//  * Start server.
//  */
server.listen(PORT, () => {
  console.log("App is running at http://localhost:%d ", PORT);
  console.log("Press CTRL-C to stop\n");
});
