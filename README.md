# reachable

Small library to test if a system is reachable.

## ping
```javascript
var reachable = require('reachable');
reachable.ping('127.0.0.1', 5, function(result) {
  console.log(result.pingable);
  console.log(result.packets);
  console.log(result.success);
  console.log(result.packetLoss);
});
```
## page
```javascript
var reachable = require('reachable');
reachable.page('https://google.com', 'gbqfq' ,function(result) {
  console.log(result.page);
  console.log(result.element);
  console.log(result.type);
});
```
