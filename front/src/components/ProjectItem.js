
import React from 'react';
import { Media } from 'reactstrap';
import '../css/mediaCss.css';

const ProjectItems =
  ({ ...project}) => (
    <div>
    <Media className="mediaCss">
      <Media left href="#">
        <Media object src={project.logo} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {project.name}
        </Media>
          {project.summary}
      </Media>
    </Media>
    </div>
  )

export default ProjectItems;