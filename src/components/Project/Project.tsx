import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchProject } from "../../api/projectsAPI";


export function Project() {

  const [projectData, setProjectData] = useState<any[]>()
  const [open, setOpen] = useState(false);

  
  useEffect(()=>{
    const loadProjectData = async()=>{
      try {
        const data = await FetchProject()
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data", error);
      }finally{
        console.log(projectData,"Lalla")
      }
    }

    loadProjectData();
  },[])


  return (
    <Container id="project" style={{'marginBottom':'15rem'}}>
      <h2>My Projects</h2>
      <div className="projects">

        {projectData && projectData.map((each,index)=>(
        <ScrollAnimation key={index} animateIn="flipInX">
          <div className="project">
            <header>
              <Link to={`/project/${each.data.title}`}>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Open Project</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              </Link>
              <div className="project-links">
                <a href={`${each.data.source_link}`} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href={`${each.data.preview_link}`} target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>{each.data.title}</h3>
              <p> {each.data.description} </p>
            </div>
            {/* <footer>
              <ul className="tech-list">
                {each.data.backend_technologies
                  .filter((tech: { sector: string }) => tech.sector === "Frontend")
                  .map((tech: { technology_name: string }, index: number) => (
                    <li key={index}>{tech.technology_name}</li>
                  ))}
              </ul>
            </footer> */}
            <footer>
              <p style={{'opacity':'.7', 'fontSize':'1.3rem'}}>Technology Used</p>
              <ul className="tech-list">
                {each.data.backend_technologies
                  .map((tech: { technology_name: string }, index: number) => (
                    <li key={index}>{tech.technology_name}</li>
                  ))}
              </ul>
            </footer>

          </div>
        </ScrollAnimation>
        ))}

        
      </div>
    </Container>
  );
}