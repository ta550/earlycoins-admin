const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const {ValidationError} = require('admin-bro');
var url = require('url');


function bufferFile(relPath) {
  return fs.readFileSync(relPath); // zzzz....
}

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, image } = context;

  return response;
};

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === 'post') {
    const { image, ...otherParams } = request.payload;
    
    if (image == undefined) {
      throw new ValidationError({
        name: {
          message: 'Alert',
        },
      }, {
        message: 'Image is Required',
      })
    }


    if (typeof image === 'string' || image instanceof String) {

    }else {
          var filePath = path.join('admin-panel','uploads', Math.floor(Math.random() * 20000000).toString(), image.name);
          const imageUrl = `${request.headers.origin}/${filePath}`;
          var BUFFER = bufferFile(image.path);
          await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
          fs.writeFile(filePath, BUFFER, (err) => {
            if (err) console.log("Image Upload Error : "+ err);
            console.log("Image Saved");
          })
          
          context.image = imageUrl;
          request.payload.image = imageUrl;
          // await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
          // await fs.promises.rename(image.path, filePath);

            // const fileContents = new Buffer(image.data.data, 'base64')
            // fs.writeFile(filePath, fileContents, (err) => {
            //   if (err) return console.error(err)
            //   console.log('file saved to ', part.filename)
            // })

          // await fs.rename(image.path, filePath, (err) => {
          //   if (err) console.log(err);
          // })
          // eslint-disable-next-line no-param-reassign

    }

    return request;
    }
    return request;
};

module.exports = { after, before };
