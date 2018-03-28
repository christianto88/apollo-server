import MongoClient from 'mongodb'
var objectId= require ('mongodb').ObjectID
const connectMongoDB = () => MongoClient.connect('mongodb://localhost:27017')
const resolvers = {
    Query: {
      author(root, args) {
        return connectMongoDB().then(client=>{
          let db=client.db('test')
          return db.collection('author')
          .find({})
          .toArray()
          .then(document=>{
            // console.log('ini dokumen',document)
            return document
          })
        })
        .then(result=>{
          console.log('result',result[0])
          return result
        })
        // return { id: 1, name: 'Hi', gender: 'male',age:21 }
      },
      allAuthors() {
        return [{ id: 1, firstName: 'Hi', lastName: 'all authors' }];
      }
    },
    // Author: {
    //   posts(author) {
    //     return [
    //       { id: 1, title: author.firstName, text: 'Some text', views: 2 },
    //       { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
    //     ];
    //   }
    // },
    Post: {
      author(post) {
        return { id: 1, firstName: post.title, lastName: 'post',postingan:post };
      }
    }
  };
  
  export default resolvers;