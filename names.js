function condoName() {
	
	//Possibilities by category
	var numArray = ['83', 'Two One', 'Thr3e Thr3e', '11', 'Two Two', '#1', '88', '3', '295', '8M', '36', '56', '64', '128', 'Triple'];
	var prefixArray = [ '@ ', 'D\'', 'At ', 'i', 'La ', 'Le ', 'The ', 'De ']
	var descriptorArray = ['Viz', 'Elegance', 'Light', 'Pearl', 'Sail', 'Chez Bright', 'Butterworth', 'Flame Tree', 'Cube', 'Tresalveo', 'Cradel', 'Affluence', 'Airstream',  'Alpha', 'Avalon', 'Bella', 'Columnade', 'Gramercy', 'Pine', 'Nest', 'Oasia', 'Sunrise', 'Dahlia', 'Dairy Farm', 'Dynasty', 'Eden', 'Fanta', 'Fame', 'Gaia', 'Galaxy', 'Garlick', 'Glamour', 'Wood', 'Hollywood', 'Goodluck', 'Thanksgiving', 'Goodwill', 'Regalia', 'Hawaii', 'Idyllic', 'Infinium', 'Intero', 'Jansen', 'Jewel', 'Jool', 'Juluca', 'Viv', 'Dolce Vita', 'Casa', 'Crystal', 'Fiesta', 'Fleur', 'Quinta', 'Suisse', 'Ventura', 'Quest', 'Legend', 'Marina', 'Montrosa', 'Parc', 'Platina', 'Poets', 'Bleu', 'Sayang', 'Skies', 'Smailing', 'Symphony', 'Aberdeen', 'Amore', 'Arc', 'Beacon', 'Boutiq', 'Estrella', 'Florentine', 'Grandiflora', 'Hillier', 'Inspira', 'Infiniti', 'Inflora', 'Interweave', 'Ladyhill', 'Level', 'Linc', 'Linear', 'Modules', 'Scenic', 'Taipan', 'Trillium', 'Tiara', 'Trumps', 'Robin', 'Tivoli', 'Rainbow', 'Kentish', 'Ultra', 'Unique', 'Wang', 'Zedge', 'Zion', 'Zephyr', 'Zenith'];
	var suffixArray = ['z', 's', 'es', 'ers', 'x', '\'s', 'ing'];
	var buildingArray = ['Nclave', 'Blvd', 'Rochelle', 'Casa', 'Palms', 'Court', 'Villa',  'Plaza', 'Mansion', 'Terrace', 'Point', 'Regency', 'Towers', 'Condo', 'Gardens', 'Gate', 'Bay', 'Glades', 'Ville', 'Park', 'Residences', 'Apartments', 'Heights', 'View', 'By The Park', 'Archipelago', 'Maison', 'Lights', 'Meadows', 'Habitat', 'Boulevard', 'Jade', 'Alcove', 'Abode', 'Lofts', 'Fountains', 'House', 'Studio'];
	var hoodArray = ['Paris Ris', 'Orchard', 'Farrer Park', 'Bedok', 'Tampines', 'Woodlands', 'Yishun', 'Ang Mo Kio', 'Toa Payoh', 'Jurong', 'Punggol', 'River Valley', 'Little India', 'Outram', 'Chinatown', 'Hougang', 'Katong', 'Boon Lay', 'Chinese Gardens', 'Serangoon', 'Choa Chu Kang', 'Bukit Timah', 'Holland Village', 'Tanjong Rhu', 'Tanjong Pagar', 'Bukit Panjang', 'Macpherson', 'Geylang', 'Mountbatten', 'Selegie', 'Bras Basah', 'Shenton Way', 'Clementi', 'Tuas', 'Newton', 'Novena', 'Queenstown'];
	
	//Randomly picking one possibility from each category
	var num = numArray[Math.round(Math.random()*(numArray.length-1))];
	var prefix = prefixArray[Math.round(Math.random()*(prefixArray.length-1))];
	var descriptor = descriptorArray[Math.round(Math.random()*(descriptorArray.length-1))];
	var suffix = suffixArray[Math.round(Math.random()*(suffixArray.length-1))];
	var building = buildingArray[Math.round(Math.random()*(buildingArray.length-1))];
	var hood = hoodArray[Math.round(Math.random()*(hoodArray.length-1))];
	
	//Concatenated results
	var list = [
		prefix + descriptor, 
		descriptor + suffix, 
		descriptor + " " + building, 
		num + " " + descriptor,
		num + " " + descriptor + " " + building, 
		num + " " + prefix + descriptor, 
		descriptor + suffix + " " + building, 
		num + " " + descriptor + suffix,
		descriptor + " " + building + " at " + hood,
		num + " " + descriptor + " " + hood,
		descriptor + " " + building + " at " + num + " " + hood,
		hood + " " + descriptor + suffix + " " + building,
		hood + " " + prefix + descriptor + " " + building
	];
	
	//Adding weight 
	var weight = [ 0.03, 0.03, 0.04, 0.04 ,0.05, 0.05, 0.15, 0.12, 0.05 ,0.05, 0.15, 0.12, 0.12];
	
	var generateWeighedList = function(list, weight) {
		var weighedList = [];
		for (var i = 0; i < weight.length; i++) {
			var multiples = weight[i] * 10;	
			for (var j = 0; j < multiples; j++) {
				weighedList.push(list[i]);
			}
		}
		return weighedList;
	};
	
	var weighedList = generateWeighedList(list, weight);
	
	var rand = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	var randNum = rand(0, weighedList.length - 1);
	
	//Output results, add button
	document.getElementById('result').innerHTML = weighedList[randNum];
	document.getElementById('smallButton').classList.remove("display-none");
}



