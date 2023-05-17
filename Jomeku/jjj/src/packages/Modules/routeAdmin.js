import express from 'express'
import controller from './controller'
// import { adminAuthentication } from '../../middleware';

const router = express.Router()

// router.post('/', controller.create)
// router.patch('/:id', controller.update)
// router.get('/', controller.index)
// router.post('/filter', controller.filter)
router.get('/', controller.index)
router.get('/Graph', controller.findAllJoin)
router.post('/feedback', controller.feedback)



export default router
