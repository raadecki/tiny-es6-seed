import hello from 'source/hello';

describe('hello function spec', function() {

    it('should return Hello World', function() {
        expect(hello('World')).toBe('Hello World');
    });
    
});
