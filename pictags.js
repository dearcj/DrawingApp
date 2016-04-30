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
		pic: 'pictags/tools/scotch-1.jpg',
		tag: 'скотч',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/scotch-2.jpg',
		tag: 'скотч',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/scotch-3.jpg',
		tag: 'скотч',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/chalk-1.jpg',
		tag: 'мел',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/chalk-2.jpg',
		tag: 'мел',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/grass.jpg',
		tag: 'трава',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/orange.jpg',
		tag: 'апельсин',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/denim-1.jpg',
		tag: 'деним',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/denim-2.jpg',
		tag: 'деним',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/denim-3.jpg',
		tag: 'деним',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/ketchup.jpg',
		tag: 'кетчуп',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/needle-1.jpg',
		tag: 'нитки',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/needle-2.jpg',
		tag: 'нитки',
		fulltags: ''

	},
	{
		pic: 'pictags/tools/pistol.jpg',
		tag: 'пистолет',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/bubble.jpg',
		tag: 'пузырек',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih-1.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih-2.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih-3.jpg',
		tag: 'диптих',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/distortion.jpg',
		tag: 'искажение',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/inversion-1.jpg',
		tag: 'инверсия',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/inversion-2.jpg',
		tag: 'инверсия',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/inversion-3.jpg',
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
		pic: 'pictags/filters/rama-1.jpg',
		tag: 'рамка',
		fulltags: ''
	}
	,
	{
		pic: 'pictags/filters/rama-2.jpg',
		tag: 'рамка',
		fulltags: ''
	}
];

var getImagesByTags = function (tags) {
	var res = [];
	for (var i = 0; i < tags.length; ++i) {
		for (var j = 0; j < picTags.length; j++) {
			if (tags[i] == picTags[j].tag) {
				res.push(picTags[j]);
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