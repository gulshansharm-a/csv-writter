const express = require('express')
const app = express()
const path=require('path')
const port = 3000
const createCsvWriter = require('csv-writer').createObjectCsvWriter;



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'main.html'))
  var name =req.query.name;
    var email =req.query.email;
   var about =req.query.about;
   var  student =req.query.school;
    // console.log(name+  "   "+email+"  "+about+"  "+student+"  ");
    const csvWriter = createCsvWriter({
      path: 'file.csv',
      header: [
          {id: 'name', title: 'NAME' },
          {id: 'email', title: 'Email'},
          {id: 'about', title: 'ABOUT'},
          {id: 'school', title: 'LANGUAGE'}
      ]
  });
     console.log(csvWriter)
  const records = [
    {name: name,  email: email,about:about,school:student}

  ];


  
  csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });





