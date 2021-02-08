const express = require("express");
const router = express.Router();
//module.exports = router;
const filterPhoto = require("../controllers/photoscontroller");
const FilterTypes = require("../constants/constants");
const Sequelize = require('sequelize');
const op = Sequelize.Op;
router.post('/all', async (req, res) => {
  const photos = await req.context.models.Photos.findAll({ where: { business_id: req.body.businessId } });
  let filterPhotos = [];
  if (req.body.filterobj) {
    const featuredlst = req.body.filterobj.featured;
    const apartmentlst = req.body.filterobj.apartment;
    const apartmentAmelst = req.body.filterobj.apartmentame;
    const buildingAmelst = req.body.filterobj.buildingame;
    console.log('this is photos 1131', photos)
    photos.forEach(photo => {
      if (photo.type) {
        const featuredkey = photo.type['featured'].map(p => p.key);
        const apartmentkey = photo.type['apartment'].map(p => p.key);
        const apartmentAmekey = photo.type['apartment_amenity'].map(p => p.key);
        const buildingAmekey = photo.type['building_amenity'].map(p => p.key);
        if (filterPhoto(featuredlst, featuredkey)
          && filterPhoto(apartmentlst, apartmentkey)
          && filterPhoto(apartmentAmelst, apartmentAmekey)
          && filterPhoto(buildingAmelst, buildingAmekey)) {
            filterPhotos.push(photo);
        }
      }
    });
  } else {
    filterPhotos = photos;
  }
  return res.send(filterPhotos);
});

router.get('/allPhotos/:businessId', async (req, res) => {
  const photos = await req.context.models.Photos.findAll({where:{business_id :  req.params.businessId}});
  return res.send(photos);
});

router.get('/apartment/:businessId/:apartmentId', async (req, res) => {
  console.log('this is reg111', req.params);
  const photos = await req.context.models.Photos.findAll({
    where: {
      business_id: req.params.businessId
    }
  });


  let allPhotos = [];
  photos.map(photo => {
    if(photo.dataValues.type){
      if(photo.dataValues.type.apartment.length){
        photo.type.apartment.map(p => {
          if(p.apartment_id === Number(req.params.apartmentId)){
            allPhotos.push(photo)      
          }          
        })
      }
    }    
  })
  return res.send(allPhotos);
});

router.get('/type/featured/:businessId', async (req, res) => {
  const photos = await req.context.models.Photos.findAll({
    where: {
      business_id: req.params.businessId
    }
  });

  let allPhotos = [];
  photos.map(photo => {
    if(photo.dataValues.type){
      if(photo.dataValues.type.featured.length){
        allPhotos.push(photo)
      }
    }    
  })
  return res.send(allPhotos);
});

router.get('/type/apartment/:businessId', async (req, res) => {
  const photos = await req.context.models.Photos.findAll({
    where: {
      business_id: req.params.businessId
    }
  });
  let allPhotos = [];

  photos.map(photo => {
    if(photo.dataValues.type){
      if(photo.dataValues.type.apartment.length){
        allPhotos.push(photo)
      }
    }    
  })
  
  return res.send(allPhotos);
});

router.get('/type/amenity/:businessId', async (req, res) => {
  const photos = await req.context.models.Photos.findAll({
    where: {
      business_id: req.params.businessId
    }
  });
  let allPhotos = [];
  function amenityExists(types) {
    return types.some(function (el) {
      return el.type === 'apartment_amenity';
    });
  }
  let idCheck = [];


   photos.map(photo => {
    if(photo.dataValues.type){
      if(photo.dataValues.type.apartment_amenity.length || photo.dataValues.type.building_amenity.length){
        idCheck.push(photo.id);
        allPhotos.push(photo)
      }
    }    
  })
  

  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  let _allPhotos = removeDuplicates(allPhotos, "id");

  return res.send(_allPhotos);
});



router.post('/add', async (req, res) => {
  console.log('req', req.body)
  const photos = await req.context.models.Photos.create({
    business_id: req.body.business_id,
    firebaseName: req.body.name,
    description: '',
    order: null,
    uid: req.body.uid,
    url: req.body.url,
    created: (new Date()).toISOString()
  });
  return res.send(photos);
});

router.put('/update/:photo_id', async (req, res) => {
  console.log(req.body)
  const photo = await req.context.models.Photos.update(
    {
      type: req.body.type,
      name: req.body.name,
      description: req.body.description,
      order: req.body.order,
      modified: (new Date()).toISOString()
    },
    { where: { id: req.params.photo_id } });
  return res.send(photo);
})

router.delete('/delete/:photosId', async (req, res) => {
  const result = await req.context.models.Photos.destroy({
    where: { id: req.params.photosId },
  });

  return res.send(true);
});


module.exports = router;
