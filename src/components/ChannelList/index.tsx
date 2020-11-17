import React from 'react'
import {ChannelListHeader, Container, ChannelListHeaderIcon} from './styles'
import ChannelListItem from '../ChannelListItem'

  const ChannelList: React.FC = ()=>{
  return(
    <Container>
      <ChannelListHeader>
        <span>Canais de teste</span>
        <ChannelListHeaderIcon />
      </ChannelListHeader>
      <ChannelListItem channelName="chat-livre"/>
      <ChannelListItem channelName="trabalho" />
      <ChannelListItem channelName="filme" />

    </Container>
  )
}
export default ChannelList;
