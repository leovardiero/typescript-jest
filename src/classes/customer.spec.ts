import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndivualCustomer = (
  fistName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(fistName, lastName, cpf);
};

const createEnterpriseCustomer = (
  companyName: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(companyName, cnpj);
};

describe('Testing class IndividualCustomer', () => {
  it('Should have "firstName", "lastName" and "cpf"', () => {
    const sut = createIndivualCustomer('Ivan', 'Ivanovsky', '00000000191');
    expect(sut).toHaveProperty('firstName', 'Ivan');
    expect(sut).toHaveProperty('lastName', 'Ivanovsky');
    expect(sut).toHaveProperty('cpf', '00000000191');
  });

  it('Should have methods to get name and IDN', () => {
    const sut = createIndivualCustomer('Ivan', 'Ivanovsky', '00000000191');
    expect(sut.getName()).toBe('Ivan Ivanovsky');
    expect(sut.getIDN()).toBe('00000000191');
  });
});

describe('Testing class EnterpriseCustomer', () => {
  it('Should have "companyName", and "cnpj"', () => {
    const sut = createEnterpriseCustomer('Apple', '00000000191');
    expect(sut).toHaveProperty('companyName', 'Apple');
    expect(sut).toHaveProperty('cnpj', '00000000191');
  });

  it('Should have methods to get name and IDN', () => {
    const sut = createEnterpriseCustomer('Apple', '00000000191');
    expect(sut.getName()).toBe('Apple');
    expect(sut.getIDN()).toBe('00000000191');
  });
});
