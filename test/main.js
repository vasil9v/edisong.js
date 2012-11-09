// test/main.js
var should = require('should');
var edisong = require('../lib/main.js');

describe('edisong', function() {
    describe('with no arguments', function() {
        it('returns 43', function() {
            var result = edisong();
            result.should.eql(43);
        });
    });
});

