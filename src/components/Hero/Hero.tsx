import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import Hello from '../../assets/Hello.gif'
import { useEffect, useState } from "react"
import { FetchPersonalInfo } from "../../api/personalAPI"
import { FetchSocialLinks } from "../../api/socialLinksAPI"
import resume from '../../assets/Vinayak_Kumar_Singh_Resume.pdf'

interface dataType {
  full_name: string;
  designation:string;
  work_experience:string;
  bio:string;
  profile_picture:string;
  date_of_birth:string;
  personal_email_address:string;
  official_email_address:string;
  contact_number_1:string;
  contact_number_2:string;
  present_address:string;
  permanent_address:string;
}

interface Item {
  platform: string;
  url: string;
  icon:string;
}

export function Hero () {

  const [personalData, setPersonalData] = useState<dataType | null>(null);
  const [socialLinks, setSocialLinks] = useState<Item[]>();

  useEffect(()=>{
    const loadDataFetching = async()=>{
      try {
        const data = await FetchPersonalInfo()
        const data2 = await FetchSocialLinks()
        setSocialLinks(data2.data)
        setPersonalData(data.data);
      } catch (error) {
        console.error("Error Fetching Data...", error);
      }
    }

    loadDataFetching();
  },[])

  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>{personalData?.full_name}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>{personalData?.designation}</h3>
        </ScrollAnimation>
        {personalData?.work_experience &&
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <p className="small-resume">{personalData.work_experience} Years of Experience</p>
          </ScrollAnimation>
        }
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <a href={resume} download className="button">Resume</a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media">
        {socialLinks?.map((each,index)=>(
          <a
            href={`${each?.url}`}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <img src={`${process.env.REACT_APP_BASE_URL}/${each?.icon}`} alt={`${each?.platform}`} />
          </a>   
        ))}
      </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}