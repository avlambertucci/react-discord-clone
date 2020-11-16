import React from 'react';
import {Container, Separator} from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = ()=>{
    return(
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton  mentions={32} />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    )
}

export default ServerList