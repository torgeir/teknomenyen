# teknomenyen

Fetches the cantina menus from teknobyen.no

## Example

```js
const { fetchMenus } =  require('teknomenyen');

fetchMenus()
  .then(menus => console.log(menus))
  .catch(err => console.err(err));
```
