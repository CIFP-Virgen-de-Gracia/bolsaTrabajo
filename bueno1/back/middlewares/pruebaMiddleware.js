const esMayor = (req, res, next) => {
    const body = req.body;
    if (body.edad < 18) {
        return res.status(403).json({
          message: "No autorizado por menor de edad"
        });
      }
    next();
}

module.exports = {
    esMayor
}