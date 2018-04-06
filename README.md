# Markthat

A module that parses markdown into html

[![Build Status](https://travis-ci.org/talonbragg/markthat.svg?branch=master)](https://travis-ci.org/talonbragg/markthat)
<a href="https://codecov.io/gh/talonbragg/apihandler"><img src="https://codecov.io/gh/talonbragg/apihandler/branch/master/graph/badge.svg" alt="Code Coverage"></a>

**Installation:**

`npm install markthat`

**Usage:**

```javascript
const markthat = require('markthat');

markthat('**Bold**');

//returns as: <strong>Bold</strong>
```