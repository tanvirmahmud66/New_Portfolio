import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import ProgressBar from "./Progressbar";
import { FetchSkills } from "../../api/skillsAPI";


interface skillType{
  skill_name:string;
  proficiency_score:number;
  icon:string;
}

export function Skills() {

  const [skillsData, setSkillsData] = useState<skillType[] | null>(null);

  useEffect(()=>{
    const loadDataFetching = async()=>{
      try {
      const skills = await FetchSkills()
        setSkillsData(skills.data);
      } catch (error) {
        console.error("Error Fetching Data...", error);
      }
    }

    loadDataFetching();
  },[])

  return (
    <Container id="skills">
      <h2>Skills</h2>
      <div className="skills">

        <ScrollAnimation animateIn="flipInX">
          <div className="skill">
            <div className="body">
                <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
                </ScrollAnimation>
                <div className="d-flex-between">
                  <div className="compound">
                    {skillsData && skillsData.slice(0,6).map((each,index)=>(
                    <div key={index} className="hability">
                      <ScrollAnimation style={{'marginRight':'15px'}} animateIn="fadeInUp" delay={0.10 * 1000}>
                        <img src={`${process.env.REACT_APP_BASE_URL}/${each.icon}`} alt="Wordpress" />
                      </ScrollAnimation>
                      <ScrollAnimation style={{'width': "100%",'display':'flex','align-items':'center'}} animateIn="fadeInUp" delay={0.10 * 1000}>
                        <ProgressBar progress={each.proficiency_score}/>
                        <div style={{'marginLeft':'5px'}}>{each.proficiency_score}%</div>
                      </ScrollAnimation>
                    </div>
                    ))}
                  </div>
                  <div className="compound">
                    {skillsData && skillsData.slice(6).map((each,index)=>(
                      <div key={index} className="hability">
                        <ScrollAnimation style={{'marginRight':'15px'}} animateIn="fadeInUp" delay={0.10 * 1000}>
                          <img src={`${process.env.REACT_APP_BASE_URL}/${each.icon}`} alt="Wordpress" />
                        </ScrollAnimation>
                        <ScrollAnimation style={{'width': "100%",'display':'flex','align-items':'center'}} animateIn="fadeInUp" delay={0.10 * 1000}>
                          <ProgressBar progress={each.proficiency_score}/>
                          <div style={{'marginLeft':'5px'}}>{each.proficiency_score}%</div>
                        </ScrollAnimation>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}