import React, { useState } from "react";

import Daeyeon from "./profile_highlights/Daeyeon.js";
import Gage from "./profile_highlights/Gage.js";
import Jeremy from "./profile_highlights/Jeremy.js";
import Robin from "./profile_highlights/Robin.js";

const ProfileHighlights = (props) => {
  return (
    <div className="profileContainer">
      <Daeyeon scroll={props.scroll} />
      <Gage />
      <Jeremy />
      <Robin scroll={props.scroll}/>
    </div>
  );
};

export default ProfileHighlights;
