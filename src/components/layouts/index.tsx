import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Grid} from './styles'
import ServerList from '../ServerList'


const Layout: React.FC = ()=>{
    return(
        <Grid>
            <ServerList />
        </Grid>
    )
}

export default Layout