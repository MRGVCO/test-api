const express = require("express");
const router = express.Router();


router.get('/all', async (req, res) => {
  const company = await req.context.models.Company.findAll();
  return res.send(company);
});

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

router.post('/register', async (req, res) => {
  const company_exists = await req.context.models.Company.findOne({
    where: { name: req.body.name },
  });
  if (!company_exists) {
    const company = await req.context.models.Company.create({
      name: req.body.name,
      photo: req.body.photo,
      email: req.body.email,
      created: new Date().toISOString(),
    });
    return res.send(company);
  } else {
    return res.send('Company Already Exists');
  }
});

router.put('/update/:companyId', async (req, res) => {
  const company = await req.context.models.Company.update(
    {
      email: req.body.email,
      buildings: req.body.buildings,
      name: req.body.name,
      about: req.body.about,
      photo: req.body.photo,
      active: req.body.active,
      verified: req.body.verified,
      userId: req.body.userId,
      modified: new Date().toISOString(),
    },
    { where: { id: req.params.companyId } },
  );
  return res.send(company);
});


router.get('/id/:companyId', async (req, res) => {
  const company = await req.context.models.Company.findAll({ where: { id: req.params.companyId } });
  return res.send(company);
});



// router.put('/update/:userId', async (req, res)  => {
//   console.log('time', (new Date()).toISOString());
//   const user = await req.context.models.User.update(
//   {
//      f_name: req.body.f_name,
//      l_name: req.body.l_name,
//      tenant_level: req.body.tenant_level,
//      about: req.body.about,
//      photo: req.body.photo,
//      active: req.body.active,
//      verified: req.body.verified,
//      user_level: req.body.user_level,
//      modified: (new Date()).toISOString(),
//      business_id: req.body.business_id
//   },
//   {where:{id :  req.params.userId}});
//   return res.send(user);
// })

// router.delete('/delete/:userId', async (req, res) => {
//   const result = await req.context.models.User.destroy({
//     where: { id: req.params.userId },
//   });

//   return res.send(true);
// });

router.delete('/delete/:companyId', async (req, res) => {
  const result = await req.context.models.Company.destroy({
    where: { id: req.params.companyId },
  });
  return res.send(true);
});


router.put('/businessDelete/:companyId', async (req, res) => {
  const company = await req.context.models.Company.update(
    {
      buildings: req.body.buildings,
      modified: new Date().toISOString(),
    },
    { where: { id: req.params.companyId } },
  );
  return res.send(company);
});



module.exports = router;
