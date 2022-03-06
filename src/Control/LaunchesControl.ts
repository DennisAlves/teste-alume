import axios from "axios";
import {Request, Response} from "express";

export class launchesControl {

    public async launches (req: Request, res: Response){
        try {
            let launcheList = ''
            try {
                const response = await axios.get('https://ll.thespacedevs.com/2.2.0/event/upcoming/', {
                    params: {
                        include_suborbital: true,
                        lsp__name: 'spacex'
                    }
                });
                launcheList = response.data;
            } catch (error) {
                console.error(error);
            }
            res.status(200).send({menssagem: launcheList});
        } catch (error) {
            res.status(400).send({erro: error})
        }

    }

}