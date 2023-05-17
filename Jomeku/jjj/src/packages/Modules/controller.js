import { pick } from 'lodash'
import { handleResponse } from '../../utils/handle-response'
import to from '../../utils/to'
import service from './service'
import config from './config'



async function index(req, res) {
  const [error, result] = await to(service.index(req.query))
  return handleResponse(error, result, req, res)
}

// async function index(req, res) {
//   const [error, result] = await to(service.index(req.query))
//   return handleResponse(error, result, req, res)
// }
async function findAllJoin(req, res) {
  const [error, result] = await to(service.index(req.query))
  return handleResponse(error, result, req, res)
}

async function feedback(req, res) {
  const [error,data] = await to(service.feedback(req.query,req.body))
  return handleResponse(error, data , req, res)
}





export default {

index,
findAllJoin,
feedback

}
