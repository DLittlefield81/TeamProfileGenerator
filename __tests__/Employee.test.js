const Employee = require('../lib/Employee');

test('Test to creates an employee object', () => {
    const employee = new Employee('Dude');
  
});

test('Test to set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('Test to set email with constructor', () => {
    const testValue = 'employee@email.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

// Test if the getRole() value is Employee
test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Dennis', 1, 'employee@email.com');
    expect(e.getRole()).toBe(testValue);
});