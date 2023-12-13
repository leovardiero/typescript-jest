import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    // sut - System Under Test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(100)).toBe(100);
  });

  it('Should have ten percent discount', () => {
    // sut - System Under Test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBe(90);
  });

  it('Should have fifty percent discount', () => {
    // sut - System Under Test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBe(50);
  });
});
