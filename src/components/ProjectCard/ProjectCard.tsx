
import { Grid, Link } from '@material-ui/core';
import React, { Component } from 'react';

class ProjectCard extends Component<{ title: string, description: string, url: string, icon: JSX.Element }, {}> {
    public render() {
        return <div >
            <Grid container spacing={3}>
                <Grid item style={{ width: '20%', maxWidth: '100px' }}>
                    <Link href={this.props.url} color='inherit' >{this.props.icon}</Link>
                </Grid>
                <Grid item style={{ width: '80%' }}>
                    <div><Link href={this.props.url} style={{ color: '#90caf9' }}><b>{this.props.title}</b></Link></div>
                    <p>{this.props.description}</p>
                </Grid>
            </Grid>
        </div>;
    }


}

export default ProjectCard;

