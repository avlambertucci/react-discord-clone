import styled from 'styled-components';
import {PersonAdd, Settings} from 'styled-icons/material';
import {Hashtag} from 'styled-icons/heroicons-outline';


export const Container = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s;

  >div{
    display: flex;
    align-items: center;
  }

  >div span{
    
    color: var(--senary);
    margin-left: 5px;
  }
  &:hover,
  &:active{
    background-color: var(--quinary);
    
    >div span{
      color: var(--white)
    }
  }

 
`;

export const HashtagIcon = styled(Hashtag)`
 width: 20px;
 height: 20px;
 color: var(--symbol);
 
`;
export const SettingsIcon = styled(Settings)`
width: 16px;
height: 16px;
color: var(--symbol);
margin-left: 4px;
transition: color .2s;

&:hover {
  color: var(--white);
}
 
`;
export const InviteIcon = styled(PersonAdd)`
width: 20px;
height: 20px;
color: var(--symbol);

transition: color .2s;

&:hover {
  color: var(--white);
}

`;

