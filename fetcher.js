const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);
const domain = input[0];
const filePath = input[1];


if (fs.existsSync(filePath)) {
  request(domain, (error, response, body) => {
    if (error) {
      throw "domain is not valid";
    } else if (response.statusCode === 200) {
      fs.writeFile(filePath, body, (err) => {
        if (err) {
          throw "file path not valid";
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      });
    } else {
      throw "Website can't be reached";
    }
  });
} else {
  console.log('Not the right file path');
}

