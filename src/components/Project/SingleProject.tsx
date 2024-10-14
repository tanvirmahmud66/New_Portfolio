import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import { HiEye } from "react-icons/hi";
import { HiCube } from "react-icons/hi";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FetchSingleProject } from '../../api/projectsAPI';

const SingleProject = () => {
  
  const {slug} = useParams()
  const[singleProject, setSingleProject] = useState<any | null>()


  useEffect(()=>{
    const loadProjectData = async()=>{
      try {
        const data = await FetchSingleProject(slug);
        setSingleProject(data.data)
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    }

    loadProjectData();
  },[])
  
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
                        height: '100%',
                        margin: 'auto',
                        width: 'auto'
                        }}
                    />
                ))}
               
            </Carousel>
        </div>}

        <div>
            <div>
                <h3>Description</h3>
                <p>{singleProject?.description}</p>
            </div>
            <div>
                <h3>Tech Stack</h3>
                <div>
                    <ul>
                        <h4>Frontend</h4>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                    <ul>
                        <h4>Backend</h4>
                        <li>2</li>
                        <li>2</li>
                        <li>2</li>
                        <li>2</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default SingleProject