import React from 'react';
import {ChannelInfoContainer, HashtagIcon, Title, Separator, Description} from './styles';

const ChannelInfo: React.FC = ()=>{
  return(
    <ChannelInfoContainer>
      <HashtagIcon />
      <Title> Chat-Livre</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </ChannelInfoContainer>
  )
}
export default ChannelInfo;