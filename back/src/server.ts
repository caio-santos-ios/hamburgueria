import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Database connect.")
        app.listen(process.env.PORT_SERVER, () => console.log("Server running."))
    })
    .catch((err) => console.log(err))