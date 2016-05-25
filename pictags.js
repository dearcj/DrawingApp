/**
 * Created by KURWINDALLAS on 13.04.2016.
 */



var picTags = [
	{
		pic: 'pictags/canvas/board.jpg',
		thumb: 'pictags/thumbs/canvas/board.jpg',
		tag: 'школьная доска',
		innertag: 'школьная доска',
		title: 'Из серии «Школьные доски»',
		author: 'Сергей Волков',
		year: '2007',
		materials: '(школьная доска, мел, лак)',
		description: 'На школьной доске обычно пишут буквы и цифры, а что если нарисовать на ней мелом целую картину? Нужно только выбрать подходящий сюжет – например, такой как «уроки истории». Когда в древнем Вавилоне люди задумали воздвигнуть небоскрёб, им казалось, что они строят его на века. Но время стёрло с лица земли следы этого колоссального сооружения – так же легко стирают мел с доски после занятий. История учит нас: грандиозные человеческие планы, даже самые заманчивые, – вещь ненадёжная, эфемерная, а иногда опасная!'
	},
	{
		pic: 'pictags/canvas/brick.jpg',
		thumb: 'pictags/thumbs/canvas/brick.jpg',
		tag: 'кирпич',
		innertag: 'кирпич',
		title: '«Окно LXIV»',
		author: 'Иван Чуйков',
		year: '2002',
		materials: '(дерево, акрил)',
		description: 'Случалось ли с тобой такое: ты рисуешь, рисуешь, лист бумаги уже закончился, а мысль всё не остановить? Ты продолжаешь рисовать на столе, а потом и на стене дома. Так ты добираешься до окна, и твоя красочная композиция на стекле полностью преображает знакомый пейзаж! Нарисуй снежинки в новогоднюю ночь, нарисуй яркую весну, которую так ждёшь, нарисуй радугу или экзотических животных в облаках, меняй сюжеты и не бойся экспериментировать! Ведь любая картина – это окно в мир нашего безграничного воображения!'
	},
	{
		pic: 'pictags/canvas/canvas.jpg',
		thumb: 'pictags/thumbs/canvas/canvas.jpg',
		tag: 'холст',
		innertag: 'холст',
		title: '«Птица»',
		author: 'Олег Ланг',
		year: '2003',
		materials: '(тик матрацный, мешковина, масло, коллаж)',
		description: 'Художник выбрал для своей картины не обычный светлый холст, но плотную полосатую ткань со смешным названием «тик», которую раньше использовали для обивки мебели и обтягивания матрасов. К этой основе он прикрепил несколько лоскутков грубой мешковины, как будто хотел создать подходящее гнездо для фантастической дикой птицы. Посмотри: цветные полоски «матрасного» фона прекрасно соответствуют ее яркому и пестрому оперению!'
	},
	{
		pic: 'pictags/canvas/cardboard.jpg',
		thumb: 'pictags/thumbs/canvas/cardboard.jpg',
		tag: 'картон',
		innertag: 'картон',
		title: 'Из серии «Головы героев»',
		author: 'Валерий Кошляков',
		year: '1991',
		materials: '(гофрокартон, темпера)',
		description: 'Картонная коробка сама по себе вещь малопривлекательная, зато располагает к творчеству и даже позволяет путешествовать во времени! К примеру, захотел ты побывать в древнегреческих Афинах, на площади среди прекрасных статуй – стоит только взять в руки краски да пустить картон в дело. Многое, правда, придётся додумывать самому. Ведь образы далёкой античной Греции дошли до нас со многими утратами: за прошедшие века скульптуры лишились своей яркой раскраски и некоторых частей. Вот почему на потрёпанной и заклеенной скотчем коробке голова греческого героя смотрится так выразительно!'
	},
	{
		pic: 'pictags/canvas/metal.jpg',
		thumb: 'pictags/thumbs/canvas/metal.jpg',
		tag: 'металл',
		innertag: 'металл',
		title: '«Луна и на солнце пятна»',
		author: 'Ирина Затуловская',
		year: '1992',
		materials: '(металл, масло)',
		description: 'Металл, какой он – твёрдый, гладкий, холодный? А может быть, ещё опасный, жёсткий, агрессивный? Ведь не случайно из него делают оружие. Но замечал ли ты, что со временем от прикосновений человеческих рук металл «добреет», становится податливее? Затупившиеся, проржавевшие или погнутые металлические предметы в хозяйстве уже не пригодятся. А вот художники прекрасно знают, что с ними делать – например, два старых металлических диска они могут превратить в луну и солнце!'
	},
	{
		pic: 'pictags/canvas/wallpaper.jpg',
		thumb: 'pictags/thumbs/canvas/wallpaper.jpg',
		tag: 'обои',
		innertag: 'обои',
		title: '«Балет»',
		author: 'Лариса Резун-Звездочетова',
		year: '1996',
		materials: '(оргалит, акрил, золотая фольга)',
		description: 'Такой возвышенный сюжет, как классический балет, требует изысканных материалов. Грубый, ржавый металл тут не подойдёт, картон слишком прост, а вот старинные обои с рисунком или золотая фольга, покрытая тонким узором, – то, что надо! Лёгкость, с которой танцовщики двигаются по сцене, можно передать плавными линиями контура и нежными сочетаниями пастельных цветов. Только не стоит увлекаться! Ведь, по словам известного испанского художника Сальвадора Дали, совершенство недостижимо, а безупречная красота может обернуться холодом и скукой.'
	},
	{
		pic: 'pictags/canvas/wood.jpg',
		thumb: 'pictags/thumbs/canvas/wood.jpg',
		tag: 'дерево',
		innertag: 'дерево',
		title: '«Дверь в мастерскую»',
		author: 'Инал Савченков',
		year: '1990-е',
		materials: '(дерево, металл, масло)',
		description: 'На дверях мы привыкли видеть номера квартир или таблички кабинетов, но мало кто использует деревянную дверь как поверхность для рисования. А ведь это готовая доска для картины! У нее есть ровные края и даже несколько рамок, внутри которых можно создавать изображения. Было время, когда художники писали красками преимущественно на дереве, а вход в дом украшали деревянными вывесками, рассказывающими о назначении здания или о его владельце. Что же таится за этой дверью – мастерская художника, наблюдательный пункт астронома или волшебная комната мага?'
	},
	{
		pic: 'pictags/tools/scotch-1.jpg',
		thumb: 'pictags/thumbs/tools/scotch-1.jpg',
		tag: 'скотч',
		innertag: 'скотч-1',
		title: '«Аварийная машина»',
		author: 'Леонид Семейко',
		year: '2001',
		materials: '(холст, масло)',
		description: 'Аварийную машину ты заметишь на дороге раньше, чем любой другой вид транспорта. Ведь покрывающие ее контрастные сигнальные цвета – жёлтый и красный – выделяются из повседневного пейзажа, предупреждая окружающих об опасности. Художник тщательно, с фотографической точностью, воспроизвел на холсте все детали яркого кузова, включая различные номера и надписи. Но разглядывая их, не слишком ли близко мы подошли к машине? Она везет особый груз, и нужно держаться от нее на расстоянии.'
	},
	{
		pic: 'pictags/tools/scotch-2.jpg',
		thumb: 'pictags/thumbs/tools/scotch-2.jpg',
		tag: 'скотч',
		innertag: 'скотч-2',
		title: '«Асса»',
		author: 'Тимур Новиков',
		year: '1987',
		materials: '(бумага, акрил)',
		description: 'Громкий звук, ритмичная, зажигательная композиция – играет знаменитая рок-группа! Мультяшные фигурки музыкантов, приплясывающих в модных ярких костюмах, удивительно похожи на россыпь цветных конфетти. Художнику прекрасно удалось передать на картине атмосферу праздника и веселья. Одним из секретов здесь оказывается сияющий фон. Жёлтым цветом можно нарисовать свет, тепло и даже золотой блеск – всё то, что связано с солнцем, а значит, и с хорошим настроением!'
	},
	{
		pic: 'pictags/tools/scotch-3.jpg',
		thumb: 'pictags/thumbs/tools/scotch-3.jpg',
		tag: 'скотч',
		innertag: 'скотч-3',
		title: '«Аполлон, вдохновляющий эпического поэта»',
		author: 'Группа АЕС',
		year: '1989',
		materials: '(бумага, шелкография, пастель, сусальное золото, лак)',
		description: 'Не так-то просто сразу разобраться, что происходит на этой картине. Ведь она кажется составленной из двух совершенно разных изображений, которые наложены друг на друга. Сначала наше внимание приковано к пёстрым цветным узорам, но постепенно мы начинаем различать чёрный контур и фигуры персонажей. И вот, наконец, мы отгадываем классический сюжет: Аполлон, лучезарный покровитель искусств, восседает в окружении музы Эвтерпы с флейтой в руках, маленьких крылатых «гениев» и вдохновенного поэта. Но согласись, просто разглядывать яркие причудливые орнаменты здесь ничуть не менее увлекательно!'
	},
	{
		pic: 'pictags/tools/chalk-1.jpg',
		thumb: 'pictags/thumbs/tools/chalk-1.jpg',
		tag: 'мел',
		innertag: 'мел',
		title: '«Фонарик»',
		author: 'Никита Алексеев',
		year: '1991',
		materials: '(холст, акрил, пастель)',
		description: 'Всего одна линия и несколько лёгких штрихов вокруг, и вот на картине, как светлячок в темноте, зажигается и горит маленький одинокий фонарик. Художник задумал все чрезвычайно просто и остроумно – он нарисовал свой нехитрый сюжет белым мелком на холсте, который предварительно закрасил черной краской. Светлый рисунок на тёмном фоне действительно всегда смотрится необычно и таинственно, как будто дело происходит ночью. А ведь мы привыкли делать наоборот!'
	},
	{
		pic: 'pictags/tools/chalk-2.jpg',
		thumb: 'pictags/thumbs/tools/chalk-2.jpg',
		tag: 'уголь',
		innertag: 'уголь',
		title: 'Из серии «Женская сборная Чечни по прыжкам с парашютом»',
		author: 'Алексей Каллима',
		year: '2008',
		materials: '(холст, сангина, уголь, мел)',
		description: 'Чёрные силуэты спортсменок и их белоснежные парашюты парят на фоне напряжённо-оранжевого неба. Какая необычная, сдержанная и вместе с тем фантастическая цветовая гамма – как будто перед нами не огромная картина, а старая выцветшая фотография! Художник использовал здесь всего три мелка – древнейшие природные пигменты, которые были доступны ещё людям доисторической эпохи. Сегодня, когда любые художественные материалы можно купить в магазине, а сюжет позаимствовать в телевизоре, важно уметь ограничивать себя, выбирая только то, что действительно необходимо.'
	},
	{
		pic: 'pictags/tools/grass.jpg',
		thumb: 'pictags/thumbs/tools/grass.jpg',
		tag: 'трава',
		innertag: 'трава',

		title: '«Сирень»',
		author: 'Александр Якут',
		year: '2010',
		materials: '(холст, масло)',
		description: 'Буйно разросшийся куст сирени вот-вот скроет от наших глаз машину – как в сказках чудо-дерево прячет главного героя от преследователей. Оглядись по сторонам, природа без устали расцвечивает мир с помощью своих «растительных» кистей и красок – листьев и ветвей, цветов и травы. Она будто бы маскирует всё то, что человек оставляет без присмотра. Возможно, уже совсем скоро мерцающая в сумерках сирена-мигалка превратится в пушистый букет сиреневых цветов!'
	},
	{
		pic: 'pictags/tools/orange.jpg',
		thumb: 'pictags/thumbs/tools/orange.jpg',
		tag: 'апельсин',
		innertag: 'апельсин',
		title: '«Мячи Spalding»',
		author: 'Александр Виноградов, Владимир Дубосарский',
		year: '1997',
		materials: '(холст, масло)',
		description: 'Почти все известные нам цвета можно встретить в природе, а иначе откуда бы мы вообще о них знали? Голубое небо, зелёная трава, красная клубника и оранжевые апельсины… Ой, нет, постойте – это не апельсины, а баскетбольные мячи! Кажется, что маленькая стрекоза с удивлением разглядывает яркие шары, отражающиеся в голубой воде. Что это за странные дрейфующие предметы, каковы они на вкус, сколько их всего – два или четыре? Мы же без труда опознаём спортивный инвентарь: не только его форма, но и цвет служит для нас важной подсказкой.'
	},
	{
		pic: 'pictags/tools/denim-1.jpg',
		thumb: 'pictags/thumbs/tools/denim-1.jpg',
		tag: 'джинсы',
		innertag: 'джинсы-1',
		title: '«Бассейн»',
		author: 'Александр Дашевский',
		year: '2009',
		materials: '(холст, масло)',
		description: 'Замечал ли ты, что некоторые картины по-настоящему захватывают нас – буквально затягивают внутрь? Вот и здесь ты будто бы сам нырнул в огромный прохладный бассейн. Иллюзию погружения в прозрачную воду создаёт голубой цвет. Неоднородный, переливчатый, он меняет свою интенсивность – становится то густым и насыщенным, то светлым и почти прозрачным. Чтобы измерить его глубину, простая линейка не поможет!'
	},
	{
		pic: 'pictags/tools/denim-2.jpg',
		thumb: 'pictags/thumbs/tools/denim-2.jpg',
		tag: 'джинсы',
		innertag: 'джинсы-2',
		title: '«Утро, день, вечер, ночь»',
		author: 'Виктор Пивоваров',
		year: '2002',
		materials: '(холст на оргалите, масло)',
		description: 'Если кто-нибудь спросит тебя: «Какого цвета небо?», ты, наверное, ответишь: «Каждый раз разное!» – и будешь абсолютно прав. Работа Виктора Пивоварова – отличное тому подтверждение. Утреннее небо здесь сизое, словно затянутое серовато-голубой дымкой. Новый день заявляет о себе ясным светло-бирюзовым квадратом. Когда вечереет и солнце садится за горизонт, небо проникается лиловым оттенком. А с наступлением ночи наши окна заливает глубокий синий – цвет индиго. Подумай, какое небо кажется тебе самым необычным и таинственным?'
	},
	{
		pic: 'pictags/tools/denim-3.jpg',
		thumb: 'pictags/thumbs/tools/denim-3.jpg',
		tag: 'джинсы',
		innertag: 'джинсы-3',
		title: '«Валик - оружие маляра»',
		author: 'Дамир Муратов',
		year: '2004',
		materials: '(холст, масло)',
		description: 'О настоящей профессии этого мастера восточных единоборств мы можем легко догадаться по его костюму и «оружию». Приглядись, и ты увидишь синий рабочий комбинезон, высокие сапоги, а вместо длинного меча – малярный валик для покраски стен. Знаешь ли ты, что синие джинсы – самый важный предмет нашего повседневного гардероба – тоже когда-то считались рабочей одеждой? Их шили из той же крепкой ткани, что и паруса кораблей – сначала для матросов, а затем для ковбоев и золотоискателей на Диком Западе. А «фирменный» цвет и название джинсам дал город-порт Генуя, поставлявший всему миру дешёвый синий краситель «индиго».'
	},
	{
		pic: 'pictags/tools/ketchup.jpg',
		thumb: 'pictags/thumbs/tools/ketchup.jpg',
		tag: 'кетчуп',
		innertag: 'кетчуп',
		title: '«Буги-Вуги Е-Е»',
		author: 'Олег Котельников',
		year: '1985',
		materials: '(холст, масло)',
		description: 'Поверьте, когда звучит музыка «буги-вуги», невозможно устоять на месте! Она родилась из быстрой и изобретательной игры на фортепьяно и сразу же полюбилась молодым людям во всем мире – таким, как герой этой картины. Задорного «стилягу» всегда можно узнать по клетчатому пиджаку, яркой рубашке, узким брюкам, тонкому галстуку и странной причёске. Художник изобразил своего героя в свободной манере, как будто сам танцевал во время работы перед холстом. А с ними заплясали и буквы, и даже маленький синтезатор с красным проводом, похожий на выпрыгнувшую из рук бутылку с краской или кетчупом.'
	},
	{
		pic: 'pictags/tools/needle-1.jpg',
		thumb: 'pictags/thumbs/tools/needle-1.jpg',
		tag: 'нитки',
		innertag: 'нитки-1',
		title: 'Clan Rmmbrnce, из серии «Sub»',
		author: 'Влад Кульков',
		year: '2008',
		materials: '(холст, акрил, маркер, тушь)',
		description: 'Знакомо ли тебе такое состояние: в душе творится настоящий сумбур, одолевают какие-то смутные чувства? И невозможно ни с кем поделиться – ведь как рассказать о том, чему нет подходящего названия? Художники подобного сумбура не стесняются – более того, считают его чрезвычайно полезным для творчества. Вот картина, похожая одновременно на огромную чернильную кляксу и на клубок тёмных ниток. Возможно, так художник хотел поделиться с нами своими тайными мыслями, своим настроением? Попробуй распутать этот клубок!'
	},
	{
		pic: 'pictags/tools/needle-2.jpg',
		thumb: 'pictags/thumbs/tools/needle-2.jpg',
		tag: 'нитки',
		innertag: 'нитки-2',
		title: '«Песни дикой косатки»',
		author: 'Татьяна Ахметгалиева',
		year: '2010',
		materials: '(ткань, нити, вышивка)',
		description: 'Знаешь ли ты, что раньше многие интересные истории не записывались, но передавались из уст в уста? Например, вышивая долгими зимними вечерами, девушки рассказывали друг другу сказки и пели песни – история тянулась от первого стежка до последнего узелка. Сегодня мало кто так делает, но память об этом живёт глубоко внутри нас. Вот и на картине, которую вышила художница, цветные нити тянутся и переплетаются точно так же, как цепляются друг за друга наши мысли и слова. Рукоделье требует аккуратности и, как хороший разговор, не терпит суеты.'
	},
	{
		pic: 'pictags/tools/pistol.jpg',
		thumb: 'pictags/thumbs/tools/pistol.jpg',
		tag: 'пистолетик',
		innertag: 'пистолетик',
		title: '«Самба»',
		author: 'Евгений Вахтангов',
		year: '2003',
		materials: '(дерево, картон, масло, оберточная бумага, коллаж)',
		description: 'Самба – не просто самый популярный бразильский танец, но и настоящий «гвоздь программы» знаменитого карнавала в Рио. Его участники наряжаются в немыслимые костюмы, украшенные разноцветными блёстками и перьями, и проходят по улицам города в многолюдном праздничном танцевальном шествии. А что если попробовать нарисовать весёлую самбу? Тебе наверняка понадобятся яркие краски, блестящая фольга, а может, ещё и хлопушка с цветными конфетти. Вот и наш художник использовал всё это вместе да так разошёлся, что раскрасил и картинную раму в придачу!'
	},
	{
		pic: 'pictags/filters/bubble.jpg',
		thumb: 'pictags/thumbs/filters/bubble.jpg',
		tag: 'облачко мыслей',
		innertag: 'облачко мыслей',
		title: '«I wonder who this artist is» из серии «I am not»',
		author: 'Юрий Альберт',
		year: '2005',
		materials: '(холст, акрил)',
		description: 'Стоит только написать поверх изображения какую-нибудь фразу, и – обычно молчаливое – оно будто обретает голос. Например, в комиксах, которые называют «рассказами в картинках», все мысли и слова персонажей появляются внутри забавных белых «облачков». «Любопытно, кто этот художник? Уверен, что не Лихтенштейн», – размышляет о своём создателе морской офицер на картине. А ведь именно американскому художнику Рою Лихтенштейну однажды пришло в голову рисовать увеличенные фрагменты комиксов красками на холсте. Так кто же на этот раз решил потревожить общительных героев?'
	},
	{
		pic: 'pictags/filters/diptih.jpg',
		thumb: 'pictags/thumbs/filters/diptih.jpg',
		tag: 'диптих',
		innertag: 'диптих',
		title: '«Urban Angels»',
		author: 'Виталий Комар, Александр Меламид',
		year: '1990',
		materials: '(металл, масло)',
		description: 'Перед нами – два ангела. Своим изящным обликом они напоминают персонажей с итальянских фресок эпохи Возрождения. Развернувшись в разные стороны, ангелы парят каждый на «своём» металлическом листе. Такие изображения принято называть «диптихами» – они всегда состоят из двух частей, связанных единой темой. Действительно, совершенно невозможно разделить эту музицирующую пару: в то время как ангел слева аккомпанирует на мандолине, тот, что справа, поёт. Да и название здесь – одно на двоих!'
	},
	{
		pic: 'pictags/filters/distortion.jpg',
		thumb: 'pictags/thumbs/filters/distortion.jpg',
		tag: 'искажение',
		innertag: 'искажение',
		title: '«Русско-американская картина»',
		author: 'Евгений Гороховский',
		year: '1991',
		materials: '(холст, масло)',
		description: 'Иногда расспрашиваешь кого-нибудь о том о сём и получаешь в ответ: «Смотря как посмотреть!». Ведь наше мнение, и правда, может меняться в зависимости от выбранного ракурса. Например, в этой картине мужское лицо и железнодорожный пейзаж сначала кажутся странными, искажёнными, словно увиденными в кривом зеркале. Но попробуй взглянуть сверху – и всё станет на свои места. Выбирай свою «точку зрения» – может быть, в один прекрасный день, перевернувшись вниз головой, ты сделаешь множество интересных открытий!'
	},
	{
		pic: 'pictags/filters/inversion.jpg',
		thumb: 'pictags/thumbs/filters/inversion.jpg',
		tag: 'цветовая инверсия',
		innertag: 'цветовая инверсия',
		title: '«Энди Уорхол»',
		author: 'Игорь Макаревич',
		year: '2001',
		materials: '(фанера, папье-маше, акрил, бронзовая краска, позолота)',
		description: 'В раскраски любят играть не только дети, но и художники. Они выбирают определённый сюжет и на его основе создают несколько вариантов – каждый в своей цветовой гамме. Посмотри: жёлтое лицо здесь превращается сначала в синее, а затем в серое, в то время как зелёный фон становится красным – и, наконец, золотым. Изменяя цвет по принципу контраста, художник преображает настроение всей композиции. Задумчивый и грустный, активный и агрессивный, нейтральный и спокойный – какой из оттенков в этой палитре эмоций тебе сейчас ближе?'
	},
	{
		pic: 'pictags/filters/pattern.jpg',
		thumb: 'pictags/thumbs/filters/pattern.jpg',
		tag: 'орнамент',
		innertag: 'орнамент',
		title: '«Голубая икра»',
		author: 'Александр Косолапов',
		year: '1991',
		materials: '(холст, акрил)',
		description: 'Если ты любишь что-то коллекционировать, то знаешь, что коллекция тем ценнее, чем больше в ней разнообразия. Непонятно, зачем собирать совершенно одинаковые вещи! Но художники – народ странный. Картины некоторых из них напоминают витрины магазинов с аккуратными рядами товаров в ярких упаковках. Несмотря на свою простоту, этот художественный приём всегда завораживает. Ведь даже совсем обычный, но повторённый много раз мотив становится частью эффектного орнамента!'
	},
	{
		pic: 'pictags/filters/pixelization.jpg',
		thumb: 'pictags/thumbs/filters/pixelization.jpg',
		tag: 'пикселизация',
		innertag: 'пикселизация',
		title: 'Из серии «Futurussia»',
		author: 'Наталья Стручкова',
		year: '2009',
		materials: '(холст, акрил)',
		description: 'Про будущее ничего нельзя сказать наверняка, хотя, по мнению многих современных художников, оно точно имеет приметы виртуальной реальности. Неслучайно они словно в компьютерной игре составляют свои картины из маленьких рисованных квадратиков-пикселей. А ещё, фантазируя, соединяют разные миры – действительность и вымысел! Как знать, может быть, через много лет заброшенные небоскрёбы Москва-Сити окажутся в центре гигантского муравейника? Всё то, что сейчас кажется нам современным и важным, поглотит сказочное лесное болото – дом волшебной царевны-лягушки.'
	}
	,
	{
		pic: 'pictags/filters/rama-1.jpg',
		thumb: 'pictags/thumbs/filters/rama-1.jpg',
		tag: 'рама',
		innertag: 'рама-1',
		title: '«Иллюзия исчезновения заполненности»',
		author: 'Иван Плющ, Ирина Дрозд',
		year: '2011',
		materials: '(дерево, металл, пластик, эмаль)',
		description: 'Сложи руки наподобие рамочки, прямоугольной или овальной, и оглядись вокруг – так будет легче найти подходящую тему для новой картины. Этот трюк напоминает охоту: интересный художественный сюжет словно дикий зверь – поди-ка его поймай! Вот и в этой необычной «картине» содержимое всё норовит ускользнуть, исчезнуть, оставить вместо себя лишь пустоту. Не стоит этого бояться – пусть только твоя рамка всегда будет наготове, а вдохновение обязательно вернётся.'
	}
	,
	{
		pic: 'pictags/filters/rama-2.jpg',
		thumb: 'pictags/thumbs/filters/rama-2.jpg',
		tag: 'рама',
		innertag: 'рама-2',
		title: '«Big Black Pixel»',
		author: 'Георгий Пузенков',
		year: '2001',
		materials: '(холст, акрил)',
		description: 'Современные художники любят подбирать для своих картин необычное обрамление. То раскрасят раму, то прикрепят к ней какие-нибудь предметы, то вообще используют раму от окна или зеркала, а бывает – поместят свою работу в пустой корпус старого телевизора. Взгляни на эту картину. Её прямоугольное поле ограничивает рамка, которая обычно возникает только на экране компьютера. Нарисованная красками на холсте, она превращает непроницаемый чёрный квадрат в огромный чёрный пиксель!'
	},
	{
		pic: 'pictags/filters/polyptih.jpg',
		thumb: 'pictags/thumbs/filters/polyptih.jpg',
		tag: 'полиптих',
		innertag: 'полиптих',
		title: '«Человеческое, слишком человеческое»',
		author: 'Григорий Майофис',
		year: '2010',
		materials: '(холст, масло)',
		description: 'Если огромный слон не помещается на одном альбомном листе – не страшно, смело добавляй другой! Свои «большие» сюжеты художники часто размещают на нескольких холстах или листах бумаги, нумеруют отдельные части, чтобы они не потерялись, и называют такую работу полиптихом, то есть многосоставной. Размер, форму и положение частей полиптиха ты можешь подбирать на своё усмотрение. Только не забывай, что на такой картине твоему слону должно быть удобно!'
	}
];

var getImagesByTags = function (tags) {
	var res = [];

	for (var i = 0; i < tags.length; ++i) {
		for (var j = 0; j < picTags.length; ++j) {
			if (tags[i] == picTags[j].innertag) {
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