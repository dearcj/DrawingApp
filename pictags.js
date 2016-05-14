/**
 * Created by KURWINDALLAS on 13.04.2016.
 */



var picTags = [
	{
		pic: 'pictags/canvas/board.jpg',
		thumb: 'pictags/thumbs/canvas/board.jpg',
		tag: 'доска',
		fulltags: '',
		title: 'Из серии «Школьные доски»',
		author: 'Сергей Волков',
		materials: '(школьная доска, мел, лак)'
	},
	{
		pic: 'pictags/canvas/brick.jpg',
		thumb: 'pictags/thumbs/canvas/brick.jpg',
		tag: 'кирпич',
		fulltags: '',
		title: '«Окно LXIV»',
		author: 'Иван Чуйков',
		materials: '(дерево, акрил)'
	},
	{
		pic: 'pictags/canvas/canvas.jpg',
		thumb: 'pictags/thumbs/canvas/canvas.jpg',
		tag: 'полотно',
		fulltags: '',
		title: '«Птица»',
		author: 'Олег Ланг',
		materials: '(тик матрацный, мешковина, масло, коллаж)',
		description: 'Художник выбрал для своей картины не обычный светлый холст, но плотную полосатую ткань со смешным названием «тик», которую раньше использовали для обивки мебели и обтягивания матрасов. К этой основе он прикрепил несколько лоскутков грубой мешковины, как будто хотел создать подходящее гнездо для фантастической дикой птицы. Посмотри: цветные полоски «матрасного» фона прекрасно соответствуют ее яркому и пестрому оперению!'
	},
	{
		pic: 'pictags/canvas/cardboard.jpg',
		thumb: 'pictags/thumbs/canvas/cardboard.jpg',
		tag: 'картон',
		fulltags: '',
		title: 'Из серии «Головы героев»',
		author: 'Валерий Кошляков',
		materials: '(гофрокартон, темпера)'
	},
	{
		pic: 'pictags/canvas/metal.jpg',
		thumb: 'pictags/thumbs/canvas/metal.jpg',
		tag: 'метал',
		fulltags: '',
		title: '«Луна и на солнце пятна»',
		author: 'Ирина Затуловская',
		materials: '(металл, масло)'
	},
	{
		pic: 'pictags/canvas/wallpaper.jpg',
		thumb: 'pictags/thumbs/canvas/wallpaper.jpg',
		tag: 'обои',
		fulltags: '',
		title: '«Балет»',
		author: 'Лариса Резун-Звездочетова',
		materials: '(оргалит, акрил, золотая фольга)'
	},
	{
		pic: 'pictags/canvas/wood.jpg',
		thumb: 'pictags/thumbs/canvas/wood.jpg',
		tag: 'дерево',
		fulltags: '',
		title: '«Дверь в мастерскую»',
		author: 'Инал Савченков',
		materials: '(дерево, металл, масло)',
		description: 'На дверях мы привыкли видеть номера квартир или таблички кабинетов, но мало кто использует деревянную дверь как поверхность для рисования. А ведь это готовая доска для картины! У нее есть ровные края и даже несколько рамок, внутри которых можно создавать изображения. Было время, когда художники писали красками преимущественно на дереве, а вход в дом украшали деревянными вывесками, рассказывающими о назначении здания или о его владельце. Что же таится за этой дверью – мастерская художника, наблюдательный пункт астронома или волшебная комната мага?'
	},
	{
		pic: 'pictags/tools/scotch-1.jpg',
		thumb: 'pictags/thumbs/tools/scotch-1.jpg',
		tag: 'скотч',
		fulltags: '',
		title: 'Группа «Кино»',
		author: 'Тимур Новиков',
		materials: '(бумага, акрил)',
		description: 'Громкий звук, ритмичная, зажигательная композиция – играет знаменитая рок-группа! Мультяшные фигурки музыкантов, приплясывающих в модных ярких костюмах, удивительно похожи на россыпь цветных конфетти. Художнику прекрасно удалось передать на картине атмосферу праздника и веселья. Одним из секретов здесь оказывается сияющий фон. Жёлтым цветом можно нарисовать свет, тепло и даже золотой блеск – всё то, что связано с солнцем, а значит, и с хорошим настроением!'
	},
	{
		pic: 'pictags/tools/scotch-2.jpg',
		thumb: 'pictags/thumbs/tools/scotch-2.jpg',
		tag: 'скотч',
		fulltags: '',
		title: '«Аварийная машина»',
		author: 'Леонид Семейко',
		materials: '(холст, масло)',
		description: 'Аварийную машину ты заметишь на дороге раньше, чем любой другой вид транспорта. Ведь покрывающие ее контрастные сигнальные цвета – жёлтый и красный – выделяются из повседневного пейзажа, предупреждая окружающих об опасности. Художник тщательно, с фотографической точностью, воспроизвел на холсте все детали яркого кузова, включая различные номера и надписи. Но разглядывая их, не слишком ли близко мы подошли к машине? Она везет особый груз, и нужно держаться от нее на расстоянии.'
	},
	{
		pic: 'pictags/tools/scotch-3.jpg',
		thumb: 'pictags/thumbs/tools/scotch-3.jpg',
		tag: 'скотч',
		fulltags: '',
		title: '«Аполлон, вдохновляющий эпического поэта»',
		author: 'Группа АЕС',
		materials: '(бумага, шелкография, пастель, сусальное золото, лак)'
	},
	{
		pic: 'pictags/tools/chalk-1.jpg',
		thumb: 'pictags/thumbs/tools/chalk-1.jpg',
		tag: 'мел',
		fulltags: '',
		title: '«Фонарик»',
		author: 'Никита Алексеев',
		materials: '(холст, акрил, пастель)',
		description: 'Всего одна линия и несколько лёгких штрихов вокруг, и вот на картине, как светлячок в темноте, зажигается и горит маленький одинокий фонарик. Художник задумал все чрезвычайно просто и остроумно – он нарисовал свой нехитрый сюжет белым мелком на холсте, который предварительно закрасил черной краской. Светлый рисунок на тёмном фоне действительно всегда смотрится необычно и таинственно, как будто дело происходит ночью. А ведь мы привыкли делать наоборот!'
	},
	{
		pic: 'pictags/tools/chalk-2.jpg',
		thumb: 'pictags/thumbs/tools/chalk-2.jpg',
		tag: 'мел',
		fulltags: '',
		title: 'Из серии «Женская сборная Чечни по прыжкам с парашютом»',
		author: 'Алексей Каллима',
		materials: '(холст, сангина, уголь, мел)'
	},
	{
		pic: 'pictags/tools/grass.jpg',
		thumb: 'pictags/thumbs/tools/grass.jpg',
		tag: 'трава',
		fulltags: '',
		title: '«Сирень»',
		author: 'Александр Якут',
		materials: '(холст, масло)',
		description: 'Буйно разросшийся куст сирени вот-вот скроет от наших глаз машину – как в сказках чудо-дерево прячет главного героя от преследователей. Оглядись по сторонам, природа без устали расцвечивает мир с помощью своих «растительных» кистей и красок – листьев и ветвей, цветов и травы. Она будто бы маскирует всё то, что человек оставляет без присмотра. Возможно, уже совсем скоро мерцающая в сумерках сирена-мигалка превратится в пушистый букет сиреневых цветов!'
	},
	{
		pic: 'pictags/tools/orange.jpg',
		thumb: 'pictags/thumbs/tools/orange.jpg',
		tag: 'апельсин',
		fulltags: '',
		title: '«Мячи Spalding»',
		author: 'Александр Виноградов, Владимир Дубосарский',
		materials: '(холст, масло)'
	},
	{
		pic: 'pictags/tools/denim-1.jpg',
		thumb: 'pictags/thumbs/tools/denim-1.jpg',
		tag: 'джинса',
		fulltags: '',
		title: '«Утро, день, вечер, ночь»',
		author: 'Виктор Пивоваров',
		materials: '(холст на оргалите, масло)'
	},
	{
		pic: 'pictags/tools/denim-2.jpg',
		thumb: 'pictags/thumbs/tools/denim-2.jpg',
		tag: 'джинса',
		fulltags: '',
		title: '«Бассейн»',
		author: 'Александр Дашевский',
		materials: '(холст, масло)'
	},
	{
		pic: 'pictags/tools/denim-3.jpg',
		thumb: 'pictags/thumbs/tools/denim-3.jpg',
		tag: 'джинса',
		fulltags: '',
		title: '«Валик - оружие маляра»',
		author: 'Дамир Муратов',
		materials: '(холст, масло)'
	},
	{
		pic: 'pictags/tools/ketchup.jpg',
		thumb: 'pictags/thumbs/tools/ketchup.jpg',
		tag: 'кетчуп',
		fulltags: '',
		title: '«Буги-Вуги Е-Е»',
		author: 'Олег Котельников',
		materials: '(холст, масло)',
		description: 'Поверьте, когда звучит музыка «буги-вуги», невозможно устоять на месте! Она родилась из быстрой и изобретательной игры на фортепьяно и сразу же полюбилась молодым людям во всем мире – таким, как герой этой картины. Задорного «стилягу» всегда можно узнать по клетчатому пиджаку, яркой рубашке, узким брюкам, тонкому галстуку и странной причёске. Художник изобразил своего героя в свободной манере, как будто сам танцевал во время работы перед холстом. А с ними заплясали и буквы, и даже маленький синтезатор с красным проводом, похожий на выпрыгнувшую из рук бутылку с краской или кетчупом.'
	},
	{
		pic: 'pictags/tools/needle-1.jpg',
		thumb: 'pictags/thumbs/tools/needle-1.jpg',
		tag: 'нитки',
		fulltags: '',
		title: '«Песни дикой косатки»',
		author: 'Татьяна Ахметгалиева',
		materials: '(ткань, нити, вышивка)'
	},
	{
		pic: 'pictags/tools/needle-2.jpg',
		thumb: 'pictags/thumbs/tools/needle-2.jpg',
		tag: 'нитки',
		fulltags: '',
		title: 'Clan Rmmbrnce, из серии «Sub»',
		author: 'Влад Кульков',
		materials: '(холст, акрил, маркер, тушь)'
	},
	{
		pic: 'pictags/tools/pistol.jpg',
		thumb: 'pictags/thumbs/tools/pistol.jpg',
		tag: 'пистолет',
		fulltags: '',
		title: '«Самба»',
		author: 'Евгений Вахтангов',
		materials: '(дерево, картон, масло, оберточная бумага, коллаж)'
	},
	{
		pic: 'pictags/filters/bubble.jpg',
		thumb: 'pictags/thumbs/filters/bubble.jpg',
		tag: 'баббл',
		fulltags: '',
		title: '«I wonder who this artist is» из серии «I am not»',
		author: 'Юрий Альберт',
		materials: '(холст, акрил)'
	},
	{
		pic: 'pictags/filters/diptih.jpg',
		thumb: 'pictags/thumbs/filters/diptih.jpg',
		tag: 'диптих',
		fulltags: '',
		title: '«Urban Angels»',
		author: 'Виталий Комар, Александр Меламид',
		materials: '(металл, масло)'
	},
	{
		pic: 'pictags/filters/distortion.jpg',
		thumb: 'pictags/thumbs/filters/distortion.jpg',
		tag: 'искажение',
		fulltags: '',
		title: '«Русско-американская картина»',
		author: 'Евгений Гороховский',
		materials: '(холст, масло)'
	},
	{
		pic: 'pictags/filters/inversion.jpg',
		thumb: 'pictags/thumbs/filters/inversion.jpg',
		tag: 'инверсия',
		fulltags: '',
		title: '«Энди Уорхол»',
		author: 'Игорь Макаревич',
		materials: '(фанера, папье-маше, акрил, бронзовая краска, позолота)'
	},
	{
		pic: 'pictags/filters/pattern.jpg',
		thumb: 'pictags/thumbs/filters/pattern.jpg',
		tag: 'паттерн',
		fulltags: '',
		title: '«Голубая икра»',
		author: 'Александр Косолапов',
		materials: '(холст, акрил)'
	},
	{
		pic: 'pictags/filters/pixelization.jpg',
		thumb: 'pictags/thumbs/filters/pixelization.jpg',
		tag: 'пикселизация',
		fulltags: '',
		title: 'Из серии «Futurussia»',
		author: 'Наталья Стручкова',
		materials: '(холст, акрил)'
	}
	,
	{
		pic: 'pictags/filters/rama-1.jpg',
		thumb: 'pictags/thumbs/filters/rama-1.jpg',
		tag: 'рамка',
		fulltags: '',
		title: '«Иллюзия исчезновения заполненности»',
		author: 'Иван Плющ, Ирина Дрозд',
		materials: '(дерево, металл, пластик, эмаль)'
	}
	,
	{
		pic: 'pictags/filters/rama-2.jpg',
		thumb: 'pictags/thumbs/filters/rama-2.jpg',
		tag: 'рамка',
		fulltags: '',
		title: '«Big Black Pixel»',
		author: 'Георгий Пузенков',
		materials: '(холст, акрил)'
	},
	{
		pic: 'pictags/filters/polyptih.jpg',
		thumb: 'pictags/thumbs/filters/polyptih.jpg',
		tag: 'полиптих',
		fulltags: '',
		title: '«Человеческое, слишком человеческое»',
		author: 'Григорий Майофис',
		materials: '(холст, масло)'
	}
];

var getImagesByTags = function (tags) {
	var res = [];

	for (var i = 0; i < tags.length; ++i) {
		for (var j = 0; j < picTags.length; ++j) {
			if (tags[i] == picTags[j].tag) {
				res.push(picTags[j]);
			}
		}
	}

/*	while (res.length < 6) {
		var rand = Math.floor(Math.random() * picTags.length);

		for (var k = 0; k < res.length; k++) {
			if (picTags[rand].tag != res[k].tag) {
				if (k == res.length - 1) {
					res.push(picTags[rand]);
				}
			} else {
				break;
			}
		}
	}*/

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