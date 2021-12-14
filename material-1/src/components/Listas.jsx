import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import CloudIcon from '@mui/icons-material/Cloud';
import DeckIcon from '@mui/icons-material/Deck';


const Listas = () => {
    return (
        <div>
            <List component='nav'>

                <ListItem button>
                    <ListItemIcon>
                        <CloudIcon/>
                    </ListItemIcon>

                    <ListItemText primary='mi primer elemento'/>
                     
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon/>
                    </ListItemIcon>
                    <ListItemText primary='mi segundo element'/>
                </ListItem>

                <Divider/>

            </List>
        </div>
    )
}

export default Listas
