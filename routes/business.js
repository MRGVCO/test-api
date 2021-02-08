const express = require("express");
const router = express.Router();


router.get('/', async (req, res) => {
  const businesses = await req.context.models.Business.findAll();
  return res.send(businesses);
});

router.get('/company/:companyId', async (req, res) => {
  const businesses = await req.context.models.Business.findAll({
    where: {
        company: req.params.companyId
    }
  });
  return res.send(businesses);
});

router.get('/each/:businessId', async (req, res) => {
  const business = await req.context.models.Business.findById(
    req.params.businessId,
  );
  return res.send(business);
});

router.get('/multiple/:businessId', async (req, res) => {
  const b_array = req.params.businessId.split(',');
  const business = await req.context.models.Business.findAll({
    where: {
        id: b_array
    }
  })
  
  return res.send(business);
});



router.get('/total', async (req, res) => {
  const business = await req.context.models.Business.findAndCountAll();
  return res.send(business);
});


router.post('/upload', async (req, res) => {
  req.form.on('progress', function(bytesReceived, bytesExpected) {
        console.log(((bytesReceived / bytesExpected)*100) + "% uploaded");
    });
    req.form.on('end', function() {
        console.log(req.files);
        res.send("well done");
    });
});


router.post('/register', async (req, res) => {
  const business = await req.context.models.Business.create({
    name: req.body.name,
    company : req.body.company,
    email : req.body.email,
    logo: req.body.logo,
    created: (new Date()).toISOString()
  });
  return res.send(business);
});


router.put('/update/:businessId', async (req, res)  => {
  const business = await req.context.models.Business.update(
 	{
    name:req.body.name,
    address:req.body.address,
    postal_code:req.body.postal_code,
    region:req.body.region,
    city:req.body.city,
    neighborhood:req.body.neighborhood,
    phone:req.body.phone,
    email:req.body.email,
    url:req.body.url,
    logo:req.body.logo,
    website_template:req.body.website_template,
    description:req.body.description,
    apartment:req.body.apartments,
    amenities:req.body.amenities,
    photos:req.body.photos,
    payments:req.body.payments,
    multiple:req.body.multiple,
    company:req.body.company,
    modified:(new Date()).toISOString(),
 	},
 	{where:{id :  req.params.businessId}});
 	return res.send(business);
})

router.delete('/delete/:businessId', async (req, res) => {
  const result = await req.context.models.Business.destroy({
    where: { id: req.params.businessId },
  });

  return res.send(true);
});


module.exports = router;
