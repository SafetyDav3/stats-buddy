module.exports ={
    seasonStats: (statArray) => {
        let seasonAB = 0
        let seasonHits = 0
        let seasonBB = 0
        let seasonStrikeouts = 0
        let seasonRBIs = 0
        let seasonRS = 0
        let seasonSB = 0
        let seasonInnings = 0
        let seasonEarnedRuns = 0
        let seasonHitsGiven = 0
        let seasonK = 0
        let seasonWalks = 0
        
        for (let i = 0; i < statArray.length; i++) {
            seasonAB = seasonAB + statArray[i].ab
            seasonHits = seasonHits + statArray[i].hits
            seasonBB = seasonBB + statArray[i].bb
            seasonStrikeouts = seasonStrikeouts + statArray[i].strikeouts
            seasonRBIs = seasonRBIs + statArray[i].rbi
            seasonRS = seasonRS + statArray[i].rs
            seasonSB = seasonSB + statArray[i].sb
            seasonInnings = seasonInnings + (Math.trunc(statArray[i].innings) + ((10 * (statArray[i].innings - Math.trunc(statArray[i].innings)))/3))
            seasonEarnedRuns = seasonEarnedRuns + statArray[i].earned_runs
            seasonHitsGiven = seasonHitsGiven + statArray[i].hitsGiven
            seasonK = seasonK + statArray[i].k
            seasonWalks = seasonWalks + statArray[i].walks
        }
        let seasonAVG = (seasonHits/seasonAB).toFixed(3)
        let seasonOBP = ((seasonHits+seasonBB)/(seasonAB+seasonBB)).toFixed(3)
        let seasonERA = (9 * (seasonEarnedRuns/seasonInnings)).toFixed(2)
        
        if (isNaN(seasonAVG)) {
            seasonAVG = (0).toFixed(3)
        }
        if (isNaN(seasonOBP)) {
            seasonOBP = (0).toFixed(3)
        }
        if (isNaN(seasonERA)) {
            seasonERA = (0).toFixed(2)
        }
        
        seasonInnings = Math.trunc(seasonInnings) + (((seasonInnings - Math.trunc(seasonInnings)) * 3) / 10)
        seasonInnings = Math.round(seasonInnings * 10) / 10
        
        const seasonData = '<td>' + seasonAB + '</td><td>' + seasonHits + '</td><td>' + seasonBB + '</td><td>' + seasonStrikeouts + '</td><td>' + seasonRBIs + '</td><td>' + seasonRS + '</td><td>' + seasonSB + '</td><td>' + seasonAVG + '</td><td>' + seasonOBP + '</td><td>' + seasonInnings + '</td><td>' + seasonEarnedRuns + '</td><td>' + seasonERA + '</td><td>' + seasonHitsGiven + '</td><td>' + seasonK + '</td><td>' + seasonWalks + '</td>';  
                                                                                                                                                                                                                                                           

        return seasonData;
    },
    gameERA: (earned_runs, innings) => {
        let gERA = (9 * (earned_runs/innings)).toFixed(2)
        if (isNaN(gERA)) {
            gERA = (0).toFixed(2)
        }
        return gERA
    },
    gameOBP: (hits, bb, ab) => {
        let onBase = ((hits+bb)/(ab+bb)).toFixed(3)
        if (isNaN(onBase)) {
            onBase = (0).toFixed(3)
        }
        return onBase
    },
    inc: (num) => {
        num = num + 1;
        return num;
    },
    gameAVG: (hits, ab) => {
        let average = (hits/ab).toFixed(3);
        if (isNaN(average)) {
            average = (0).toFixed(3);
        }
        return average;
    }
}