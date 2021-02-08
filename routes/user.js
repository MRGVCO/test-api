// const express = require("express");
// const router = express.Router();
// const request = require("request");
// const generator = require('generate-password');
// const User = require('../models/user')


// router.get('/', async (req, res) => {
//   console.log('this is req', req);
//   const users = await User.findAll();
//   return res.send(users);
// });

// router.get('/:userId', async (req, res) => {
//   const user = await req.context.models.User.findById(
//     req.params.userId,
//   );
//   return res.send(user);
// });


// router.get('/uid/:uid', async (req, res) => {
//   const user = await req.context.models.User.findOne(
//     { where: {user_id: req.params.uid}}
//   );
//   if(user){
//     return res.send(user);  
//   }
//   else{
//     return res.send(false);
//   }  
// });

// router.get('/email/:email', async(req, res) => {
//   const user = await req.context.models.User.findOne(
//     { where: {email: req.params.email}}
//   );
//   if(user){
//     return res.send(user);  
//   }
//   else{
//     return res.send(false);
//   }  
// });


// router.post('/register', async (req, res) => {
//   console.log('req', req.body)
//   const password = generator.generate({
//     length: 10,
//     numbers: true
//   });


//   const user = await req.context.models.User.create({
//     email: req.body.email,
//     f_name: req.body.f_name,
//     l_name: req.body.l_name,
//     user_level : req.body.user_level,
//     company_id : req.body.company_id,
//     business_id : req.body.business_id,
//     photo : req.body.photo,
//     phone: req.body.phone,
//     user_id : req.body.user_id,
//     temporary_password : password, 
//     created: (new Date()).toISOString()
//   });

 
//  return res.send(user);
// });


// router.get('/auth/token', async(req, res) => {
//   var options = { method: 'POST',
//   url: 'https://getreal.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"3QGvcAEuHtrLo6crWbjZFRgjte11qTVW","client_secret":"CHHWc-iMFzwkXC14ZAjTTBw1Z9IH1vC5V_jIxrMs_qVe1_S_sN_7Wa1NybOlIjVz","audience":"https://getreal.auth0.com/api/v2/","grant_type":"client_credentials"}' };

//   request(options, (error, response, body) => {
//     if (error) throw new Error(error);
//     if(body){
//        return res.send(body);
//     }
//   });
// })

// router.post('/auth/create', async(req, res) => {
  
//   const user = {
//     "email": req.body.email,
//     "user_metadata": req.body.user_metadata, 
//     "given_name": req.body.given_name,
//     "family_name": req.body.family_name,
//     "name": req.body.given_name + " " + req.body.family_name,
//     "user_id": req.body.user_id.toString(),
//     "connection": "Username-Password-Authentication",
//     "password": req.body.password
//   }

//   console.log('this is user', user)

//   // const options = { method: 'POST',
//   // url: 'https://getreal.auth0.com/api/v2/users',
//   // headers: { authorization: 'Bearer  '+req.body.token, 'content-type': 'application/json' },
//   // body: ''+JSON.stringify(user)+'' };

//   // request(options, (error, response, body) => {
//   //   console.log('got body', body)
//   //   if (error) throw new Error(error);
//   //   if(body){
//   //      return res.send(body);
//   //   }
//   // });
// })


// router.put('/update/:userId', async (req, res)  => {
//   console.log('time', (new Date()).toISOString());
//   const user = await req.context.models.User.update(
//  	{
//    	 f_name: req.body.f_name, 
//    	 l_name: req.body.l_name,
//      user_level: req.body.user_level,
//      about: req.body.about,
//      photo: req.body.photo,
//      phone: req.body.phone,
//      active: req.body.active,
//      verified: req.body.verified,
//      user_level: req.body.user_level,
//      modified: (new Date()).toISOString(),
//      business_id: req.body.business_id,
//      company_id: req.body.company_id 
//  	},
//  	{where:{id :  req.params.userId}});
//  	return res.send(user);
// })

// router.delete('/delete/:userId', async (req, res) => {
//   const result = await req.context.models.User.destroy({
//     where: { id: req.params.userId },
//   });

//   return res.send(true);
// });



// module.exports = router;




const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// router.post('/', userController.addUser);
router.get('/', userController.findUsers);
// router.get('/:id', userController.findUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteById);

module.exports = router;