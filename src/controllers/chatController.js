const pool = require("../config/conexion");
exports.getChat = (req, res) => {
  const sql = "SELECT * FROM chat;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}
exports.saveChat = (req, res) => {
    const values = Object.values(req.body)

    const sql = "INSERT INTO chat(mensaje, fecha, name, typeUser) VALUES(?, ?, ?, ?)";
    pool.query(sql, values, (err, result, fields) => {
        if(err) {
            res.json({ message: "error al guardar en la base de datos" });
        return
        }
        res.json({message: "guardado con exito"})
        return
    })
}