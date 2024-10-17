import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import ProgressBar from "../Skills/Progressbar";
import { FetchSkills } from "../../api/skillsAPI";
import {ExperienceTimeline} from "./TimelinveView";
import experiencedImg from "../../assets/experienced.svg"


export function Experience() {
  return (
    <Container id="experiences">
      <h2>Work Experiences</h2>
      <div className="experiences">

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <div className="body" style={{'display':'flex', 'justifyContent':'space-between', 'alignItems':'center'}}>
                <ExperienceTimeline/>
                <div>
                  <img src={experiencedImg} height={400} alt="Skilled Logo"/>
                </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}