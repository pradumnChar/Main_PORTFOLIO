import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <>
    <div></div>
      <Container name="home">
        <div className="home-ok">
          <p>Greetings Fellow Earthings!</p>
          <h1>Pradumn Jadli</h1>
          <h2>I'm a Full-Stack Developer.</h2>
          <h3>
            Specialized in Full Stack Web Development, I'm dedicated to crafting
            seamless digital experiences with a passion for innovation and clean
            code.
          </h3>
          <div className="but">
            
          <button>Resume</button>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 90vh;
  width: 95vw;
  display: flex;
  justify-content: center;
 
  .home-ok {
    margin-left: 80px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 20px;
    }
    h1 {
      color: #444cf7;
      font-size: 30px;
      font-weight: bolder;
    }
    h2 {
      font-size: 28px;
      font-weight: bolder;
    }
    h3 {
      color: black;
      font-size: 16px;
    }
    .but {
      display: flex;
      flex-direction: row;
      justify-content: start;
      gap: 38px;
    }
    button {
      color: #444cf7;
      margin-top: 20px;
      border: 2px solid black;
      border-radius: 15px;
      padding: 8px 16px;
      background-color: #e5e5f7;
      letter-spacing: 1px;
    }

    button:hover {
      background-color: white;
    }
   
    @media (max-width: 768px) {
      
    }
  }
`;
export default Home;
