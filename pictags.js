/**
 * Created by KURWINDALLAS on 13.04.2016.
 */


var picTags = [
	{
		pic: 'pictags/canvas/board.jpg',
		tag: '�����',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/brick.jpg',
		tag: '������',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/canvas.jpg',
		tag: '�������',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/cardboard.jpg',
		tag: '������',
		fulltags: ''
	},
	{
		pic: 'pictags/canvas/metal.jpg',
		tag: '�����',
		fulltags: ''

	},
	{
		pic: 'pictags/canvas/wallpaper.jpg',
		tag: '����',
		fulltags: ''

	},
	{
		pic: 'pictags/canvas/wood.jpg',
		tag: '������',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/bubble.jpg',
		tag: '�������',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih.jpg',
		tag: '������',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/diptih2.jpg',
		tag: '������',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/distortion.jpg',
		tag: '���������',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/inv1.jpg',
		tag: '��������',
		fulltags: ''

	},
	{
		pic: 'pictags/filters/pattern.jpg',
		tag: '�������',
		fulltags: ''
	},
	{
		pic: 'pictags/filters/pixelization.jpg',
		tag: '������������',
		fulltags: ''
	}
	,
	{
		pic: 'pictags/filters/rama.jpg',
		tag: '�����',
		fulltags: ''
	}
	,
	{
		pic: 'pictags/filters/rama2.jpg',
		tag: '�����',
		fulltags: ''
	}
];

getImagesByTags = function (tags) {
	var res = [];
	for (var i = 0; i < tags.length; ++i) {
		var x = tags[i];
		for (var j = 0; j < picTags.length; ++j) {
			var y = picTags[j];
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