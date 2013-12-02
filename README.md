# Nina [![Build Status](https://secure.travis-ci.org/chrisenytc/nina.png?branch=master)](http://travis-ci.org/chrisenytc/nina) [![NPM version](https://badge-me.herokuapp.com/api/npm/nina.png)](http://badges.enytc.com/for/npm/nina) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrisenytc/nina/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

An AuthKey Generator

## Getting Started
Install the module with: `npm install nina`

```javascript
var nina = require('nina');

nina.generate(['hashList'], 'example.com', '127.0.0.1');
```

## Documentation

#### .generate(keyList, domain, ip, infinityConstant)

**Parameter**: `keyList`
**Type**: `Array`
**Example**: `['hashList']`

**Parameter**: `domain`
**Type**: `String`
**Example**: `example.com`

**Parameter**: `ip`
**Type**: `String`
**Example**: `127.0.0.1`

**Parameter**: `infinityConstant`
**Type**: `Number`
**Example**: `19`

The 'generate' method is responsible for making a new unique AuthKey.

How to use this method

```javascript
nina.generate(['hashList'], 'example.com', '127.0.0.1', 19);
```

## Contributing

Please submit all issues and pull requests to the [chrisenytc/nina](http://github.com/chrisenytc/nina) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/nina/issues).

## License
Copyright (c) 2013 Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
