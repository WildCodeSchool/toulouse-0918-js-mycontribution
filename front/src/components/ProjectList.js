import React from 'react';

import ProjectItem from './ProjectItem';

const ProjectList = ({projects}) => (
    <div className="projectList">
    {
      projects.map((project,index) =>
        <ProjectItem
          key={index}
          {...project}
        />
      )      
    }
    </div>
  )

export default ProjectList;