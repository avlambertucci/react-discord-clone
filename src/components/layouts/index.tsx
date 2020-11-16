import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Grid} from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'




const Layout: React.FC = ()=>{
    return(
        <Grid>
            <ServerList />
            <ServerName />
        </Grid>
    )
}

export default Layout