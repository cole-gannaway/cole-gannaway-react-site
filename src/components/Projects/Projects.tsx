import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

import AppsIcon from '@material-ui/icons/Apps';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import WavesIcon from '@material-ui/icons/Waves';

import ProjectsData from './ProjectsCardData.json'

function Projects() {
    const projectsData = ProjectsData;
    const getIconByTitle = (title: string) => {
        switch (title) {
            case "Sudoku Solver":
                return <AppsIcon style={{ width: 100, height: 100 }}></AppsIcon>
            case "Financial Planner":
                return <TrendingUpIcon style={{ width: 100, height: 100 }}></TrendingUpIcon>
            case "Course Analysis":
                return <SportsGolfIcon style={{ width: 100, height: 100 }}></SportsGolfIcon>
            case "Fast Feed":
                return <FlashOnIcon style={{ width: 100, height: 100 }}></FlashOnIcon>
            case "Up And Down The River":
                return <WavesIcon style={{ width: 100, height: 100 }}></WavesIcon>
            default:
                return <AppsIcon style={{ width: 100, height: 100 }}></AppsIcon>
        }
    };
    const projectCards = projectsData.projects.map(data => {
        const icon = getIconByTitle(data.title);
        return (<ProjectCard title={data.title} description={data.description} icon={icon}></ProjectCard>);
    })
    return (
        <div>
            {projectCards}
        </div >
    );
}


export default Projects;

