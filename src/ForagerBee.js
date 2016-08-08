import Bee from './Bee'

class ForagerBee extends Bee{
	constructor(age, color, food, job, canFly){
		super(age || 10, null, null, job || 'find pollen')
		this.canFly = true;
		this.treasureChest = [];
	}

	forage(treasure){
		this.treasureChest.push(treasure);
	}
  // TODO..
};

export default ForagerBee;