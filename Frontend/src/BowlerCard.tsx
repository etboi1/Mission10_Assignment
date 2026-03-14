import type { bowler } from "./types/bowler";

function BowlerCard({ bowlerfirstname, bowlerlastname, bowlermiddleinit, bowleraddress, bowlercity, bowlerstate, bowlerzip, bowlerphonenumber, team }: bowler) {
    return (
        <div className="col-md-4">
            <div className="card shadow-sm h-100">
                <div className="card-body">
                    {/* Name */}
                    <h5 className="card-title text-primary mb-1">
                        {bowlerfirstname} {bowlermiddleinit}. {bowlerlastname}
                    </h5>

                    {/* Team */}
                    <h6 className="card-subtitle mb-3 text-muted text-uppercase small fw-bold">
                        {team.teamname}
                    </h6>

                    {/* Details */}
                    <div className="border-top pt-2">
                        <p className="card-text mb-0 small">
                            <span className="fw-semibold">Location:</span> {bowleraddress}, {bowlercity}, {bowlerstate} {bowlerzip}
                        </p>
                        <p className="card-text mb-0 small">
                            <span className="fw-semibold">Phone:</span> {bowlerphonenumber}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BowlerCard;