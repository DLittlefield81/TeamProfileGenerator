const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Test to creates an intern object', () => {
    const intern = new Intern('Rabia');
});

test('Test to set school with constructor', () => {
    const testValue = 'UofT';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('Test to get school with getSchool() method', () => {
    const testValue = 'UofT';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'Harvard');
    expect(e.getRole()).toBe(testValue);
});