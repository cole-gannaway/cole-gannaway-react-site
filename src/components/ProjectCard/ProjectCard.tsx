
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

class ProjectCard extends Component<{ title: string, description: string, icon: JSX.Element }, {}> {
    public render() {
        return <div>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    {/* Padding */}
                </Grid>
                <Grid item xs={2}>
                    {this.props.icon}
                </Grid>
                <Grid item xs={8}>
                    <div><b>{this.props.title}</b></div>
                    <p>{this.props.description}</p>
                </Grid>
                <Grid item xs={1}>
                    {/* Padding */}
                </Grid>
            </Grid>
        </div>;
    }


}

export default ProjectCard;

