import {AddressInfo} from "net";
import express from "express";
import {UpcomingLaunchesRouter} from "./Routers/UpcomingLaunchesRouter";

const app = express();
const cors = require('cors');
app.use(express.json(),cors());

async function main(): Promise<void> {
    app.use('',UpcomingLaunchesRouter);
}

main()

const server = app.listen(3001, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Falha ao rodar o servidor.`);
    }
});