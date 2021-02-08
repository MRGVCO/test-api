const express = require("express");
const router = express.Router();

router.get('/all/:businessId', async (req, res) => {
  const apartment = await req.context.models.Apartment.findAll({where:{business_id :  req.params.businessId}});
  return res.send(apartment);
});


router.post('/add', async (req, res) => {
  console.log('req', req.body)
  const apartment = await req.context.models.Apartment.create({
    title : req.body.title,
    apt_number : req.body.apt_number,
    on_market : req.body.on_market,
    bedrooms : req.body.bedrooms,
    business_id : req.body.business_id,
    bathrooms : req.body.bathrooms,
    price : req.body.price,
    availability : req.body.availability,
    amenities : req.body.amenities,
    description : req.body.description,
    size  : req.body.size,
    featured : req.body.featured,
    created: (new Date()).toISOString()
  });
  return res.send(apartment);
});


router.put('/update/:apartmentId', async (req, res)  => {
  const apartment = await req.context.models.Apartment.update(
 	{
    title : req.body.title,
    apt_number : req.body.apt_number,
    on_market : req.body.on_market,
    bedrooms : req.body.bedrooms,
    bathrooms : req.body.bathrooms,
    price : req.body.price,
    availability : req.body.availability,
    amenities : req.body.amenities,
    description : req.body.description,
    size  : req.body.size,
    featured : req.body.featured,
    modified:(new Date()).toISOString(),
 	},
 	{where:{id :  req.params.apartmentId}});
 	return res.send(apartment);
})

router.delete('/delete/:apartmentId', async (req, res) => {
  const result = await req.context.models.Apartment.destroy({
    where: { id: req.params.apartmentId },
  });

  return res.send(true);
});


module.exports = router;
