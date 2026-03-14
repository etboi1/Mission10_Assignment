import { useEffect, useState } from "react";
import type { bowler } from "./types/bowler";
import BowlerCard from "./BowlerCard";

function BowlerList() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
            const response = await fetch('http://localhost:4000/api/BowlingLeague');
            const data = await response.json();
            console.log(data);
            setBowlers(data);
        }

        fetchBowlers();
    }, []);

    return (
        <div className='row g-4 p-5'>
            {bowlers.map((b) => <BowlerCard {...b} />)}
        </div>
    )
}

export default BowlerList;