import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import { HiEye } from "react-icons/hi";
import { HiCube } from "react-icons/hi";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FetchSingleProject } from '../../api/projectsAPI';
import { ProjectDetails } from './styles';


const SingleProject = () => {
  
  const {slug} = useParams()
  const[singleProject, setSingleProject] = useState<any | null>()
  const[frontend, setFrontend] = useState<any | null>()
  const[backend, setBackend] = useState<any | null>()
  const[server, setServer] = useState<any | null>()
  const[other, setOther] = useState<any | null>()

  useEffect(()=>{
    const loadProjectData = async()=>{
      try {
        const data = await FetchSingleProject(slug);
        setSingleProject(data.data)
      } catch (error) {
        console.error("Error fetching project data", error);
      } finally {
        
      }
    }

    loadProjectData();
  },[])


  useEffect(()=>{
    if(singleProject){
        const frontend = singleProject.technologies.filter((each:any)=> each.sector === "Frontend");
        const backend = singleProject.technologies.filter((each:any)=> each.sector === "Backend");
        const server = singleProject.technologies.filter((each:any)=> each.sector === "Server");
        const other = singleProject.technologies.filter((each:any)=> each.sector === "Other");
        setFrontend(frontend);
        setBackend(backend);
        setServer(server)
        setOther(other);
    }
  },[singleProject])
  
  return (
    <Container>
        <div className='slug-name'>{singleProject?.title}</div>
        <div className='button-section'>
            <a href={`${singleProject?.preview_link}`} target='_blank' style={{'color':'#23ce6b','display':'flex','alignItems':'center', 'gap':'.5rem'}}>
                <HiEye/>
                <span>Live</span>
            </a>
            <a href={`${singleProject?.source_link}`} target='_blank' style={{'color':'#08C2FF','display':'flex', 'alignItems':'center','gap':'.5rem'}}>
                <HiCube />
                <span>Source Repo</span>
            </a>
        </div>

        {singleProject?.project_images?.length > 0 &&
        <div>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="custom-height"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                {singleProject?.project_images.map((each:any,index:any)=>(
                    <img
                        key={index}
                        src={`${process.env.REACT_APP_BASE_URL}/${each.project_image}`}
                        style={{
                        display: 'block',
                        height: 'auto',
                        margin: 'auto',
                        width: 'auto'
                        }}
                    />
                ))}
               
            </Carousel>
        </div>}

        <ProjectDetails>
            <div className='description'>
                <h3 className='title'>Description</h3>
                <p className='details'>{singleProject?.description}</p>
            </div>
            <div className='stack'>
                <h3 className='stack-heading'>Tech Stack</h3>
                <div className='stack-wrapper'>
                    {frontend?.length > 0 &&
                    <ul className='stack-ul'>
                        <h4 className='ul-title'>Frontend</h4>
                        {frontend?.map((each:any,index:any)=>(
                            <li key={index} className='ul-item'>{each.technology_name}</li>
                        ))}
                    </ul>}
                    {backend?.length > 0 && 
                    <ul className='stack-ul'>
                        <h4 className='ul-title'>Backend</h4>
                        {backend?.map((each:any,index:any)=>(
                            <li key={index} className='ul-item'>{each.technology_name}</li>
                        ))}
                    </ul>}
                    {server?.length > 0 &&
                    <ul className='stack-ul'>
                        <h4 className='ul-title'>Server</h4>
                        {server?.map((each:any,index:any)=>(
                            <li key={index} className='ul-item'>{each.technology_name}</li>
                        ))}
                    </ul>}
                    {other?.length > 0 && 
                    <ul className='stack-ul'>
                        <h4 className='ul-title'>Other</h4>
                        {other?.map((each:any,index:any)=>(
                            <li key={index} className='ul-item'>{each.technology_name}</li>
                        ))}
                    </ul>}
                </div>
            </div>
        </ProjectDetails>
    </Container>
  )
}

export default SingleProject