import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import { Business } from "@mui/icons-material";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline inlineColor="#0d7a14">
        <VerticalTimelineElement
          className="veritical-timeline-element--education"
          date="2002-2006"
          iconStyle={{ background: "#0d7a14", colo: "#fff" }}
          icon={<SchoolRoundedIcon />}
        >
          <h3> Battfield High School, Haymarket, VA </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="veritical-timeline-element--education"
          date="2006-2010"
          iconStyle={{ background: "#0d7a14", colo: "#fff" }}
          icon={<SchoolRoundedIcon />}
        >
          <h3> Virginia Commonweatlh Universty, Richmond, VA</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="veritical-timeline-element--education"
          date="2022-2022"
          iconStyle={{ background: "#0d7a14", colo: "#fff" }}
          icon={<SchoolRoundedIcon />}
        >
          <h3> Trinity Coding Bootcamp via Denver University</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="veritical-timeline-element--education"
          date="2020-Present"
          iconStyle={{ background: "#0d7a14", colo: "#fff" }}
          icon={<Business />}
        >
          <h3> Effectv AR/Collection Coordinator</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
