		var car = {
			make: 'BMW',
			type: 'Polo',
			color: 'Blue',
			IsTurnedOn: false,
			NumbeOfHeels: 4,
			Seats: [
				'seat 1',
				'seat 2',
				'seat 3',
				'seat 4'
			],
			turnOn: function(){
				this.IsTurnedOn = true;
			},
			fly: function(){
				alert('FLY, HOMIE');
			},
			switchCar: function(isOn) {
				console.log('turn car ' + isOn)
				if (isOn == true){
					this.IsTurnedOn = true;
				} else{
					this.IsTurnedOn = false;
				}
			}
		};

		console.log('hello there friends!')