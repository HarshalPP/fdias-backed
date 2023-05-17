import express from 'express'
import controller from './controller'
import token from'./repository'
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const multer = require('multer')
const router = express.Router()
const upload = multer({ dest: 'uploads/' })


router.post('/login', controller.auth)
router.post('/auth', controller.authorizetion)
router.get('/auditlist',controller.Audit_list)
router.get('/companyDetail',controller.CompanyDetail)
router.get('/categorybyID/:id',controller.CategoryById)
router.get('/areaname/:id',controller.Areaname)
router.get('/elementcount/:id',controller.ElementCount)
router.get('/auditPresent/:id',controller.AuditPresent)
router.post('/uploadform',upload.fields([
    { name: 'LogbookImage'},
    { name: 'TechnicalAspectsImage'}
  ]),controller.createAudit)
 router.get('/ElementType/:id', controller.ElementType )
  router.get('/ErrorType', controller.ErrorType)
  router.get('/setting/:Id', controller.audits)
router.get ('/clientList/:Id', controller.clientName)
router.get('/Auditlistnew/:NameClient_Id', controller.list)
router.get('/userprofile/:Id', controller.userprofile)

router.get('/AreaDescId/:Id', controller.AreaDescId)


export default router
