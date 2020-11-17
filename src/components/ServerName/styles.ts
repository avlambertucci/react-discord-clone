import styled from 'styled-components';
import {ExpandMore} from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SN;
  background: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px;
  z-index: 3;
  border-bottom: none;
`;
export const Title = styled.h1`
  
color: var(--white);
font-size: 16px;
font-weight: bold;

`;
export const ExpandIcon = styled(ExpandMore)`
  
width: 28px;
height: 28px;
color: var(--white);
`;
