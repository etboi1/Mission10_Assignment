import { useEffect, useState } from "react";
import type { bowler } from "./types/bowler";
import BowlerCard from "./BowlerCard";

function BowlerList() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
            const response = await fetch('https://localhost:5000/Bowlers');
            const data = await response.json();
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