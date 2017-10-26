function condoName() {
	
	//Possibilities by category
	var numArray = ['83', 'two one', 'thr3e thr3e', '11', 'two two', '#1', '88', '3', '295', '8m', '36', '56', '64', '128', 'triple'];
	var prefixArray = [ '@ ', 'd\'', 'i', 'la ', 'le ', 'the ', 'de ']
	var descriptorArray = ['viz', 'elegance', 'light', 'pearl', 'sail', 'chez bright', 'butterworth', 'flame tree', 'cube', 'tresalveo', 'cradel', 'affluence', 'airstream',  'alpha', 'avalon', 'bella', 'columnade', 'gramercy', 'pine', 'nest', 'oasia', 'sunrise', 'dahlia', 'dairy farm', 'dynasty', 'eden', 'fanta', 'fame', 'gaia', 'galaxy', 'garlick', 'glamour', 'wood', 'hollywood', 'goodluck', 'thanksgiving', 'goodwill', 'regalia', 'hawaii', 'idyllic', 'infinium', 'intero', 'jansen', 'jewel', 'jool', 'juluca', 'viv', 'dolce vita', 'casa', 'crystal', 'fiesta', 'fleur', 'quinta', 'suisse', 'ventura', 'quest', 'legend', 'marina', 'montrosa', 'parc', 'platina', 'poets', 'bleu', 'sayang', 'skies', 'smailing', 'symphony', 'aberdeen', 'amore', 'arc', 'beacon', 'boutiq', 'estrella', 'florentine', 'grandiflora', 'hillier', 'inspira', 'infiniti', 'inflora', 'interweave', 'ladyhill', 'level', 'linc', 'linear', 'modules', 'scenic', 'taipan', 'trillium', 'tiara', 'trumps', 'robin', 'tivoli', 'rainbow', 'kentish', 'ultra', 'unique', 'wang', 'zedge', 'zion', 'zephyr', 'zenith'];
	var suffixArray = ['z', 'ers', 'x', '\'s', 'ing', 'ion'];
	var buildingArray = ['nclave', 'blvd', 'rochelle', 'casa', 'palms', 'court', 'villa',  'plaza', 'mansion', 'terrace', 'point', 'regency', 'towers', 'condo', 'gardens', 'gate', 'bay', 'glades', 'ville', 'park', 'residences', 'apartments', 'heights', 'view', 'by the park', 'by the bay', 'archipelago', 'maison', 'lights', 'meadows', 'habitat', 'boulevard', 'jade', 'alcove', 'abode', 'lofts', 'fountains', 'house', 'studio'];
	var hoodArray = ['pasir ris', 'commonwealth', 'braddell', 'orchard', 'farrer park', 'bedok', 'tampines', 'woodlands', 'yishun', 'ang mo kio', 'toa payoh', 'jurong', 'punggol', 'river valley', 'little india', 'outram', 'chinatown', 'hougang', 'katong', 'boon lay', 'chinese gardens', 'serangoon', 'choa chu kang', 'bukit timah', 'holland village', 'tanjong rhu', 'tanjong pagar', 'bukit panjang', 'macpherson', 'geylang', 'mountbatten', 'selegie', 'bras basah', 'shenton way', 'clementi', 'tuas', 'newton', 'novena', 'queenstown'];
	
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



