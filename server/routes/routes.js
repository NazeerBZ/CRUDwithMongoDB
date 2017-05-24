const app = require('../app');
const studentMiddleware = require('../middlewares/student_middleware');
const crud_controller = require('../controllers/crud_controller');

function routes(app) {

    //***POST API    
    //Pre Middleware can be here....
    app.post('/api/createStudent', crud_controller.create);
    app.use(studentMiddleware); //Post middleware

    //***READ API
    //Pre Middleware can be here....
    app.get('/api/readStudent', crud_controller.read);
    app.use(studentMiddleware);//Post middleware

    //***UPDATE API
    //Pre Middleware can be here....
    app.put('/api/updateStudent/:id', crud_controller.update);
    app.use(studentMiddleware);//Post middleware

    //***DELETE API
    //Pre Middleware can be here....
    app.delete('/api/deleteStudent/:id', crud_controller.delete);
    app.use(studentMiddleware);


}

module.exports = routes;