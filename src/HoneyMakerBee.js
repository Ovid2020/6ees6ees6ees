import Bee from './Bee'

class HoneyMakerBee extends Bee {
	constructor(age, color, food, job){
		super(age || 10, color, food, job || 'make honey');
		this.honeyPot = 0;
	}

	makeHoney(){
		this.honeyPot++;
	}

	giveHoney(){
		this.honeyPot--;
	}
  // TODO..
};

export default HoneyMakerBee;