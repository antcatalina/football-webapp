import React, { useState } from "react";

interface Flag {
  code: string;
  name: string;
  emoji: string;
}

interface CountryProps {
  setLeague: React.Dispatch<React.SetStateAction<string>>;
}

const flags: Flag[] = [
  { code: "en", name: "EPL", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { code: "it", name: "Serie A", emoji: "🇮🇹" },
];

export const Country = ({ setLeague }: CountryProps) => {
  const [selectedLang, setSelectedLang] = useState<Flag>(flags[0]);

  return (
    <div className="ps-4 pt-3 dropdown">
      <button
        className="btn text-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="me-2">{selectedLang.emoji}</span>
        {selectedLang.name}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {flags.map((flag) => (
          <li key={flag.code}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                setSelectedLang(flag);
                setLeague(flag.name);
              }}
            >
              <span className="me-2">{flag.emoji}</span> {flag.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
