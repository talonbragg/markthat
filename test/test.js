'use strict';

const expect = require('chai').expect;
const markthat = require('../index.js');

describe('#markdownParse', function() {
    it('should return a string', function() {
        var result = markthat.markthat('**This is a test**');

        expect(result).to.be.a('string');
    });
    it('should return a string', function() {
        var result = markthat.markthatFile('./README.md').then(thefile => {
            expect(thefile).to.be.a('string');
        });
    });
});