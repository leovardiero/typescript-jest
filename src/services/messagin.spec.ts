import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Testing class Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // sut - System Under Test
    const sut = createSut();
    expect(sut.sendMessage('')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('TEST');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Mensagem enviada:", "TEST"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('TEST');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'TEST');
  });
});
