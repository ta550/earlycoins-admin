const { Parser } = require('json2csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

const downloadResource = (res, fileName, fields, data) => {
  const csvWriter = createCsvWriter({
    path: path.join(__dirname, "/uploads/"+ fileName),
    header: [
      {id: 'email', title: 'Emails'},
    ]
  });

  csvWriter
  .writeRecords(data)
  .then(()=>  {
    res.send(`<a href="/uploads/${fileName}" download id='download-file'></a><script>document.getElementById('download-file').click(); location.href= "/admin/resources/newsletter/actions/download";</script>`)
  });
  // const json2csv = new Parser({ fields });
  // const csv = json2csv.parse(data);
  // res.header('Content-Type', 'text/csv');
  // res.attachment(fileName);
  // const csvParseStream = fs.createReadStream(__basedir + "/files/" + fiels)
  // return csv;
}

module.exports =  downloadResource;