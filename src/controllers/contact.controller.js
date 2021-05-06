const db = require("../config/database");

// ==> Create new 'Contact' method:

exports.createContact= async (req, res) => {
  const { name, lastname, company, phone, email } = req.body;
  const { rows } = await db.query(
    "INSERT INTO contacts (name, lastname, company, phone, email) VALUES ($1, $2, $3, $4, $5)",
    [name, lastname, company, phone, email]
  );

  res.status(201).send({
    message: "Contact added successfully!",
    body: {
      contact: { name, lastname, company, phone, email }
    },
  });
};

// ==> List all contacts method:
exports.listAllContacts = async (req, res) => {
    const response = await db.query('SELECT * FROM contacts ORDER BY name ASC');
    res.status(200).send(response.rows);
};
  
// ==> Find contact by Name method:
exports.findContactbyName = async (req, res) => {
    const contactName = req.params.name;
    const response = await db.query("SELECT * FROM contacts WHERE name LIKE '$1%'", [contactName]);
   res.status(200).send(response.rows);
};

// ==> Find contact by ID method:
exports.findContactbyId = async (req, res) => {
  const contactId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM contacts WHERE id = $1', [contactId]);
 res.status(200).send(response.rows);
};

// ==> Update contact by ID method:
exports.updateContactById = async (req, res) => {
    const contactId = parseInt(req.params.id);
    const {  name, lastname, company, phone, email } = req.body;
  
    const response = await db.query(
      "UPDATE contacts SET name = $1, lastname = $2, company = $3, phone = $4, email = $5 WHERE id = $6",
      [ name, lastname, company, phone, email, contactId ]
    );
  
    res.status(200).send({ message: "Contact Updated Successfully!" });
  };

  // ==> Delete contact by ID method:
exports.deleteContactById = async (req, res) => {
    const contactId = parseInt(req.params.id);
    await db.query('DELETE FROM contacts WHERE id = $1', [
      contactId
    ]);
  
    res.status(200).send({ message: 'Contact deleted successfully!', contactId });
  };