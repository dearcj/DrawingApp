/**
 * Created by KURWINDALLAS on 13.04.2016.
 */



var picTags = [
	{
		pic: 'pictags/canvas/board.jpg',
		tag: 'доска',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/brick.jpg',
		tag: 'кирпич',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/canvas.jpg',
		tag: 'полотно',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/cardboard.jpg',
		tag: 'картон',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/metal.jpg',
		tag: 'метал',
		fulltags: ''

	},
	{
		pic: 'pictags/canvas/wallpaper.jpg',
		tag: 'обои',
		fulltags: ''

	},
	{
		pic: 'pictags/canvas/wood.jpg',
		tag: 'дерево',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/bubble.jpg',
		tag: 'пузырек',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih2.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/distortion.jpg',
		tag: 'искажение',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/inv1.jpg',
		tag: 'инверсия',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/pattern.jpg',
		tag: 'паттерн',
		fulltags: ''
	},
	{
		pic: 'pictags/filters/pixelization.jpg',
		tag: 'пикселизация',
		fulltags: ''
	}
	,
	{
		pic: 'pictags/filters/rama.jpg',
		tag: 'рамка',
		fulltags: ''
	}
	,
	{
		pic: 'pictags/filters/rama2.jpg',
		tag: 'рамка',
		fulltags: ''
	}
];

var getImagesByTags = function (tags) {
	var res = [];
	for (var i = 0; i < tags.length; ++i) {
		for (var j = 0; j < picTags.length; ++j) {
			if (tags[i] == picTags[j].tag) {
				//if (tags[i] == picTags[j].tag)
				res.push(picTags[j]);
				console.log(res);
			}
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