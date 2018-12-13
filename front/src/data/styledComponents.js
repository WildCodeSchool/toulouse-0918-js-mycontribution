import styled from '@emotion/styled';


export const StyledContainer = styled.div`
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  padding: 50px 30px 50px 30px;
  word-wrap: break-word;
  background-color: ${props =>
				props.orange ? '#ffa100' : 'white'};
	@media (max-width: 576px) {
		padding: 20px 10px 20px 10px;
	}
	@media (max-width: 768px) {
		max-width: 90%;
		padding: 40px 20px 40px 20px;
	}	
`

export const BigTitle = styled.h1`
    font-size: 4rem;
    font-weight: 900;
    font-family: "Continental Stag";
    color: ${props =>
				props.white ? 'white' : 'black'};
		@media (max-width: 576px) {
			font-size: 2.5rem;
		}
		@media (max-width: 768px) {
			font-size: 2.5rem;
		}	
`

export const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 900;
    font-family: "Continental Stag";
    color: ${props =>
				props.white ? 'white' : 'black'};
		@media (max-width: 576px) {
			font-size: 2rem;
		}
`

export const Subtitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    font-family: "Continental Stag";
    color: ${props =>
				props.white ? 'white' : 'black'};
		@media (max-width: 576px) {
			font-size: 1.5rem;
		}
`

export const Text = styled.p`
    font-size: 1.2rem;
    font-family: "Continental Stag";
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const TextBold = styled.p`
    font-size: 1.5rem;
    font-family: "Continental Stag";
    font-weight: bold;
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const TextHeaderModal = styled.p`
    font-size: 1.4rem;
    font-family: "Continental Stag";
    font-weight: bold;
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const TextSign = styled.p`
    font-size: 1rem;
    font-family: "Continental Stag";
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 15px;
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const TextForm = styled.p`
    font-size: 1rem;
    font-family: "Continental Stag";
    margin-bottom: -5px;
    color: ${props =>
    props.white ? 'white' : 'black'};
`

export const Icon = styled.span`
    font-size: 2em;
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const Line = styled.div`
    background-color: black;
    height: 5px;
    border-radius: 10px;
`

export const MissionCard = styled.div`
    background: #727272;
    border-radius: 5px;
    padding: 20px;
`

export const Competence = styled.span`
    background: #ffa100;
    padding: 10px;
    border-radius: 20px;
    margin-right: 2%;
    display: inline-flex;
    margin: 5px 10px 5px 0px;
`

export const InitiativeCard = styled.div`
    background: #cccccc;
    border-radius: 5px;
    padding: 20px;
`

export const EventCard = styled.div`
    background: #ffa100;
    border-radius: 5px;
    padding: 20px;
`

export const UserCard = styled.div`
    background: #f0f0f0;
    border-radius: 5px;
    padding: 20px;
`
export const ContainerPrizes = styled.div`
    border-radius: 10px;
    padding: 10px 20px 10px 20px;
    background-color: ${props =>
    props.orange ? '#ffa100' : 'white'};    
`

export const ButtonForm = styled.button`
    background-color: #ffa100;
    border: none;
    border-radius: 7px;
    padding-bottom: 7px;
    padding-top: 7px;
    font-size: 1.2rem;
    font-family: "Continental Stag";
    font-weight: bold;
    width: 27%;
    cursor: pointer;
    margin-top: 10px;
    transition: ease-in-out 0.2s;
    &:hover { 
        background-color: black;
        color: #ffa100;
        transition: ease-in-out 0.2s;
    }
`

export const RewardContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  background-color: ${props =>
				props.orange ? '#ffa100' : 'white'};	
`