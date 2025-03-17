import { useEffect, useState } from "react";
import "./styles.scss";
import EPL from "../assets/epl.svg";
import SerieA from "../assets/serie-a.svg";
import { fetchPLdata, fetchSAdata } from "../FootballData";
import { TopGoals } from "./TopGoals";
import { TopAssists } from "./TopAssists";
import { Penalties } from "./Penalties";
import { PLTable } from "./Table";
import { Country } from "./Country";

export const Home = (): any => {
  const [league, setLeague] = useState("EPL");
  const [plStandings, setPLstandings] = useState([]);
  const [plScorers, setPLscorers] = useState([]);
  const [saStandings, setSAstandings] = useState([]);
  const [saScorers, setSAscorers] = useState([]);

  useEffect(() => {
    fetchPLdata(setPLstandings, setPLscorers);
    fetchSAdata(setSAstandings, setSAscorers);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      league === "EPL" ? "#3e036f" : "#004B87";
  }, [league === "EPL"]);

  return (
    <div className="pb-4 pt-4 px-3">
      <div className="d-flex justify-content-center">
        <img
          style={{ width: league === "EPL" ? "85px" : "150px" }}
          src={league === "EPL" ? EPL : SerieA}
          alt="EPL"
        />
        <h2
          className={`${
            league === "EPL" ? "pt-4" : "pt-4 mt-2"
          } ps-3 text-light`}
        >
          {league === "EPL" ? "English Premier League" : "Italian Serie A"}
        </h2>
        <div className={`${league === "EPL" ? "pt-2" : "pt-3"}`}>
          <Country setLeague={setLeague} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="p-2 col-4 mt-2">
            <div
              className={`h-100 ${
                league === "EPL"
                  ? "bg-premier-subtle text-premier-emphasis border-premier-subtle"
                  : "bg-seriea-subtle text-seriea-emphasis border-seriea-subtle"
              }`}
            >
              <TopGoals
                league={league}
                plScorers={plScorers}
                saScorers={saScorers}
              />
            </div>
          </div>

          <div className="p-2 col-4 mt-2">
            <div
              className={`h-100 ${
                league === "EPL"
                  ? "bg-premier-subtle text-premier-emphasis border-premier-subtle"
                  : "bg-seriea-subtle text-seriea-emphasis border-seriea-subtle"
              }`}
            >
              <TopAssists
                league={league}
                saScorers={saScorers}
                plScorers={plScorers}
              />
            </div>
          </div>
          <div className="p-2 col-4 mt-2">
            <div
              className={`h-100 ${
                league === "EPL"
                  ? "bg-premier-subtle text-premier-emphasis border-premier-subtle"
                  : "bg-seriea-subtle text-seriea-emphasis border-seriea-subtle"
              }`}
            >
              <Penalties
                league={league}
                saScorers={saScorers}
                plScorers={plScorers}
              />
            </div>
          </div>
        </div>
        <div className="p-2 row">
          <div
            className={`h-100 ${
              league === "EPL"
                ? "bg-premier-subtle text-premier-emphasis border-premier-subtle"
                : "bg-seriea-subtle text-seriea-emphasis border-seriea-subtle"
            }`}
          >
            <PLTable
              saStandings={saStandings}
              plStandings={plStandings}
              league={league}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
