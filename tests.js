// Unit tests for the helloWorld function
// Exercise #0 - look, guess, test, conclude
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Exercise #1 Take your first "Test Drive" by writing your first test!
describe('sayHello', function(){
    it('should be a defined function', function(){
      expect(typeof sayHello).toBe('function');
    });
    // Exercise #2 Ensure our function returns the right data type.
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    // Exercise #3 Add a test to confirm actual vs. expected output.
    it('should return the string "Hello Jane!" when executed', function() {
      expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    // Exercise #4 Add another small, simple test
    it('should return the string "Hello Alex!" when executed', function() {
      expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    // Exercise #5 One more test before refactoring...
    it('should return the string "Hello Pat!" when executed', function() {
      expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

// Exercise #10 Let's Test-Drive an isFive function!
describe('isFive', function () {
    it('should be a defined function', function() {
      expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
      expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function() {
      expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the string "5"', function() {
      expect(isFive("5")).toBe(true);
    });
});