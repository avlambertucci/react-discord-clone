import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Grid} from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'




const Layout: React.FC = ()=>{
    return(
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
        </Grid>
    )
}

export default Layout