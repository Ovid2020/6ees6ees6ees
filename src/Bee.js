import Grub from './Grub'

class Bee extends Grub {
	constructor(age, color, food, job){
		super(age || 5, color || 'yellow', food);
		this.job = job || 'Keep on growing';
	}
  // TODO..
};

export default Bee;