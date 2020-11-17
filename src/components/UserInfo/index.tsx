import React from 'react';
import {Container, Icons, Profile, UserData, Avatar, MicIcon, PhoneIcon, SettingsIcon} from './styles'

  const UserInfo: React.FC = ()=>{
  return(
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Armando Lambertucci</strong>
          <span>#2424</span>
        </UserData>
      </Profile>
      
      <Icons>
        <MicIcon/>
        <PhoneIcon/>
        <SettingsIcon/>
      </Icons>  
    </Container>
  )
}
export default UserInfo;
