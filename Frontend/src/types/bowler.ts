import type { team } from "./team";

export type bowler = {
    bowlerID: number,
    bowlerLastName: string,
    bowlerFirstName: string,
    bowlerMiddleInit: string,
    bowlerAddress: string,
    bowlerCity: string,
    bowlerState: string,
    bowlerZip: string,
    bowlerPhoneNumber: string,
    teamID: number,
    team: team
};