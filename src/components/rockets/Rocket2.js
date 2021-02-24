import Rocket from '../Rocket';

export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket2',
      acceleration: 80,
      handling: 50,
      speed: 10,
      name: 'rocket-2',
      fireConfiguration: {
        angle: 205,
        x: 290,
        y: 250,
        scale: 1,
      }
    });
  }
}