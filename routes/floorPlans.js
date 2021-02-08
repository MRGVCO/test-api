const express = require("express");
const router = express.Router();

router.get('/all/:businessId', async (req, res) => {
  const floorPlans = await req.context.models.FloorPlans.findAll({where:{business_id :  req.params.businessId}});
  return res.send(floorPlans);
});

router.get('/apartment/:businessId/:apartmentId', async (req, res) => {
  const floorPlans = await req.context.models.FloorPlans.findAll({
    where:{
        business_id :  req.params.businessId
      }
    });

  let allFloorPlans = [];
  floorPlans.map(floorPlan => {
    if(floorPlan.dataValues){
      if(floorPlan.dataValues.type){
        if(floorPlan.dataValues.type.length){
      
            floorPlan.dataValues.type.map(f => {
              if(f.key === req.params.apartmentId){
                allFloorPlans.push(floorPlan)      
              }          
            })
        }
      }
    }    
  })
  return res.send(allFloorPlans);
});

router.post('/add', async (req, res) => {
  //type is apartment type
  const floorPlans = await req.context.models.FloorPlans.create({
    business_id: req.body.business_id,
    type: req.body.type,
    firebaseName: req.body.name,
    url : req.body.url,
    created: (new Date()).toISOString()
  });
  return res.send(floorPlans);
});

router.put('/update/:floorPlansId', async (req, res)  => {
  //type is apartment type
  const floorPlans = await req.context.models.FloorPlans.update(
   {
    type: req.body.type,
    name: req.body.name,
    description: req.body.description,
    order: req.body.order,
    modified: (new Date()).toISOString()
   },
   {where:{id :  req.params.floorPlansId}});
   return res.send(floorPlans);
})

router.delete('/delete/:floorPlansId', async (req, res) => {
  const result = await req.context.models.FloorPlans.destroy({
    where: { id: req.params.floorPlansId },
  });

  return res.send(true);
});


module.exports = router;
