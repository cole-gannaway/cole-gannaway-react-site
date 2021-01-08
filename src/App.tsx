import { Divider, Grid, Link } from '@material-ui/core';
import React from 'react';
import './App.css';
import Projects from './components/Projects/Projects';
import ColeHeadshot from './images/Headshot.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const iconSize = "large"
function App() {
  return (
    <div>
      <div style={{ height: 50 }}>
        {/* Vertical spacing */}
      </div>
      <div style={{ textAlign: 'center' }}>
        {/* Container for my profile */}
        <div>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              {/* Padding */}
            </Grid>
            <Grid item xs={8}>
              <div><img src={ColeHeadshot} alt="?" style={{ borderRadius: '50%', maxWidth: '200px' }} ></img></div>
              <h2>Hey! I'm Cole</h2>
              <p>{'Graduated from the University of Alabama with a Bachelor of Science degree in Computer Science & Software Engineering.'}</p>
              <p>{'Interests include but are not limited to Cloud Computing, High Performance Computing, and Web Development.'}</p>
              <p>{'Projects include parallelized scalable Sudoku Solver, graphically analyzed Financial Planner, and Cloud-Based Gaming Platform.'}</p>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  {/* Padding */}
                </Grid>
                <Grid container item xs={8}>
                  <Grid item xs>
                    <Link color='inherit' href="https://github.com/cole-gannaway"><GitHubIcon fontSize={iconSize} /></Link>
                  </Grid>
                  <Grid item xs>
                    <Link color='inherit' href="https://www.linkedin.com/in/cole-gannaway/"><LinkedInIcon fontSize={iconSize} /></Link>
                  </Grid>
                  <Grid item xs>
                    <Link color='inherit' href="https://www.facebook.com/cole.gannaway"><FacebookIcon fontSize={iconSize} /></Link>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  {/* Padding */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              {/* Padding */}
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ height: 50 }}>
        {/* Vertical spacing */}
      </div>
      <Divider variant="middle" />
      <Grid container spacing={3}>
        <Grid item xs={1}>
          {/* Padding */}
        </Grid>
        <Grid item xs={8}>
          <h1>Projects</h1>
        </Grid>
        <Grid item xs={1}>
          {/* Padding */}
        </Grid>
      </Grid>
      <div style={{ textAlign: 'center' }}>
      </div>
      <Projects></Projects>
      <div style={{ height: 50 }}>
        {/* Vertical spacing */}
      </div>
    </div>
  );
}

export default App;
