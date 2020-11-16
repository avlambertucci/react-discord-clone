import styled from 'styled-components';

//SL - serverlist
//SN - servername
//CI - channelinfo
//CL - channellist
//ML - messageslist
//UL - Userslist
//UI - userInfo

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px auto 240px ;
  grid-template-rows: 46px auto 52px ;
  grid-template-areas: 
  "SL SN CI CI"
  "SL CL ML UL"
  "SL UI ML UL"
   ;

   height: 100vh;
`;
