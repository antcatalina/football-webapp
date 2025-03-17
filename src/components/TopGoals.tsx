import ImageComponent from "./ImageComponent";

interface Player {
  player: {
    name: string;
    firstName: string;
    lastName: string;
  };
  team: {
    name: string;
    crest: string;
  };
  goals: number;
}

interface TopGoalsProps {
  league: string;
  plScorers: Player[];
  saScorers: Player[];
}

export const TopGoals = ({ plScorers, saScorers, league }: TopGoalsProps) => {
  const data = league === "EPL" ? plScorers : saScorers;
  return (
    <div className="p-2 text-center mt-3">
      {data.map((player: Player, idx: number) => {
        return idx === 0 ? (
          <div>
            <h3>{player.player.name}</h3>
            <div className="d-flex justify-content-center">
            <ImageComponent width="50px" imageUrl={player.team.crest} />
            <h5 className="pt-3 ps-2">{player.team.name}</h5>
            </div>
            <h3 className="py-2">{player.goals} Goals</h3>
          </div>
        ) : (
          <div className="row" key={idx}>
            <div className="ms-2 col-8">
              {player.player.firstName.length > 12
                ? player.player.lastName
                : player.player.name}
            </div>
            <div className="col-2">{player.goals}</div>
          </div>
        );
      })}
    </div>
  );
};
