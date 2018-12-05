import React from 'react';
import ProjectItems from './ProjectItem';

const ProjectList = ({projects}) => (
    <div className="projectList">
    {
      projects.map((project,index) =>
        <ProjectItems key={index}  {...project}/>
      )      
    }
    </div>
  )

export default ProjectList;