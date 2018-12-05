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
`

export const BigTitle = styled.h1`
    font-size: 4rem;
    font-weight: 900;
    font-family: "Continental Stag";
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 900;
    font-family: "Continental Stag";
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const Subtitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 900;
    font-family: "Continental Stag";
    color: ${props =>
        props.white ? 'white' : 'black'};
`

export const Text = styled.p`
    font-size: 1.2rem;
    font-family: "Continental Stag";
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
