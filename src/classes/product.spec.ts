import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Testing class Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have properties "name" and "price"', () => {
    // sut - System Under Test
    const sut = createSut('Product Test', 49.9);
    expect(sut).toHaveProperty('name', 'Product Test');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
