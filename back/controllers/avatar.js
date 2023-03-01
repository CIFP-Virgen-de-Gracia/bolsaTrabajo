const { response } = require("express");
const { User } = require("../models/User");

const subirAvatar = async (req, res = response) => {
    const { id } = req.params;
    const { avatar } = req.body;
    try {
        const user = await User.findByPk(email);
        if(user){
            File.unlinkSync(path.join(__dirname, `../uploads/avatars/${user.avatar}`));
        }
        await user.update({ avatar });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
        msg: "Hable con el administrador, error en el servidor",
        });
    }
    };

module.exports = {
    subirAvatar,
};