import ImageComponent from "./ImageComponent";

interface Team {
  team: {
    crest: string;
    shortName: string;
  };
  goalDifference: number;
  playedGames: number;
  goalsAgainst: number;
  goalsFor: number;
  won: number;
  lost: number;
  draw: number;
  points: number;
}

interface StandingsProps {
  league: string;
  plStandings: Team[];
  saStandings: Team[];
}

export const PLTable = ({
  plStandings,
  saStandings,
  league,
}: StandingsProps) => {
  const standings = league === "EPL" ? plStandings : saStandings;
  return (
    <div className="p-2">
      <div className="row text-center fw-bold">
        <div className="col-3">2024-2025</div>
        <div className="col">GP</div>
        <div className="col">W</div>
        <div className="col">D</div>
        <div className="col">L</div>
        <div className="col">F</div>
        <div className="col">A</div>
        <div className="col">GD</div>
        <div className="col">P</div>
      </div>
      {standings.map((team: Team, idx: number) => {
        return (
          <div
            className={`row py-1 ${
              idx !== 0 && league === "EPL"
                ? "border-table"
                : league === "Serie A"
                ? "border-table-it"
                : ""
            }`}
            key={idx}
          >
            <div className="col-3 d-flex">
              <span className="px-3">{idx + 1}.</span>
              <ImageComponent width="25px" imageUrl={team.team.crest} />
              <span className="ps-2">{team.team.shortName}</span>
            </div>
            <div className="col">{team.playedGames}</div>
            <div className="col">{team.won}</div>
            <div className="col">{team.draw}</div>
            <div className="col">{team.lost}</div>
            <div className="col">{team.goalsFor}</div>
            <div className="col">{team.goalsAgainst}</div>
            <div className="col">{team.goalDifference}</div>
            <div className="col">{team.points}</div>
          </div>
        );
      })}
    </div>
  );
};
