import React, { Component } from 'react';

class Projects extends Component {
  let projectItems;
  if(this.props.projects){
    projectItems = this.props.projects.map(project => );
  }
  render() {
    return (
      <div className="Projects">
        My Projects
      </div>
    );
  }
}

export default Projects;
