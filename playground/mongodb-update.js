// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('connected to mongodb');



//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5bf043cc987000d536cbaa7f')
//   },
//   {
//     $set: {
//       text: 'ayu'
//     }
//   }
// ).then((data) => {
//   console.log(data);
// });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5be30d0052c5574f30f650dd')
  },
  {
    $set: {
      name: 'Retnoayu',
    },
    $inc: {
      age : 1
    }
  },
  {
    returnOriginal: false
  }).then((data) => {
    console.log(data);
  });

  // db.close();
});
