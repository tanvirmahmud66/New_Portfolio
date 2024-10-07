import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FetchExperience } from '../../api/experienceAPI';
import { FetchEducation } from '../../api/educationAPI';
// Define types for the timeline item props
interface TimelineItemProps {
  date: string;
  designation: string;
  organization: string;
  year:number;
}

interface TimelineItemProps2 {
  degree: string;
  major: string;
  institution: string;
  start_date:string;
  end_date:string;
  grade:string;
  passing_year:string;
  board:string;
}

// Styled components for the timeline
const TimelineContainer = styled.div`
  position: relative;
  margin: 50px 0;
  padding-left: 40px;
  border-left: 4px solid var(--green);
  width:50%;
`;

const TimelineItemWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -22px;
    width: 12px;
    height: 12px;
    background-color: var(--green);
    border-radius: 50%;
  }
`;

const TimelineDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
`;

const TimelineContent = styled.div`
  background-color: #2b2b2b;
  backdrop-filter: blur(6px);
  padding: 20px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Functional component with typed props
const TimelineItem: React.FC<TimelineItemProps> = ({ date, designation, organization, year }) => {
  return (
    <TimelineItemWrapper>
      <TimelineDate>{date}</TimelineDate>
      <TimelineContent>
        <h3>{designation}</h3>
        <div style={{'display':'flex','alignItems':'center', 'justifyContent':'space-between'}}>
            <p>{organization}</p>
            <p>{year} Year of Experience</p>
        </div>
        
      </TimelineContent>
    </TimelineItemWrapper>
  );
};

const TimelineItem2: React.FC<TimelineItemProps2> = ({ degree, major, institution, start_date, end_date, grade, passing_year, board }) => {
  return (
    <TimelineItemWrapper>
      <TimelineDate>{passing_year}</TimelineDate>
      <TimelineContent>
        <h3>{degree}</h3>
        <div>
            <div style={{'display':'flex', 'alignItems': 'center', 'justifyContent':'space-between'}}>
              <p>{major}</p>
              <p>{grade}</p>
            </div>
            <div style={{'display':'flex', 'alignItems':'center', 'justifyContent': 'space-between'}}>
              <p style={{'opacity':'.6'}}>{institution}</p>
              <p style={{'opacity':'.6'}}>{board}</p>
            </div>
        </div>
        
      </TimelineContent>
    </TimelineItemWrapper>
  );
};


export const ExperienceTimeline: React.FC = () => {
  const [experience,setExperience] = useState<TimelineItemProps[] | null>(null)
  useEffect(()=>{
    const loadExperience = async()=>{
      try {
        const experienceData = await FetchExperience();
        setExperience(experienceData.data)
      } catch (error) {
        console.error(error)
      }
    }

    loadExperience();
  },[])

  return (
    <TimelineContainer>
      {experience?.map((each,index)=>(
      <TimelineItem 
        key={index}
        date={`${each.date}`} 
        designation={`${each.designation}`} 
        organization= {`${each.organization}`}
        year={each.year}
      />
      ))}
    </TimelineContainer>
  );
};



export const EducationTimeline: React.FC = () => {
  const [education,setEducation] = useState<TimelineItemProps2[] | null>(null)
  useEffect(()=>{
    const loadEducation = async()=>{
      try {
        const educationData = await FetchEducation();
        setEducation(educationData.data)
      } catch (error) {
        console.error(error)
      }
    }

    loadEducation();
  },[])

  return (
    <TimelineContainer>
      {education?.map((each,index)=>(
      <TimelineItem2 
        key={index}
        degree={`${each.degree}`} 
        major={`${each.major}`} 
        institution= {`${each.institution}`}
        start_date={each.start_date}
        end_date={each.end_date}
        passing_year={each.passing_year}
        grade={each.grade}
        board={each.board}
      />
      ))}
    </TimelineContainer>
  );
};
