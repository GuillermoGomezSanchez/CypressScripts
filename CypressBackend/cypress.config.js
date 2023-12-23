const { defineConfig } = require("cypress");
const mysql = require('mysql')
const {MongoClient} = require('mongodb')

const db = {
            'host': '127.0.0.1',
            "port":'3036',
            "user":"memo",
            "password":"password1",
            'database':'db_name'
        }

const mongo = "mongodb+srv://memo:2KgZu77nOETifKLk@cluster0.fmahmvu.mongodb.net/?retryWrites=true&w=majority"

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {

      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

async function connect(client){
  await client.connect();

  return client.db('sample_training');

//mongo password  2KgZu77nOETifKLk
}

module.exports = defineConfig({
  e2e: {
    //baseUrl:"http://localhost:3000",
    //baseUrl:"http://localhost:3036",
    setupNodeEvents(on, config) {

      /*on('task',{

        queryDb: query => {
      return queryTestDb(query, config);
        }
      })*/
      on('task',{
        async getListing(){
          try{
            const client = new MongoClient(mongo)
            //console.log(client)
            //debugger
            const db = await connect(client)
            const listingTraining = db.collection('trips')
            return await listingTraining.find({}).limit(50).toArray()

           }
          catch(e){
            console.error(e)
          }
          finally{
            try{
              await client.close()
            }
            catch(e){
            console.error(e)
            }
            
          }
        },
        async createGrade(grade){
          try{
            const client = new MongoClient(mongo)
            //console.log(client)
            //debugger
            const db = await connect(client)
            const listingTrainingGrade = db.collection('grades')
            return await listingTrainingGrade.insertOne(grade)

           }
          catch(e){
            console.error(e)
          }
          finally{
            try{
              await client.close()
            }
            catch(e){
            console.error(e)
            }
            
          }
        },
        async clearCompanies(){
          try{
            const client = new MongoClient(mongo)
            //console.log(client)
            //debugger
            const db = await connect(client)
            const listingTrainingComp = db.collection('companies')
            return await listingTrainingComp.remove({})

           }
          catch(e){
            console.error(e)
          }
          finally{
            try{
              await client.close()
            }
            catch(e){
            console.error(e)
            }
            
          }
        }
      })

      // implement node event listeners here
      // implement node event listeners here

    },
    specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}"
  },
});
