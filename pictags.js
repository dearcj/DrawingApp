/**
 * Created by KURWINDALLAS on 13.04.2016.
 */



var picTags = [
	{
		pic: relPath + 'pictags/canvas/board.jpg',
		tag: 'доска',
		fulltags: ''
	},
	{
		pic: relPath + 'pictags/canvas/brick.jpg',
		tag: 'кирпич',
		fulltags: ''
	},
	{
		pic: relPath + 'pictags/canvas/canvas.jpg',
		tag: 'полотно',
		fulltags: ''
	},
	{
		pic: relPath + 'pictags/canvas/cardboard.jpg',
		tag: 'картон',
		fulltags: ''
	},
	{
		pic: relPath + 'pictags/canvas/metal.jpg',
		tag: 'метал',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/canvas/wallpaper.jpg',
		tag: 'обои',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/canvas/wood.jpg',
		tag: 'дерево',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/filters/bubble.jpg',
		tag: 'пузырек',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/filters/diptih.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/filters/diptih2.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/filters/distortion.jpg',
		tag: 'искажение',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/filters/inv1.jpg',
		tag: 'инверсия',
		fulltags: ''

	},
	{
		pic: relPath + 'pictags/filters/pattern.jpg',
		tag: 'паттерн',
		fulltags: ''
	},
	{
		pic: relPath + 'pictags/filters/pixelization.jpg',
		tag: 'пикселизация',
		fulltags: ''
	}
	,
	{
		pic: relPath + 'pictags/filters/rama.jpg',
		tag: 'рамка',
		fulltags: ''
	}
	,
	{
		pic: relPath + 'pictags/filters/rama2.jpg',
		tag: 'рамка',
		fulltags: ''
	}
];

getImagesByTags = function (tags) {
	var res = [];
	for (var i = 0; i < tags.length; ++i) {
		var x = tags[i];
		for (var j = 0; j < picTags.length; ++j) {
			var y = picTags[j];
			//откомментиь и можно будет для одной картинки делать несколько тегов типа tag: 'рамка, диптих',
			//if (picTags[j].tag.indexOf(tags[i]) >= 0)

			if (tags[i] == picTags[j].tag)
			res.push(picTags[j]);
		}
	}

	return shuffle(res);
}


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}