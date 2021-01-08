
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

class ProjectCard extends Component<{ title: string, description: string, icon: JSX.Element }, {}> {
    public render() {
        return <div >
            <Grid container spacing={3}>
                <Grid item style={{ width: '20%', maxWidth: '100px' }}>
                    {this.props.icon}
                </Grid>
                <Grid item style={{ width: '80%' }}>
                    <div><b>{this.props.title}</b></div>
                    <p>{this.props.description}</p>
                </Grid>
            </Grid>
        </div>;
    }


}

export default ProjectCard;

