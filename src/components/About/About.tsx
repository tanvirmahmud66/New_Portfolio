import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import { FetchPersonalInfo } from "../../api/personalAPI";
import ProgressBar from "./Progressbar";
import { FetchSkills } from "../../api/skillsAPI";

interface dataType{
  bio:string | undefined ;
  profile_picture: string | undefined;
}




export function About() {

  const [personalData, setPersonalData] = useState<dataType | null>(null);
  

  useEffect(()=>{
    const loadDataFetching = async()=>{
      try {
      const data = await FetchPersonalInfo()
      const skills = await FetchSkills()
        setPersonalData(data.data);
      } catch (error) {
        console.error("Error Fetching Data...", error);
      }
    }

    loadDataFetching();
  },[])

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            {personalData?.bio}
          </p>
        </ScrollAnimation>

        <ScrollAnimation style={{'marginTop':"35px", 'padding':'1.5rem 0rem'}} animateIn="fadeInUp" delay={0.8 * 1000}>
            <a href="" className="button">Hire Me</a>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={`${process.env.REACT_APP_BASE_URL}${personalData?.profile_picture}`} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
