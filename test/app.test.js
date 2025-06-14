const { getWelcomeMessage } = require('../src/app');

test('getWelcomeMessage should return "Bem vindo ao pipeline!"', () => {
    expect(getWelcomeMessage()).toBe('Bem vindo ao pipeline!');
});
