<?php /* Template Name: Home */ ?>

<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	    <link rel="stylesheet" href="./wp-content/themes/mmoma/css/style.css">
	    <link rel="stylesheet" href="/css/style.css">


    <link rel="stylesheet" href="./wp-content/themes/mmoma/css/style.css">
    <link rel="stylesheet" href="./wp-content/themes/mmoma/css/colorbox.css">
    <link rel="stylesheet" href="./wp-content/themes/mmoma/css/mmoma.css">

    <script src="//vk.com/js/api/openapi.js" type="text/javascript"></script>
      <script>

            window.fbAsyncInit = function() {
                FB.init({
                    appId      : '590705137751335',
                    xfbml      : true,
                    version    : 'v2.5'
                });
            };

            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>

    <script type="text/javascript">
        VK.init({
            apiId: 5413948
        });
    </script>

      <script src="./wp-content/themes/mmoma/js/soundjs-NEXT.min.js"></script>
   <script src="./wp-content/themes/mmoma/js/ZSound.js"></script>
      <script src="./wp-content/themes/mmoma/pictags.js"></script>

    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
          <script src="./wp-content/themes/mmoma/js/jsmanipulate.min.js"></script>

    <script src="./wp-content/themes/mmoma/js/jquery.colorbox-min.js"></script>
    <script src="./wp-content/themes/mmoma/js/scripts.js"></script>
   <script src="./wp-content/themes/mmoma/Utils.js"></script>
      <script src="./wp-content/themes/mmoma/Canvas/Action.js"></script>
      <script src="./wp-content/themes/mmoma/Canvas/Canvas.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/Brush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/OrangeBrush.js"></script>

      <script src="./wp-content/themes/mmoma/Brushes/Pencil.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/DenimBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/CoalBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/ThreadBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/SmoothBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/PatternBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/PistolBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/CatchupBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/GrassBrush.js"></script>
      <script src="./wp-content/themes/mmoma/Brushes/ScotchBrush.js"></script>
      <script src="./wp-content/themes/mmoma/test.js" defer></script>

      <script src="Brushes/GrassBrush.js"></script>
      <script src="/Brushes/GrassBrush.js"></script>
        <script src="./Brushes/GrassBrush.js"></script>


<script>

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '590705137751335',
                xfbml      : true,
                version    : 'v2.5'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>




    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <?php wp_head(); ?>
</head>

<body id="body">
  
  <div class="langs">
    <ul>
      <li><a href="/">Ru</a></li>
      <li><a href="/">En</a></li>
    </ul>
  </div>

  <div class="header">
    <a href="/"><img src="./wp-content/themes/mmoma/img/logo_mmoma.jpg"></a>
  </div>

  <div id="wrapper">
        <div id="index-wrapper" class="screens">
          <div id="sky"></div>

          <div id="art"></div>

          <ul id="buttons">
            <div class="left-block">
              <li id="button-1" class="hor"></li>
              <li id="button-2" class="hor clear"></li>
            </div>
            <div class="middle-block">
              <li id="button-3" class="vert mintop go-to-surface"><a href="#"></a></li>
              <li id="button-4" class="vert mintop go-to-museum"><a href="#"></a></li>
            </div>
            <div class="right-block">
              <li id="button-5" class="hor mintop"></li>
              <li id="button-6" class="hor mintop"></li>
            </div>
          </ul>

          <div id="bottom-elements">
            <div id="dog" class="special"><span><p>Гав-гав-гав! Гав!</p></span></div>
            <div id="momandson" class="special"><span><p>Какое вдохновляющее место! Здесь каждый может почувствовать себя художником, а заодно много всего узнать о современном искусстве!</p></span></div>
            <div id="couple" class="special"><span><p>Выглядит интересно! Как жаль, что сейчас нет времени зайти, но мы обязательно вернёмся в другой раз.</p></span></div>
          </div>

          <ul id="helpers" class="index">
            <li id="helper-1"><span class="down"><p>Красивый дом, в котором живёт наш музей, стоит в самом центре Москвы, на старинной улице Петровка.<br><br>Он был построен в конце XVIII века известным архитектором Матвеем Казаковым для богатого купца, и с тех пор за ним закрепилось название «дом Губина».<br><br>За прошедшие годы в доме побывало немало интересных «жильцов» – и мужская гимназия, и фотомастерская, и газетная редакция, и даже целый институт физиотерапии. А в 1999 году здесь поселилось современное искусство!</p></span></li>
            <li id="helper-2"><span class="down"><p>В Москве совсем несложно отыскать другие четыре здания, которые также принадлежат нашему музею. Все они расположены недалеко друг от друга в пределах исторического центра города. Так что за один день можно совершить настоящее музейное путешествие, посетив сразу несколько адресов!<br><br>Вот они:<br>Гоголевский бульвар, 10<br>Ермолаевский переулок, 17<br>Тверской бульвар, 9<br>Большая Грузинская улица, 15</p></span></li>
            <li id="helper-3"><span class="up"><p>Двор музея тоже наполнен искусством. В хорошую погоду тут можно побродить среди уличных скульптур, разглядеть их со всех сторон и даже потрогать. А если приходить регулярно, можно заметить, что некоторые из них время от времени меняют свое местоположение!<br><br>Ты можешь увидеть здесь настоящий фрагмент Эйфелевой башни и прикоснуться к «металлическому солнцу»!</p></span></li>
            <li id="helper-4"><span class="up"><p>Начало нашему музею положила коллекция произведений искусства XX века, которую знаменитый художник Зураб Церетели подарил Москве. Именно он стал основателем и директором музея.<br><br>А ещё он придумал для музея необычный вход, издалека привлекающий внимание – бронзовый портал с рельефными изображениями героев изразных эпох. Над всеми ними возвышается Афина в шлеме, греческая богиня мудрости, покровительница наук и искусств.</p></span></li>
            <li id="helper-5"><span class="up"><p>В нашем музее тебя ждут каждый день с 12-00 до 20-00.<br><br>У музея всего один выходной в месяц – третий понедельник.<br><br>В этот день сотрудники наводят везде порядок, а искусство отдыхает от зрителей.Внимание! По четвергам наш музей открывается на час позже, но зато и работает дольше – до 21.00!</p></span></li>
            <li id="helper-6"></li>
            <li id="helper-6s"></li>
          </ul>

          <ul class="ux-buttons home">
            <li id="mute"></li>
            <li class="fullscreen off"></li>
          </ul>
        </div>

        <div id="installation-wrapper" class="hidden screens inside generic">
          <img src="./wp-content/themes/mmoma/img/installation.jpg" class="generic-img">
          <span class="generic-desc">Антон Литвин. Осторожно, дети. 2000</span>
          <div class="generic-text">
            <h1>Инсталляция и объект</h1>
            <p>Пробовал ли ты искать произведения искусства среди самых обычных, повседневных, предметов – на природе, в городе или же в своей собственной комнате?</p><p>Эта игра поможет тебе взглянуть на привычные вещи по-новому, глазами художника. Ведь если хорошенько порыться в ящике с игрушками, а затем немного пофантазировать, можно собрать целую инсталляцию!</p><p>Сейчас этот раздел находится в разработке…</p>
          </div>
          <ul class="generic-nav">
            <li class="media-art generic-prev"></li>
            <li class="performance generic-next"></li>
          </ul>
        </div>

        <div id="performance-wrapper" class="hidden screens inside generic">
          <div class="generic-art">
            <img src="./wp-content/themes/mmoma/img/performance.jpg" class="generic-img">
            <span class="generic-desc">Андрей Бартенев. Инопланетяне. 2004</span>
          </div>
          <div class="generic-text">
            <h1>Перформанс</h1>
            <p>Как ты думаешь, для чего современному художнику может понадобиться необычный костюм – например, светящийся «комбинезон» инопланетянина? Можно ли в нём танцевать, или он предназначен для того, чтобы пугать зрителей в темноте?</p><p>В этой игре ты сможешь примерить на себя самые разные роли и образы, и даже более того – сочинить и исполнить собственный перформанс!</p><p>Сейчас этот раздел находится в разработке…</p>
          </div>
          <ul class="generic-nav">
            <li class="installation generic-prev"></li>
            <li class="interpretation generic-next"></li>
          </ul>
        </div>

        <div id="interpretation-wrapper" class="hidden screens inside generic">
          <img src="./wp-content/themes/mmoma/img/interpretation.jpg" class="generic-img">
          <span class="generic-desc">Ринат Волигамси. На прогулке. Из проекта «Снег». 2013</span>
          <div class="generic-text">
            <h1>Интерпретация</h1>
            <p>Можешь ли ты описать, что происходит на этой картине? На первый взгляд всё просто – семья на прогулке кормит голубей. Но присмотрись повнимательнее, и вместо голубей на снегу ты увидишь маленьких динозавриков! Чем же объяснить такую странную подмену?</p><p>Эта игра научит тебя расшифровывать загадочные послания художников, а также придумывать свои истории!</p><p>Сейчас этот раздел находится в разработке…</p>
          </div>
          <ul class="generic-nav">
            <li class="performance generic-prev"></li>
            <li class="media-art generic-next"></li>
          </ul>
        </div>

        <div id="mediaart-wrapper" class="hidden screens inside generic">
          <img src="./wp-content/themes/mmoma/img/media.gif" class="generic-img">
          <span class="generic-desc">Анастасия Митлянская. Поговори с ней. 2005</span>
          <div class="generic-text">
            <h1>Медиа-арт</h1>
            <p>Знаешь ли ты, что некоторые из твоих фотографий и видеороликов, заснятых на самый обыкновенный телефон, могут оказаться настоящими произведениями цифрового искусства? Что бы это ни было – портрет твоего лучшего друга, удачный снимок домашнего животного, городской или дачный пейзаж – важно выбрать интересный ракурс!</p><p>В этой игре ты сможешь опубликовать свой ролик на «стене» с видеоработами из коллекции музея и посоревноваться с современными художниками!</p><p>Сейчас этот раздел находится в разработке…</p>
          </div>
          <ul class="generic-nav">
            <li class="interpretation generic-prev"></li>
            <li class="installation generic-next"></li>
          </ul>
        </div>

        <div id="surface-wrapper" class="hidden screens inside">
          <div class="surface-button go-to-home at-the-backyard"></div>

          <div class="dark-side surface"></div>

          <ul class="surfaces">
            <li class="wood"><p>Дерево</p></li>
            <li class="board"><p>Доска</p></li>
            <li class="canvas"><p>Холст</p></li>
            <li class="brick"><p>Кирпич</p></li>
            <li class="cardboard"><p>Картон</p></li>
            <li class="wall"><p>Обои</p></li>
            <li class="metal"><p>Металл</p></li>
          </ul>

          <div id="surface-canvas">

            <ul id="helpers" class="surface">
              <li id="helper-7"><span>Поверхность, на которую художник наносит изображение, называется основой. С давних времен для этого служили самые разные материалы: камень и дерево, слоновая кость и специально подготовленная телячья кожа, бумага и листья папируса. А знаешь ли ты, что самую настоящую картину можно нарисовать также на картонной коробке, обоях или даже на школьной доске?</span></li>
            </ul>

            <p class="hidden">Выбери, на чём ты хочешь рисовать!</p>
          </div>

          <ul class="tools-buttons surface-tb">
            <li class="hidden go-to-tools" id="go-to-tools"><a href="#"></a></li>
          </ul>

          <ul class="ux-buttons">
            <li class="mute on"></li>
            <li class="fullscreen off"></li>
          </ul>
        </div>

        <div id="painting-wrapper" class="screens inside">
          <ul class="tools-buttons tools-tb">
            <li class="back-to-surface go-to-surface"><a href="#"></a></li>
            <li class="send-to-museum go-to-publication"><a href="#"></a></li>
            <li class="add-filter go-to-filters"><a href="#"></a></li>
          </ul>

          <div class="dark-side tools"></div>

          <ul id="helpers">
            <li id="helper-8">
              <span>Современные художники постоянно экспериментируют! Создавая свои картины, они используют яркие синтетические краски, а также самые неожиданные инструменты и материалы. Но такой удивительной «палитры» точно нет ни у одного из них!</span>
            </li>
          </ul>
          <p class="hidden">Выбери, чем ты хочешь рисовать!</p>
          <ul id="undo-refresh">
            <li id="undo"></li>
            <li id="refresh"></li>
          </ul>
          <canvas style='pointer-events: none;' id="back-canvas" width="750" height="530"></canvas>
          <canvas id="main-canvas" width="750" height="530"></canvas>
          <canvas style='pointer-events: none;' z-index='-122' id="cursor-canvas" width="750" height="530"></canvas>
          <div class="main-canvas" id="tools-canvas">
          </div>

          <ul class="tools">
            <li id="scotch"><p>Скотч</p>
              <ul>
                <li id="btn-scotch"></li>
                <li id="btn-scotch-1"></li>
                <li id="btn-scotch-2"></li>
              </ul>
            </li>
            <li id="coal"><p>Мел</p>
              <ul>
                <li id="btn-coal-1"></li>
                <li id="btn-coal-2"></li>
              </ul>
            </li>
            <li id="btn-grass"><p>Трава</p></li>
            <li id="btn-orange"><p>Апельсин</p></li>
            <li id="denim"><p>Джинсы</p>
              <ul>
                <li id="btn-denim-1"></li>
                <li id="btn-denim-2"></li>
                <li id="btn-denim-3"></li>
              </ul>
            </li>
            <li id="btn-catchup"><p>Кетчуп</p></li>
            <li id="needle"><p>Нитка</p>
              <ul>
                <li id="btn-needle"></li>
                <li id="btn-thread-1" class="needle-color"></li>
                <li id="btn-thread-2" class="needle-color"></li>
                <li id="btn-thread-3" class="needle-color"></li>
                <li id="btn-thread-4" class="needle-color"></li>
                <li id="btn-thread-5" class="needle-color"></li>
                <li id="btn-thread-6" class="needle-color"></li>
                <li id="btn-thread-7" class="needle-color"></li>
              </ul>
            </li>
            <li id="btn-pistol"><p>Пистолет</p></li>
          </ul>
          <ul class="ux-buttons">
            <li class="mute on"></li>
            <li class="fullscreen off"></li>
          </ul>
        </div>

        <div id="filters-wrapper" class="screens inside">
          <div id="wand">
            <ul id="helpers">
                <li id="helper-9"><span>В таком деле как творчество не обходится без волшебства – это подтвердит любой художник. Главное, вовремя остановиться!</span></li>
            </ul>
          </div>

          <div class="filters-canvas">
            <canvas id="filters-canvas" width="750px" height="530px"></canvas>

            <p class="hidden">Добавь немного волшебства!</p>

            <ul class="tools-buttons filters-tb">
              <li class="go-to-tools back-to-tools"><a href="#"></a></li>
              <li class="its-done go-to-publication"><a href="#"></a></li>
            </ul>

            <div class="dark-side filters"></div>
          </div>

          <ul class="ux-buttons">
            <li class="mute on"></li>
            <li class="fullscreen off"></li>
          </ul>
        </div>

        <div id="publication-wrapper" class="screens inside">
          <ul class="paintings left-side">
            <a href="#" class="group1"><li><div><span class="title"></span><span class="author"></span><span class="materials"></span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title"></span><span class="author"></span><span class="materials"></span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title"></span><span class="author"></span><span class="materials"></span></div></li></a>
          </ul>

          <ul class="paintings right-side">
            <a href="#" class="group1"><li><div><span class="title"></span><span class="author"></span><span class="materials"></span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title"></span><span class="author"></span><span class="materials"></span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title"></span><span class="author"></span><span class="materials"></span></div></li></a>
          </ul>

          <div id="main-image"><img id="painting-img"><p class="hidden">Мы в виртуальном «фонде живописи». Здесь твоя картина встречает соседей – работы самых разных художников из музейной коллекции. Может быть, они чем-то похожи на твою? Осмотрись хорошенько, не стесняйся!</p></div>

          <div class="dark-side sending"></div>

          <form class="sending-form">
            <div class="work-author">
              <div class="item-field"><p class="input-label">Автор:</p><input id='in-author' type="text" placeholder="Укажите ваше имя"></div>
              <div class="item-field"><p class="input-label">Название картины:</p><input id='in-label' type="text" placeholder="Напишите название работы"></div>
            </div>
            <button name="send" value="Отправить картину в мой музей" type="submit" class="save-and-send go-to-museum">Отправить<br>картину в<br>мой музей</button>
            <ul id="helpers">
              <li id="helper-10"><span>У каждого произведения искусства есть автор и название. Подумай, как ты назовёшь свою картину? Кстати, название «Без названия» тоже подойдет – оно оставляет простор для фантазии, поэтому современные художники его очень любят.</span></li>
            </ul>
          </form>

          <ul class="ux-buttons">
            <li class="mute on"></li>
            <li class="fullscreen off"></li>
          </ul>
        </div>

        <div id="museum-wrapper" class="screens inside">
          <ul id="helpers">
            <li id="helper-11"><span><p>Картина должна быть хорошо видна, поэтому для освещения экспонатов в музее используют специальные лампы. Свет – важный элемент любой выставки, он помогает создать подходящее настроение.</p></span></li>
            <li id="helper-12"><span><p>Пустые поверхности стен в музее служат фоном для экспонатов, позволяют нашим глазам отдыхать, а мыслям переключаться. Картины современных художников часто вешают на стены, выкрашенные в нейтральный, белый цвет – их словно помещают внутрь «белого куба», где ничто не отвлекает внимание.</p></span></li>
            <li id="helper-13"><span class="up"><p>Это стул смотрителя, который в течение всего дня следит за порядком на выставке. Не обижайся, если смотритель попросит тебя не трогать экспонаты. Искусство – вещь хрупкая и требует бережного отношения.</p></span></li>
            <li id="helper-14"><span class="up"><p>Современное искусство любит загадывать загадки. Как ты думаешь, это музейный экспонат или обыкновенный огнетушитель?</p></span></li>
            <li id="helper-15"><span class="up"><p>Скульптуры и трехмерные объекты часто размещают на специальных подставках разной высоты. Они называются «подиумами» и предназначены для того, чтобы было удобно всё разглядывать.</p></span></li>
          </ul>

          <div class="museum-button go-to-home at-the-backyard"><a href="#"></a></div>

          <img id="your-painting" class="museum-painting" src="">

          <p>Здесь может появиться твоя новая картина</p>

          <div class="museum-button new-painting go-to-surface"></div>

          <div class="social-buttons">
            <span>Рассказать друзьям</span>
              <ul>
                <li id='post-vk' class="vk"></li>
                <li id='post-fb' class="fb"></li>
              </ul>
          </div>

          <div class="dark-side museum"></div>

          <div class="painting-info">
            <span id="painting-title" class="title"></span>
            <span id="painting-author" class="author"></span>
            <span id="painting-materials" class="materials"></span>
          </div>

          <ul class="ux-buttons">
            <li class="mute on"></li>
            <li class="fullscreen off"></li>
          </ul>
        </div>
  </div>

  <div class="podval_new">
    <ul class="logotypes">
      <li>
        <span>Официальный партнёр:</span>
        <a href="http://museum.fondpotanin.ru/ " target="_blank"><img src="./wp-content/themes/mmoma/img/potanin.png" width="70" height="70" border="0"></a>
      </li>
      <li>
        <span>Разработано:</span>
        <a href="http://bobaka.ru/" target="_blank"><img src="./wp-content/themes/mmoma/img/bobaka-logo.jpg" width="140" height="26" border="0"></a>
      </li>
    </ul>

    <ul class="social-icons">
      <li><a href="https://www.facebook.com/MoscowMoMA" target="_blank"><img style="margin-right:17px" border="0" src="./wp-content/themes/mmoma/img/fb.gif"></a></li>
      <li><a href="http://vk.com/id77591204" target="_blank"><img style="margin-right:17px" border="0" src="./wp-content/themes/mmoma/img/vk.gif"></a></li>
      <li><a href="https://twitter.com/MMOMA" target="_blank"><img style="margin-right:17px" border="0" src="./wp-content/themes/mmoma/img/tw.gif"></a></li>
      <li><a href="http://instagram.com/mmoma/" target="_blank"><img style="margin-right:17px" border="0" src="./wp-content/themes/mmoma/img/insg.gif"></a></li>
      <li><a href="http://www.youtube.com/user/tvmmoma" target="_blank"><img style="margin-right:17px" border="0" src="./wp-content/themes/mmoma/img/youtube.gif"></a></li>
      <li><a href="#"><img style="margin-right:12px" border="0" src="./wp-content/themes/mmoma/img/mail.gif"></a></li>
    </ul>
    
    <div class="footer_secodn_block">
      <div class="copy_index"><div>© ГБУК г. Москвы «Московский музей современного искусства», 2008 – 2016. Все права защищены. <a class="cont_link" href="/about/departments/">Контакты</a></div></div>
    </div>
  </div>
  <?php wp_footer(); ?>
</body>
</html>