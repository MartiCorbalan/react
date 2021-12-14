const functions = require("firebase-functions");

const admin = require('firebase-admin');

admin.initializeApp();

const auth = admin.auth();


exports.agregarAdministrador = functions.https.onCall((data, context) => {

     //si el user que esta ejecutando el administrador, se ejecutara la funcion agregarRol, si no eres admin te saltara este if 
      if(context.auth.token.admin !== true){
        return {error: 'no tienes los permisos'}
    } 
    
    //recibe un email
    return auth.getUserByEmail(data.email)
        .then(user => {
            return auth.setCustomUserClaims(user.uid, {admin: true})
        })
        .then(() => {
            return {mensaje: 'se creo el administrador'}
        })
        .catch(error => {
            return {error: error}
        })

})

exports.eliminarAdministrador = functions.https.onCall((data, context) => {
    if(context.auth.token.admin !== true){
        return {error: 'no tienes los permisos'}
    } 
    return auth.getUserByEmail(data.email)
    .then(user => {
        return auth.setCustomUserClaims(user.uid,{admin: false})
    })
    .then(() => {
        return {mensaje: 'usuario ya no es administrador'}
    })
    .catch(error => {
        return {error: error} 
    })
})

exports.crearAutor = functions.https.onCall((data, context) => {

    if(context.auth.token.admin !== true){
        return {error: 'no tienes los permisos'}
    } 
    return auth.getUserByEmail(data.email)
    .then(user => {
        return auth.setCustomUserClaims(user.uid,{autor: true})
    })
    .then(() => {
        return {mensaje: 'usuario ya es autor'}
    })
    .catch(error => {
        return {error: error} 
    })
})

exports.eliminarAutor = functions.https.onCall((data, context) => {
    
    if(context.auth.token.admin !== true){
        return {error: 'no tienes los permisos'}
    } 
    return auth.getUserByEmail(data.email)
    .then(user => {
        return auth.setCustomUserClaims(user.uid,{autor: false})
    })
    .then(() => {
        return {mensaje: 'usuario eliminado como autor'}
    })
    .catch(error => {
        return {error: error} 
    })
})