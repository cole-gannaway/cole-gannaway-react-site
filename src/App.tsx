import { Divider, Grid, Link } from '@material-ui/core';
import React from 'react';
import './App.css';
import Projects from './components/Projects/Projects';

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
              <div><img src="images/Headshot.png" alt="" style={{ borderRadius: '50%', maxWidth: '200px' }} ></img></div>
              <h1>Cole Gannaway</h1>
              <p>Graduated from the University of Alabama with a Bachelor of Science degree in Computer Science and Software Engineering.</p>
              <p>Interests include but are not limited to Cloud Computing, Web Development, and Automated Intelligence.</p>
              <p>Personal projects include a <Link color='inherit' style={{ color: '#90caf9' }} href="https://www.colegannaway.com/Sudoku-Solver-Front-End/">Sudoku Solver</Link> hosted on AWS,
                a graphical <Link color='inherit' style={{ color: '#90caf9' }} href="https://www.colegannaway.com/FinancialPlanner/">Financial Planner</Link> that projects one's future financial status,
                and a golf <Link color='inherit' style={{ color: '#90caf9' }} href="https://www.colegannaway.com/Hoover-CC-Teebox-Analysis/">Course Analyzer</Link> that reveals the course's possiblities.</p>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  {/* Padding */}
                </Grid>
                <Grid container item xs={8}>
                  <Grid item xs>
                    <Link color='inherit' style={{ color: '#90caf9' }} href="https://github.com/cole-gannaway"><GitHubIcon fontSize={iconSize} /></Link>
                  </Grid>
                  <Grid item xs>
                    <Link color='inherit' style={{ color: '#90caf9' }} href="https://www.linkedin.com/in/cole-gannaway/"><LinkedInIcon fontSize={iconSize} /></Link>
                  </Grid>
                  <Grid item xs>
                    <Link color='inherit' style={{ color: '#90caf9' }} href="https://www.facebook.com/cole.gannaway"><FacebookIcon fontSize={iconSize} /></Link>
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
      <Divider variant="middle" light={true} style={{ backgroundColor: 'white' }} />
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
