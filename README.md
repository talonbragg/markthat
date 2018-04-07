# Markthat

A module that parses markdown into html

[![Build Status](https://travis-ci.org/talonbragg/markthat.svg?branch=master)](https://travis-ci.org/talonbragg/markthat)
<a href="https://codecov.io/gh/talonbragg/markthat"><img src="https://codecov.io/gh/talonbragg/markthat/branch/master/graph/badge.svg" alt="Code Coverage"></a>

**Installation:**

`npm install markthat`

**Usage:**

Single line:

```javascript
const markthat = require('markthat');

markthat.markthat('**Bold**');

//returns as: <strong>Bold</strong>
```

Whole file:

```javascript
const markthat = require('markthat');

markthat.markthatFile('./README.md').then(thefile => {
    console.log(thefile); //thefile is the parsed markdown
    //do whatever you want with the parsed markdown
});
```