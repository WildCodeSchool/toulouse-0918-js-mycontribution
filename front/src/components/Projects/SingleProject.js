import React from 'react';
import '../../css/SingleProject.scss';
import { Container } from 'reactstrap';
import { StyledContainer } from '../../data/styledComponents';
import ProjectRewards from './ProjectRewards';
import ProjectInfos from './ProjectInfos';
import ProjectDesc from './ProjectDesc';

const SingleProject = ({ project }) =>
	(
		<StyledContainer className="mt-5" id="single-project">
			<Container>
				<ProjectDesc {...project} />
				<ProjectRewards {...project} />
				<ProjectInfos {...project} />
			</Container>
		</StyledContainer>
	)

export default SingleProject;