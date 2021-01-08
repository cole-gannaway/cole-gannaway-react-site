
import { Grid, Link } from '@material-ui/core';
import React, { Component } from 'react';
class ProjectCard extends Component<{ title: string, description: string, url: string, previewImagePath: string, icon: JSX.Element }, {}> {
    public render() {
        return <div >
            <Grid container spacing={3}>
                <Grid item style={{ width: '40%', maxWidth: '200px' }}>
                    <Link href={this.props.url} color='inherit' ><img src={this.props.previewImagePath} alt="" width={'100%'} /></Link>
                </Grid>
                <Grid item style={{ width: '60%' }}>
                    <div><Link href={this.props.url} style={{ color: '#90caf9' }}><b>{this.props.title}</b></Link></div>
                    <p>{this.props.description}</p>
                </Grid>
            </Grid>
        </div>;
    }


}

export default ProjectCard;

