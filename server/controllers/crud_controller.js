const Student = require('../models/student');

module.exports = {

    create(req, res, next) {
        const studentObj = req.body
        Student.create(studentObj)
            .then((studentObj) => { res.send(studentObj) })
            .catch(next)
    },

    read(req, res, next) {
        Student.find()
            .then((allStudentsObj) => {
                res.send(allStudentsObj);
            })
            .catch(next)
    },

    update(req, res, next) {
        const studentId = req.params.id;
        const newstudentObj = req.body;
        Student.findByIdAndUpdate({ _id: studentId }, newstudentObj)
            .then(() => Student.findOne({ _id: studentId }))
            .then((newUpdatedStudent) => { res.send(newUpdatedStudent) })
            .catch(next);
    },

    delete(req, res, next) {
        const studentId = req.params.id;
        Student.remove({ _id: studentId })
            .then((delStd) => {
                res.status(204).send(delStd);
            })
            .catch(next);
    }

}