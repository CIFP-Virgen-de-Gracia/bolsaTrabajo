//Ines
//Concatenate dos JSON objects
//prueba
const jsonConcat = (u, a) => {
    for (let key in a) {
     u[key] = a[key];
    }
    return u;
}

module.exports = {
    jsonConcat
}