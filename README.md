# easy-get-request-with-headers

Simple HTTP POST requester that accepts headers.

## Example of use

```
    $ npm i easy-get-request-with-headers --save
```

After install:

```js

    const post = require('easy-get-request-with-headers');

    post('http://someurl',{'label':'someValue'},{someParameter:'someValue'})
        .then((body) => {
            console.log(body);
        })
        .catch((err) => {
            console.error(err);
        });

```
