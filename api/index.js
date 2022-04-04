import axios from axios;

export const consumidor = ({method,url,data}) => {
    return axios({
        baseURL: "",
        method,
        url,
        data
    })
}

/*En la función de consumidor lo único que tendremos que modificar es la baseURL, 
pero si lo que quisiéramos es consumir un endpoint de tipo GET del back, 
haríamos algo como:
Const response = await consumidor({method: ‘get’, url: ‘/laurlqueusaremos’}); */

/* En el caso de un login podría ser algo como:
Const response = await consumidor({method: ‘post’, url: ‘/login’ data: state.user});
*/

/*
Suponiendo, el consumidor al fin y al cabo es una función que nos ayudará a consumir el back, 
y los mensajes o información que el back retorne en cada endpoint lo guardamos en la constante que asignamos,
en este caso response
*/
