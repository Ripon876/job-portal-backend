import server from "./app";
import errorHandler from "errorhandler";
import { PORT } from "@configs/appConfigs";

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
  server.use(errorHandler());
}

// /**
//  * Start server.
//  */
server.listen(PORT, () => {
  console.log("App is running at http://localhost:%d ", PORT);
  console.log("Press CTRL-C to stop\n");
});
