const app = require('./app')

const port = process.env.PORT

app.listen(port, () => {
  console.log(`>>> App running on port "${port}"...`)
})

function FindAllDataByProjection(myMongoClinets) {
  const myDataBase = myMongoClinets.db('Rabbil_School')
  const myCollection = myDataBase.collection('students')

  const ItemObj = {}
  const ItemProjection = { Roll: 1 }

  myCollection
    .find(ItemObj)
    .project(ItemProjection)
    .toArray(function (error, result) {
      console.log(result)
    })
}
