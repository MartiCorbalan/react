import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Admin from './components/Admin'
import Reset from './components/Reset'
import {auth } from './firebase'


const App = () => {

    const [firebaseUser, setFirebaseUser] = React.useState(false)

    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user)
            //preguntar si el user existe
            if(user){
                setFirebaseUser(user)
            }else{
                setFirebaseUser(null)
            }
        })
    }, [])
    //si es distinto a falso entonces devuelveme todo el router etc etc
    return firebaseUser !== false ? (
        <Router>
            <div className="container">
                <Navbar firebaseUser={firebaseUser}/>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/reset">
                        <Reset />
                    </Route>
                    <Route path="/" exact>
                        Ruta de inicio
                    </Route>
                </Switch>
            </div>
        </Router>
    ): (
        <div>Cargando...</div>
    )
}

export default App
