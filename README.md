# Compare
* **Tiny** Unminified filesize is ~410 bytes
* **Easy to use** Simply call `compare(object, object)`

## API

### ES6
```js
import compare from '@jakejarrett/compare'

const firstObject = {
    hello: {
        yes: true,
        no: false
    },
    user: {
        name: 'jake',
        id: 0
    }
}

const secondObject = Object.assign({}, firstObject)

// true
compare(firstObject, secondObject)

secondObject.user.name = 'not jake'
secondObject.user.id = 1

// false
compare(firstObject, secondObject)

```