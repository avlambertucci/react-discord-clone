import styled from 'styled-components';


export const Container = styled.div`
  grid-area: UL;
  background: var(--secondary);
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px;
  z-index: 3;
  border-bottom: none;
  max-height: calc(100vh - 46px);
  overflow: scroll;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar{
    width: 4px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }

`;
export const Role = styled.div`

margin-top: 20px;
text-transform: uppercase;
font-size: 12px;
font-weight: 500;
color: var(--gray);

`;
export const User = styled.div`
margin-top: 5px;
padding: 5px;
display: flex;
align-items: center;
cursor: pointer;
border-radius: 4px;
background: transparent;
transition: background 0.2s;

&:hover{
  background: rgba(255, 255, 255, 0.1);
}
>span{
  border-radius:4px;
  margin-left: 9px;
  background-color: var(--discord);
  padding: 4px 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
}
> strong {

  margin-left: 13px;
  font-weight: 500;
  color: white;
  opacity: 0.7;
  white-space: nowrap; //Nao deixa quebrar linha
  text-overflow: ellipsis; // texto que ultrapssar sera coberto com ...
  overflow: hidden;

}

`;
export const Avatar = styled.div`

flex-shrink: 0;
width: 32px;
height: 32px;
background: var(--primary);
border-radius: 50%;

&.bot{
  background-color: var(--mention-detail);
}
`;
