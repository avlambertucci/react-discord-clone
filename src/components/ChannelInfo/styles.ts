import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline';

export const ChannelInfoContainer = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px;
  z-index: 3;
  border-bottom: none;


`;
export const HashtagIcon = styled(Hashtag)`
    
  width: 24px;
  height: 24px;
  color: var(--symbol);
  
`;
export const Title = styled.h1`
  margin-left: 10px;
  font-size: 16px;
  color: var(--white);
  font-weight: bold;
`;
export const Separator = styled.div`
  background-color: var(--white);
  opacity: 0.2;
  height: 24px;
  width: 1px;
  margin: 0 13px;
  
`;
export const Description = styled.div`
font-size: 15px;
color: var(--gray);

  
  
`;
