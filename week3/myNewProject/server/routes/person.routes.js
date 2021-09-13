const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.get("/api/people/", PersonController.findAllUsers);
    app.post('/api/people', PersonController.createPerson);
}