function condoName() {
	var numArray = ['83', 'Two One',  '11', 'Two Two', '#1', '88', '3', '295', '8M', '36', '56', '64', '128'];
	var prefixArray = [ '@ ', 'D\'', 'at ', 'i', 'La ', 'Le ', 'The ']
	var descriptorArray = ['Affluence', 'Airstream',  'Alpha', 'Avalon', 'Bella', 'Columnade', 'Nest', 'Oasia', 'Sunrise', 'Dahlia', 'Dairy Farm', 'Dynasty', 'Eden', 'Fanta', 'Fame', 'Gaia', 'Galaxy', 'Garlick', 'Glamour', 'Hollywood', 'Goodluck', 'Thanksgiving', 'Goodwill', 'Regalia', 'Hawaii', 'Idyllic', 'Infinium', 'Intero', 'Jansen', 'Jewel', 'Jool', 'Juluca', 'Viv', 'Dolce Vita', 'Casa', 'Crystal', 'Fiesta', 'Fleur', 'Quinta', 'Suisse', 'Ventura', 'Quest', 'Legend', 'Marina', 'Montrosa', 'Parc', 'Platina', 'Poets', 'Bleu', 'Sayang', 'Skies', 'Smailing', 'Symphony', 'Aberdeen', 'Amore', 'Arc', 'Beacon', 'Boutiq', 'Estrella', 'Florentine', 'Grandiflora', 'Hillier', 'Inspira', 'Infiniti', 'Inflora', 'Interweave', 'Ladyhill', 'Level', 'Linc', 'Linear', 'Modules', 'Scenic', 'Taipan', 'Trillium', 'Tiara', 'Trumps', 'Robin', 'Tivoli', 'Rainbow', 'Kentish', 'Ultra', 'Unique', 'Wang', 'Zedge', 'Zion', 'Zephyr', 'Zenith'];
	var pluralArray = ['z', 's', 'es', 'x', '\'s'];
	var buildingArray = ['Palms', 'Court', 'Villa',  'Plaza', 'Mansion', 'Terrace', 'Point', 'Regency', 'Towers', 'Condo', 'Gardens', 'Gate', 'Bay', 'Glades', 'Ville', 'Park', 'Residences', 'Apartments', 'Heights', 'View', 'By The Park', 'Archipelago', 'Maison', 'Lights', 'Meadows', 'Habitat', 'Boulevard', 'Jade', 'Alcove', 'Abode', 'Lofts', 'Fountains'];
	
	var num = numArray[Math.round(Math.random()*(numArray.length-1))];
	var prefix = prefixArray[Math.round(Math.random()*(prefixArray.length-1))];
	var descriptor = descriptorArray[Math.round(Math.random()*(descriptorArray.length-1))];
	var plural = pluralArray[Math.round(Math.random()*(pluralArray.length-1))];
	var building = buildingArray[Math.round(Math.random()*(buildingArray.length-1))];
	
	document.getElementById('nameResult').innerHTML = num + ' ' + prefix + descriptor + plural + ' ' + building;
	document.getElementById('smallButton').classList.remove("display-none");
}