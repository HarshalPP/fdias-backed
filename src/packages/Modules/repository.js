import { ErrorCategory } from '../../models';
import { Modules } from '../../models';
import { Sequelize } from 'sequelize';
import { UserSeq,SuperPerformer} from '../../models';
import { queryBuilderGetList } from './query-builder'
import { listInitOptions } from '../../utils/paginate'
import method from './method'

import{ Table } from 'mssql';

async function findAll(query) {
  const raw='SELECT  * FROM [dbo].[Modules]'
  return Modules.sequelize.query(raw, {
    replacements:[],
    type: Sequelize.QueryTypes.SELECT
   })
}

async function findAllJoin(query) {
  const raw='SELECT  * FROM [dbo].[Audits]'
  return Modules.sequelize.query(raw, {
    replacements:[],
    type: Sequelize.QueryTypes.SELECT
   })
}

async function feedback(qwery,body)  {
  const raw=`
  insert into ElementAudit (IdElement,IdAudit,ElementAuditComment,ElementAuditStatus)
VALUES ('${body.IdElement}','${body.IdAudit}','${body.ElementAuditComment}','${body.ElementAuditStatus}');

   `
  return Modules.sequelize.query(raw, {
    replacements:[''],
    type: Sequelize.QueryTypes.INSERT
   })
}





export default {

findAll ,
findAllJoin,
feedback

}
