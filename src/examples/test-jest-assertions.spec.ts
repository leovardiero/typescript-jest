describe('Primitive values', () => {
  it('Should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
  });
});

describe('Objects', () => {
  it('Should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 28 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 28);
  });
});
