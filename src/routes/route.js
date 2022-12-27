const express=require('express')
const router=express.Router()
const cowinController=require('../controllers/cowinController')

router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)

router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/cowin/getByDistrictid",cowinController.getByDistrictid)

module.exports  =router;