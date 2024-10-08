import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import { HiEye } from "react-icons/hi";
import { HiCube } from "react-icons/hi";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const SingleProject = () => {
  
  const {slug} = useParams()
  
  return (
    <Container>
        <div className='slug-name'>{slug}</div>
        <div className='button-section'>
            <a href='#' target='_blank' style={{'color':'#23ce6b','display':'flex','alignItems':'center', 'gap':'.5rem'}}>
                <HiEye/>
                <span>Live</span>
            </a>
            <a href='#' target='_blank' style={{'color':'#08C2FF','display':'flex', 'alignItems':'center','gap':'.5rem'}}>
                <HiCube />
                <span>Source Repo</span>
            </a>
        </div>

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
                <img
                    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: 'auto'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: 'auto'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: 'auto'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: 'auto'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: 'auto',
                    margin: 'auto',
                    width: 'auto'
                    }}
                />
            </Carousel>
        </div>
    </Container>
  )
}

export default SingleProject