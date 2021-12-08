import React from "react";
import JobsProfiles from "./data/jobsProfiles.json"
import "./App.css";
import SearchBar from "./SearchBar.js";
import JobCard from "./JobCard.js";

function App() {
  return (
    <div className="all">
      <SearchBar data={JobsProfiles} />
      <JobCard data={JobsProfiles} />
    </div>
  );
}

export default App;
