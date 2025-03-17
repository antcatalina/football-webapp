import axios from "axios";
import React from "react";

export const fetchPLdata = async (
  setPLstandings: React.Dispatch<React.SetStateAction<any>>,
  setPLscorers: React.Dispatch<React.SetStateAction<any>>,
) => {
  try {
    const response = await axios.get("/api/v4/competitions/PL/standings", {
      headers: {
        "X-Auth-Token": "f4946a6971fc4d929f8711f2e47f2909",
      },
    });
    setPLstandings(response.data.standings[0].table); // Set the response data to the state
  } catch (err) {
    console.error("Error fetching data", err);
  }
  try {
    const response = await axios.get("/api/v4/competitions/PL/scorers", {
      headers: {
        "X-Auth-Token": "f4946a6971fc4d929f8711f2e47f2909",
      },
    });
    console.log(response.data.scorers)
    setPLscorers(response.data.scorers); // Set the response data to the state
  } catch (err) {
    console.error("Error fetching data", err);
  }
};

export const fetchSAdata = async (
    setSAstandings: React.Dispatch<React.SetStateAction<any>>,
    setSAscorers: React.Dispatch<React.SetStateAction<any>>
  ) => {
    try {
      const response = await axios.get("/api/v4/competitions/SA/standings", {
        headers: {
          "X-Auth-Token": "f4946a6971fc4d929f8711f2e47f2909",
        },
      });
      setSAstandings(response.data.standings[0].table); // Set the response data to the state
    } catch (err) {
      console.error("Error fetching data", err);
    }
    try {
      const response = await axios.get("/api/v4/competitions/SA/scorers", {
        headers: {
          "X-Auth-Token": "f4946a6971fc4d929f8711f2e47f2909",
        },
      });
      console.log(response.data.scorers)
      setSAscorers(response.data.scorers); // Set the response data to the state
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };