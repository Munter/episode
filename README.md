Episode
=======

[![NPM version](https://badge.fury.io/js/episode.png)](http://badge.fury.io/js/episode)
[![Build Status](https://travis-ci.org/Munter/episode.png?branch=master)](https://travis-ci.org/Munter/episode)
[![Dependency Status](https://david-dm.org/Munter/episode.png)](https://david-dm.org/Munter/episode)

A javascript utility that can parse commonly used TV-series season and episode syntaxes into structured data.

A typical use case would be to extrapolate this information from a file name, directory structure or other metadata.

Usage
-----
```javascript
var episode = require('episode');

episode('s01e04'); // { season: 1, episode: 4, matches: ['s01e04'] }
```
The season and episode of the return value can be `undefined` if no matches are made.

The matches array contains the list of matched strings that led to the result. These could be useful for replacing those strings in your input string.

Supported syntaxes
------------------
```javascript
's{number}e{number}'
's{number} e{number}'
'{number}x{number}'
'season {number} episode {number}'
'season{number} episode{number}'
'season: {number} episode: {number}'
'season:{number} episode:{number}'
```

License
-------
(The MIT License)

Copyright (c) 2013 Peter Müller <munter@fumle.dk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
