const Person = require("./model.js")


const createPerson = async (req, res) => {
    if(!req.body) {
        throw new Error("Invalid request")
    }
    try {
        const savedPerson = await Person.create(req.body);
        res.json(savedPerson);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }

}

const getPerson = async (req, res) => {
    try {
        const person = await Person.findById(req.params.user_id);
        if (!person) {
          return res.status(404).json({ error: 'Person not found' });
        }
        res.json(person);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const updatePerson = async (req, res) => {
    if(!req.body) {
        throw new Error("Inavlid request")
    }
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
          req.params.user_id,
          req.body,
          { new: true }
        );
        if (!updatedPerson) {
          return res.status(404).json({ error: 'Person not found' });
        }
        res.json(updatedPerson);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}

const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndRemove(req.params.user_id);
        if (!deletedPerson) {
          return res.status(404).json({ error: 'Person not found' });
        }
        res.json(deletedPerson);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

module.exports = { getPerson, createPerson, updatePerson, deletePerson };