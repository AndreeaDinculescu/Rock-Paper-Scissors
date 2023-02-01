/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GameModel = require('./GameModel');
const GameView = require('./GameView');

describe('GameView', () => {
  it('displays 4 buttons', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    expect(document.querySelectorAll('button').length).toBe(4);
  });
  
  it('selects rock', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-rock')
    button.click();

    expect(document.querySelector('#current-move').textContent).toBe('rock');
  });

  it('selects paper', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-paper')
    button.click();

    expect(document.querySelector('#current-move').textContent).toBe('paper');
  });

  it('selects scissors', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-scissors')
    button.click();

    expect(document.querySelector('#current-move').textContent).toBe('scissors');
  });

  it('should get the game result', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-rock')
    button.click();

    model.getRandomMove = () => 'paper'

    expect(model.getResult()).toBe('lose');

    const playButton = document.querySelector('#play')
    playButton.click();

    expect(document.querySelector('#result').textContent).toBe('You lost')
  });

  // it('should get the game result', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const model = new GameModel();
  //   const view = new GameView(model);

  //   const button = document.querySelector('#choose-rock')
  //   button.click();

  //   model.getRandomMove = () => 'paper'

  //   expect(model.getResult()).toBe('win');

  //   const playButton = document.querySelector('#play')
  //   playButton.click();

  //   expect(document.querySelector('#result').textContent).toBe('You won')
  // });
});