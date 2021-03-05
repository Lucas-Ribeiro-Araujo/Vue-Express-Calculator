class CalculatorController {
  add(req, res) {
    const { value1, value2 } = req.body;
    return res.json({ result: Number(value1) + Number(value2) });
  }
  subtract(req, res) {
    const { value1, value2 } = req.body;
    return res.json({ result: Number(value1) - Number(value2) });
  }
  divide(req, res) {
    const { value1, value2 } = req.body;
    return res.json({ result: Number(value1) / Number(value2) });
  }
  multiply(req, res) {
    const { value1, value2 } = req.body;
    return res.json({ result: Number(value1) * Number(value2) });
  }
  module(req, res) {
    const { value1, value2 } = req.body;
    return res.json({ result: Number(value1) % Number(value2) });
  }
}

module.exports = CalculatorController;
