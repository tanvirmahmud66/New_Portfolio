import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import ProgressBar from "../About/Progressbar";
import { FetchSkills } from "../../api/skillsAPI";
import {EducationTimeline} from "./TimelinveView";
import educationImg from "../../assets/Education.svg"


interface skillType{
  skill_name:string;
  proficiency_score:number;
  icon:string;
}

export function Educations() {
  return (
    <Container id="educations">
      <h2>Educational Background</h2>
      <div className="experiences">

        <ScrollAnimation animateIn="flipInX">
          <div className="experience">
            <div className="body" style={{'display':'flex', 'justifyContent':'space-between', 'alignItems':'center'}}>
                <EducationTimeline/>
                <div>
                  <img src={educationImg} height={500} alt="Education Logo"/>
                </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}


