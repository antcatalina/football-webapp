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
  assists: number;
}

interface TopAssistsProps {
  league: string;
  plScorers: Player[];
  saScorers: Player[];
}

export const TopAssists = ({
  plScorers,
  saScorers,
  league,
}: TopAssistsProps) => {
  const sortedData =
    league === "EPL"
      ? [...plScorers].sort((a, b) => b.assists - a.assists)
      : [...saScorers].sort((a, b) => b.assists - a.assists);

  return (
    <div className="p-2 text-center mt-3">
      {sortedData.map((player: Player, idx: number) => {
        return idx === 0 ? (
          <div>
            <h3>{player.player.name}</h3>
            <div className="d-flex justify-content-center">
              <ImageComponent width="50px" imageUrl={player.team.crest} />
              <h5 className="pt-3 ps-2">{player.team.name}</h5>
            </div>
            <h3 className="py-2">{player.assists} Assists</h3>
          </div>
        ) : player.assists ? (
          <div className="row px-" key={idx}>
            <div className="ms-2 col-8">
              {player.player.firstName.length > 12
                ? player.player.lastName
                : player.player.name}
            </div>
            <div className="col-2">{player.assists}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};
