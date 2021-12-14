import { createMuiTheme } from '@material-ui/core/styles'

//importamos los colores que vayamos a utilizar
// https://mui.com/customization/color/
import purple from '@material-ui/core/colors/purple'
import { lightGreen } from '@mui/material/colors'


const theme = createMuiTheme({
    palette: {
        primary:{
            main: lightGreen[900]
        },
        secondary:{
            main: purple[500]
        }
    }
})


export default theme