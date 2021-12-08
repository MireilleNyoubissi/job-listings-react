import React, { useState } from "react";

function SearchBar(props){

    const [jobsProfiles, setJobProfile] = useState(props.data);
    function searchProfiles(nameText){
        setJobProfile(
          jobsProfiles.filter(
            (jobsProfile) =>
              jobsProfile.role.toLowerCase().includes(nameText) ||
              jobsProfile.level.toLowerCase().includes(nameText)
          )
        );
    }
    return(
        <form className="formStyle">
            <input onKeyUp  = {(e) => searchProfiles(e.currentTarget.value.toLowerCase())}
            type="search" 
            placeholder= "Search jobs profiles ..." 
            />
        </form>
    );
}

export default SearchBar;