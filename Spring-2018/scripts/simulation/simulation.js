var MAX_POWER = 100000

var simulation_power_values = { // watts
    "oven": [80, 100000, 40, 100], // init power, max_power, growth_rate, shrink_rate
    "fridge": [100, 20000, 50, 100],
    "toaster": [100, 30000, 50, 100],
    "rangehood": [100, 80000, 50, 100],
    "light": [100, 10000, 50, 100]
};



function Appliance(name){ // maybe add power information taken from config
    this.name = name,
    this.running = false,
    this.energy = 0,
    this.min_power = simulation_power_values[name][0],
    this.power = simulation_power_values[name][0],
    this.max_power = simulation_power_values[name][1],
    this.growth_rate = simulation_power_values[name][2],
    this.shrink_rate = simulation_power_values[name][3],
    this.switchState = function() {
        this.running = this.running ? false : true;
    },
    this.update = function() {
        if(this.running){
          if(meal){
	           this.power = Math.min(this.power + this.growth_rate, this.max_power)
             this.energy += this.power*((5*REFRESH_RATE)/3600000);}
             else{
               this.energy = this.energy;            }
             }
      // convert to kwh
         else {
	    this.power = Math.max(this.power - this.shrink_rate, 0);
	   }
    }
    this.get_energy = function() {
        return this.energy;
    },
    this.get_power = function() {
	return this.power;
    },
    this.get_max_power = function() {
	return MAX_POWER;
    },
    this.get_min_power = function() {
	return this.min_power;
    }
}
