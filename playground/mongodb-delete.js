// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('connected to mongodb');


  //   deleteMany
  //
  // db.collection('Todos').deleteMany({ text: 'Something to do' }).then((result) => {
  //   console.log(result);
  // });


  //   deleteOne

  // db.collection('Todos').deleteOne({ text: 'dia' }).then((result) => {
  //   console.log(result);
  // });


  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({ text: 'yuna' }).then((data) => {
  //   console.log(data);
  // });

  // db.collection('Todos').findOneAndDelete({
  //   _id: new ObjectID('5beae178e5b31c453121bc2b')
  // }).then((data) => {
  //   console.log(JSON.stringify(data, undefined, 2));
  // })


  // db.close();
});
