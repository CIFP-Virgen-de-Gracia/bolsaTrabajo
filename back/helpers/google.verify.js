//Ines
//Verificación de Google, que se encarga de verificar el token de Google y devolver los datos del usuario.
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleVerify = async (id_token = '') => {
    const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const { name: nombre, picture: avatar, email: email } = ticket.getPayload();
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    return { nombre, avatar, email };

}
googleVerify().catch(console.error);

module.exports = {
    googleVerify
}