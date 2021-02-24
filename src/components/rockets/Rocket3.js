import Rocket from '../Rocket';

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 10,
      handling: 90,
      speed: 60,
      name: 'rocket-3',
      fireConfiguration: {
        angle: 240,
        x: 115,
        y: 100,
        scale: 0.40,
      }
    });
  }
}