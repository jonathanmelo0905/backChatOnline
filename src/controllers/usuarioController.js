const pool = require("../config/conexion");
exports.getUsuarios = (req, res) => {
  const sql = "SELECT * FROM estudiantes;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.createUser = (req, res) => {
    const values = Object.values(req.body)

    const sql = "INSERT INTO estudiantes(name, user, password, typeUser) VALUES(?, ?, ?, ?)";
    pool.query(sql, values, (err, result, fields) => {
        if(err) {
            res.json({ message: "error al guardar en la base de datos" });
        return
        }
        res.json({message: "guardado con exito"})
        return
    })
}


