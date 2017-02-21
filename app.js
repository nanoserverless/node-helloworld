// Print Query string
var qs = require('querystring');
console.log("");
console.log("## Query String : ");
console.log(qs.parse(process.env["QUERY_STRING"]));
console.log("");

// Print stdin
if (! process.stdin.isTTY) {
  data = '';
  process.stdin.setEncoding('utf-8');
 
  process.stdin.on('readable', function() {
    var chunk;
    while (chunk = process.stdin.read()) {
      data += chunk;
    }
  });
 
  process.stdin.on('end', function () {
    // There will be a trailing \n from the user hitting enter. Get rid of it.
    data = data.replace(/\n$/, '');
    console.log("## Stdin : ");
    console.log(data);
    console.log("");
  });
}
