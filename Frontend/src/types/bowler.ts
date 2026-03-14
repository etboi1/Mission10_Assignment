import type { team } from "./team";

export type bowler = {
    bowlerid: number,
    bowlerlastname: string,
    bowlerfirstname: string,
    bowlermiddleinit: string,
    bowleraddress: string,
    bowlercity: string,
    bowlerstate: string,
    bowlerzip: string,
    bowlerphonenumber: string,
    teamid: number,
    team: team
};