import { Persistency } from './persistency';

describe('Testing class Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // sut - System Under Test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Pedido salvo com sucesso!"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
