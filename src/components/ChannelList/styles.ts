import styled from 'styled-components';
import {Add} from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CL;
  background: var(--secondary);
  display: flex;
  
  flex-direction: column;
  padding: 20px 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;
 export const ChannelListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  >span{
    color: var(--gray);
    font-weight: bold;
    text-transform: uppercase;
  }
 
 `;
 export const ChannelListHeaderIcon = styled(Add)`
 color: white;
 width: 24px;
 width: 24px;
 cursor: pointer;
 

 `;


 