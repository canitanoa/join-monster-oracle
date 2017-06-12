import path from 'path'

// Knex: libreria para conectar varios tipod de BBDD:
/*export default require('knex')({
  client: 'mysql',
  //dialect: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'webapp'
  },
  useNullAsDefault: true
})
*/	



console.log('building oracle')
let ORACLE_URL = 'system@//localhost:1521/xe'
const [ password, connectString ] = ORACLE_URL.split('@')
console.log('pass: '+ password )
console.log('connStr: '+ connectString )

export default require('knex')({
  client: 'oracledb',
  connection: {
	user: 'webapp',
	password,
	connectString,
	stmtCacheSize: 0
  }
})