# Verify TC Number

This library can verify the Turkish citizenship number. `verifyTC` function returns a boolean value.

## Example

```js
const { verifyTC } = require('verify-tc');
// or
import { verifyTC } from 'verify-tc';

// Async/await
const isVerified = await verifyTC({
  name: 'Name',
  surname: 'Surname',
  tcNumber: 11111111111,
  birthYear: 2005,
});
console.log(isVerified);

// Then
verifyTC({
  name: 'Name',
  surname: 'Surname',
  tcNumber: 11111111111,
  birthYear: 2005,
}).then((isVerified) => {
  console.log(isVerified);
});
```
