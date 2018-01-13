# easy-get-request-with-headers

Simple HTTP GET requester that accepts headers.

## Example of use

```
    $ npm i easy-get-request-with-headers --save
```

After install:

```js

    const get = require('easy-get-request-with-headers');

    get('http://someurl',{'label':'someValue'},{someParameter:'someValue'})
        .then((body) => {
            console.log(body);
        })
        .catch((err) => {
            console.error(err);
        });

```
