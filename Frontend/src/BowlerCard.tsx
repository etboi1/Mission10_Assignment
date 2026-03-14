import type { bowler } from "./types/bowler";

function BowlerCard({ bowlerFirstName, bowlerLastName, bowlerMiddleInit, bowlerAddress, bowlerCity, bowlerState, bowlerZip, bowlerPhoneNumber, team }: bowler) {
    return (
        <div className="col-md-4">
            <div className="card shadow-sm h-100">
                <div className="card-body">
                    {/* Name */}
                    <h5 className="card-title text-primary mb-1">
                        {bowlerFirstName} {bowlerMiddleInit}. {bowlerLastName}
                    </h5>

                    {/* Team */}
                    <h6 className="card-subtitle mb-3 text-muted text-uppercase small fw-bold">
                        {team.teamName}
                    </h6>

                    {/* Details */}
                    <div className="border-top pt-2">
                        <p className="card-text mb-0 small">
                            <span className="fw-semibold">Location:</span> {bowlerAddress}, {bowlerCity}, {bowlerState} {bowlerZip}
                        </p>
                        <p className="card-text mb-0 small">
                            <span className="fw-semibold">Phone:</span> {bowlerPhoneNumber}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BowlerCard;