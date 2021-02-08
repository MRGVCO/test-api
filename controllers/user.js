const userDao = require('../dao/user');
var userController = {
//    addGig: addGig,
    findUsers: findUsers,
    // findGigById: findGigById,
    // updateGig: updateGig,
    // deleteById: deleteById
}

// function addGig(req, res) {
//     let gig = req.body;
//     gigDao.create(gig).
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function findGigById(req, res) {
//     gigDao.findById(req.params.id).
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function deleteById(req, res) {
//     gigDao.deleteById(req.params.id).
//         then((data) => {
//             res.status(200).json({
//                 message: "Gig deleted successfully",
//                 gig: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function updateGig(req, res) {
//     gigDao.updateGig(req.body, req.params.id).
//         then((data) => {
//             res.status(200).json({
//                 message: "Gig updated successfully",
//                 gig: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

function findUsers(req, res) {
    userDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = userController;