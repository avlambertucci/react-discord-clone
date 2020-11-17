import React from 'react';
import {Container, Role, User, Avatar} from './styles'

  interface UserProps {
    nickname: string;
    isBot?: boolean;
  }

  const UserRow: React.FC<UserProps> = ({nickname, isBot})=>{
    return(
      <User>
        <Avatar className={isBot ? 'bot' : ''}/>
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
      </User>
    )
  }
  const UserList: React.FC = ()=>{
  return(
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Armando Lambertucci" />
      <Role>Offline - 18</Role>
      <UserRow nickname="John Doe" isBot/>
      <UserRow nickname="Peter Pan" isBot/>
      <UserRow nickname="Maria Doe" />
      <UserRow nickname="Alicia Chiave" />
      <UserRow nickname="Douglas Michenshwartsman" />
    </Container>
  )
}
export default UserList;
