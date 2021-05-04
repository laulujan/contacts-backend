const router = require('express-promise-router')();
const contactController = require('../controllers/contact.controller');

// ==> Defining CRUD routes - 'Contact':

// ==> Create new Contact: (POST): localhost:3000/api/contacts
router.post('/contacts', contactController.createContact);

module.exports = router;

// ==> List all Contacts (GET): localhost:3000/api/contacts
router.get('/contacts', contactController.listAllContacts);

// ==> Find contact by Name: (GET): localhost:3000/api/contacts/:name
router.get('/contacts/:name', contactController.findContactbyName);

// ==> Update contact by ID: (PUT): localhost: 3000/api/contacts/:id
router.put('/contacts/:id', contactController.updateContactById);

// ==> Delete contact by ID: (DELETE): localhost:3000/api/contacts/:id
router.delete('/contacts/:id', contactController.deleteContactById);