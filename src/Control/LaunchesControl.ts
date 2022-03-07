import axios from "axios";
import {Request, Response} from "express";
import {ValidateLaunch} from "../Business/ValidateLaunch";

export class launchesControl {

    public async launches (req: Request, res: Response){
        try {
            let result = []
            try {
                const response = await axios.get('https://ll.thespacedevs.com/2.2.0/event/upcoming/', {
                    params: {
                        include_suborbital: true,
                        lsp__name: 'spacex'
                    }
                });
                const validate = new ValidateLaunch();
                result = validate.process(response.data);

            } catch (error) {
                console.error(error);
            }

            res.status(200).send({launches: result});
        } catch (error) {
            res.status(400).send({erro: error})
        }

    }

}