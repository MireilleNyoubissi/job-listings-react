import React from "react";
import JobsProfiles from "./data/jobsProfiles.json"
import './App.css';
import JobCard from "./JobCard";

function App() {
  return (
    <div className="all">
        <JobCard data = {JobsProfiles}/>
    </div>
  );
}

export default App;
