const express = require("express");
const router = express.Router();
const axios = require("axios");


router.post('/', async (req, res) => {

  if(req.body.timestamp != undefined){


      let businessId;
      let storeEmail;
      let vars;


      if(req.body['X-Mailgun-Variables']){
        vars = JSON.parse(req.body['X-Mailgun-Variables']);  
      }
      

      console.log('this is vars', vars);

      if(vars){
        businessId = vars.businessId;

        const email = await req.context.models.Email.create({
          business_id: vars.businessId,
          mail_id: req.body['Message-Id'],
          mail_to: req.body.To,
          mail_from: req.body.From,
          mail_cc: req.body.Cc,
          subject: req.body.Subject,
          plain: req.body['body-plain'],
          html: req.body['body-html'],
          bucket : 'Sent',
          status : 'delivered',
          created: new Date(req.body.timestamp * 1000).toISOString()
        });


        res.send(email);  
      }else{


          const references = req.body.References.split(" ")[0];

          console.log('this is references', references);

          const info = axios.get('http://localhost:3001/emails/mail-by-id?id='+references).then(response=>{
            console.log('this is the response sucka', response.data);
            businessId = response.data[0].business_id ? response.data[0].business_id : '';
            const email = req.context.models.Email.create({
              business_id: businessId,
              mail_id: req.body['Message-Id'],
              mail_to: req.body.To,
              mail_from: req.body.From,
              mail_cc: req.body.Cc,
              subject: req.body.Subject,
              plain: req.body['body-plain'],
              html: req.body['body-html'],
              bucket : 'Inbox',
              status: 'unread',
              created: new Date(req.body.timestamp * 1000).toISOString()
            });                  
            res.send(email);                       
          }).catch(function(error){
            console.log('this is error', error);
          })
      }


        
      
  }
});


router.get('/mail-businessid/:businessId', async(req, res) => {
  console.log('this is req', req.params.businessId);
  const mail = await req.context.models.Email.findAll({
    where:{business_id :  req.params.businessId},
    order: [ [ 'created',  'DESC' ]]
  });
  return res.send(mail);
})


router.get('/mail-by-id', async (req, res) => {
  const mail = await req.context.models.Email.findAll({
    limit: 1,
    where:{mail_id :  req.query.id},
    order: [ [ 'created',  'DESC' ]]
  });
  return res.send(mail);
});


router.get('/storage', async (req, res) => {
  //const lead = await req.context.models.Lead.findAll({where:{business_id :  req.params.businessId}});
  return res.send('got here too');
});


module.exports = router;
