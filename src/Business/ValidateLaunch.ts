import {IStrategy} from "./IStrategy";
import {Launch} from "../Model/launche";
import {DateTime} from 'luxon'

export class ValidateLaunch implements IStrategy {

    public process(events: any): any {

        const Months = 6;
        const launches: Launch[] = [];
        if( !events.results ){
            return launches
        }
        events.results.forEach(((evt: any) => {
            if (evt.launches.length > 0 && evt.launches[0].launch_service_provider && evt.launches[0].launch_service_provider.name === 'SpaceX') {
                const launchDate = DateTime.fromISO(evt.launches[0].window_start);
                const launchLimit = DateTime.now().plus({months: Months});
                if (launchDate < launchLimit &&  DateTime.now() < launchDate ) {
                    const launch = new Launch(
                        evt.launches[0].mission.name,
                        evt.launches[0].mission.description,
                        evt.launches[0].pad.location.name,
                        evt.launches[0].mission.orbit.name,
                        launchDate.setLocale('pt-BR').toFormat('dd/LL/yyyy')
                    )
                    launches.push(launch);
                }
            }
        }))
        return launches;
    }
}