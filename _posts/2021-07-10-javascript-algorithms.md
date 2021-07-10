---
published: true
---
## JavaScript Algorithms and Data Structures


Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.


## Basic input and output of JavaScript(Node.js)

### Goorm (readline module) / BOJ (fs module)

```JavaScript
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

```

```JavaScript
// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
    //   let num = line.split(' ').map(Number); for one line 

  input.push(line.trim());
  // rl.close();
}).on("close", function () {
  const length = parseInt(input[0]);
  const values = input[1].split(" ").map(Number);
  console.log(`your length is ${length} & your arr is ${values}`);
  process.exit();
});

```
