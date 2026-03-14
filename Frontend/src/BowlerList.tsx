import { useState } from "react";
import type { bowler } from "./types/bowler";

function BowlerList() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    const fetchBowlers = async () => {
        const response = await fetch('https://localhost:5000/Bowlers');
        const data = await response.json();
        setBowlers(data);
    }

    fetchBowlers;
}

export default BowlerList;