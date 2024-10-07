import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  background-color: #21212150;
  backdrop-filter: blur(6px);
  padding: 3rem 0rem 2rem 0;
  border-radius: 1.2rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
  }
  .skills{
    display: grid;
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .skill{
      padding: 2rem 3rem;
      backdrop-filter: blur(6px);
      z-index:500;
      transition:filter 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;

      .hard-skills{
        margin-top: 1.6rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.8rem;
      }
      .hability{
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin-bottom:10px;
        img{
          width: 3.4rem;
        }
      }
      
      .d-flex-between{
        display:flex;
        justify-content:space-between;
        align-items:start; 
        
        .compound{
          width:45%;
        }
        
      }
      
      h3{
        margin-bottom: 2rem;
        text-align:center;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`