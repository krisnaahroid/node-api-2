// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('connected to mongodb');
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Data count is : ${count}`);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').find({name: 'Krisnaloc'}).toArray().then((data) => {
    console.log(data);
  })

  db.close();
});
