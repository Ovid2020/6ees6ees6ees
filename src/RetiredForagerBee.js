import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {

	constructor(age, color, food, job){
		super(age || 40, color || 'grey', food, job || 'gamble');
		this.canFly = false;
	}

	forage(){
		return 'I am too old, let me play cards instead';
	}

	gamble(){
		this.treasureChest.push('treasure');
	}
  // TODO..
};

export default RetiredForagerBee;