const getExample = (req, res) => {
    res.json({ message: ' API funcionando con controlador correctamente definido' });
  };
  
  module.exports = { getExample };