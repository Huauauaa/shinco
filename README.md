# shinco

## how to use

### es module

```js
import { sum } from '@harvey0379/shinco'
console.log(sum(1, 2))
```

### commonjs

```js
const { sum } = require('@harvey0379/shinco')
console.log(sum(1, 2))
```

### browser

<script src="node_modules/@harvey0379/shinco/lib/bundle.browser.js"></script>
<script>
console.log(shinco.sum(1, 2))
</script>
