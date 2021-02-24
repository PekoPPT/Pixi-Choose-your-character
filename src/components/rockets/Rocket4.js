import Rocket from '../Rocket';

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 70,
      handling: 10,
      speed: 90,
      name: 'rocket-4',
      fireConfiguration: {
        angle: 270,
        x: 95,
        y: 130,
        scale: 0.33,
      }
    });
  }
}