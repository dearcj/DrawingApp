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
    <link rel="stylesheet" href="http://188.227.16.35/wp-content/themes/mmoma/css/style.css">
    <link rel="stylesheet" href="http://188.227.16.35/wp-content/themes/mmoma/css/colorbox.css">
    <link rel="stylesheet" href="http://188.227.16.35/wp-content/themes/mmoma/css/mmoma.css">

    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
          <script src="http://188.227.16.35/wp-content/themes/mmoma/js/jsmanipulate.min.js"></script>

    <script src="http://188.227.16.35/wp-content/themes/mmoma/js/jquery.colorbox-min.js"></script>
    <script src="http://188.227.16.35/wp-content/themes/mmoma/js/scripts.js"></script>
   <script src="http://188.227.16.35/wp-content/themes/mmoma/Utils.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Canvas/Action.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Canvas/Canvas.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/Brush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/OrangeBrush.js"></script>

      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/Pencil.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/DenimBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/CoalBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/ThreadBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/SmoothBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/PatternBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/PistolBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/CatchupBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/GrassBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/Brushes/ScotchBrush.js"></script>
      <script src="http://188.227.16.35/wp-content/themes/mmoma/test.js" defer></script>


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

<body>
  
  <div class="langs">
    <ul>
      <li><a href="/">Ru</a></li>
      <li><a href="/">En</a></li>
    </ul>
  </div>

  <div class="header">
    <a href="/"><img src="http://188.227.16.35/wp-content/themes/mmoma/img/logo_mmoma.gif"></a>
  </div>

  <div id="wrapper">
        <div id="index-wrapper" class="screens">
          <div id="sky"></div>

          <div id="art"></div>

          <ul id="buttons">
            <div class="left-block">
              <li id="button-1" class="hor"><span class="up">Раздел в разработке</span></li>
              <li id="button-2" class="hor clear"><span class="down">Раздел в разработке</span></li>
            </div>
            <div class="middle-block">
              <li id="button-3" class="vert mintop go-to-surface"><a href="#"></a></li>
              <li id="button-4" class="vert mintop go-to-museum"><a href="#"></a></li>
            </div>
            <div class="right-block">
              <li id="button-5" class="hor mintop"><span class="up">Раздел в разработке</span></li>
              <li id="button-6" class="hor mintop"><span class="down">Раздел в разработке</span></li>
            </div>
          </ul>

          <div id="bottom-elements">
            <div id="dog" class="special"><span><p>Гав! Гав-гав!</p></span></div>
            <div id="momandson" class="special"><span><p>Какое вдохновляющее место! Здесь каждый может почувствовать себя художником, а заодно много всего узнать о современном искусстве!</p></span></div>
            <div id="couple" class="special"><span><p>Выглядит интересно! Как жаль, что сейчас нет времени зайти, но мы обязательно вернемся в другой раз.</p></span></div>
          </div>

          <ul id="helpers" class="index">
            <li id="helper-1"><span class="down"><p>Дом, в котором живёт наш музей, был построен в 18 веке купцом для своей семьи. А ещё с тех пор в этом доме была мужская гимназия, общежитие милиционеров, больница и много других интересных жильцов. В 1999 году в доме поселился музей. Мы надеемся, что в будущем с искусством всё будет хорошо!</p></span></li>
            <li id="helper-2"><span class="down"><p>У нашего музея есть еще 3 здания - Ермолаевский, 17, Гоголевский, 10, Тверской бульвар, 9</p></span></li>
            <li id="helper-3"><span class="up"><p>Во дворе музея тоже живёт искусство. Тут можно погулять и посмотреть на скульптуры из разных стран. У нас есть свой небольшой кусочек Эйфелевой башни и солнца.</p></span></li>
            <li id="helper-4"><span class="up"><p>А основатель музея Зураб Церетели не только подарил музею свою коллекцию, но и придумал для него необычный вход с приветами из разных эпох.</p></span></li>
            <li id="helper-5"><span class="up"><p>Ты можешь приходить в музей каждый день с 12 до 18:00. У музея всего один выходной в месяц (третий понедельник). В этот день сотрудники наводят в музее порядок, а искусство отдыхает от зрителей.</p></span></li>
            <li id="helper-6"><span><p>Тебе предстоит создать новую современную картину!</p></span></li>
            <li id="helper-6s"><span><p>Здесь будут выставлены твои картины</p></span></li>
          </ul>

          <ul class="ux-buttons home">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="surface-wrapper" class="hidden screens">
          <div class="surface-button go-to-home at-the-backyard"></div>

          <div class="dark-side surface"></div>

          <div id="surface-canvas">

            <ul id="helpers" class="surface">
              <li id="helper-7"><span>Поверхность, которую художник выбирает для картины, называется основа.</span></li>
            </ul>

            <p class="hidden">Выбери, на чём ты хочешь рисовать!</p>
          </div>

          <ul class="tools-buttons surface-tb">
            <li class="hidden go-to-tools" id="go-to-tools"><a href="#"></a></li>
          </ul>

          <ul class="surfaces">
            <li class="wood"><p>Дерево</p></li>
            <li class="board"><p>Доска</p></li>
            <li class="canvas"><p>Холст</p></li>
            <li class="brick"><p>Кирпич</p></li>
            <li class="cardboard"><p>Коробка</p></li>
            <li class="wall"><p>Обои</p></li>
            <li class="metal"><p>Металл</p></li>
          </ul>

          <ul class="ux-buttons">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="painting-wrapper" class="hidden screens">
          <ul class="tools-buttons tools-tb">
            <li class="back-to-surface go-to-surface"><a href="#"></a></li>
            <li class="send-to-museum go-to-publication"><a href="#"></a></li>
            <li class="add-filter go-to-filters"><a href="#"></a></li>
          </ul>

          <div class="dark-side tools"></div>

          <ul id="helpers">
            <li id="helper-8">
              <span>Современные художники чем только не рисуют! И углём, и мелом, и соком апельсина, а вместо кисточки иногда используют даже швейную иголку или водяной пистолет.</span>
            </li>
          </ul>

          <canvas style='pointer-events: none;' id="back-canvas" width="750" height="530"></canvas>
          <canvas id="main-canvas" width="750" height="530"></canvas>

          <div class="main-canvas" id="tools-canvas">
            <ul class="interface">
              <li class="back"></li>
              <li class="refresh"></li>
            </ul>

            <p class="hidden">Выбери, чем ты хочешь рисовать!</p>
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
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="filters-wrapper" class="hidden screens">
          <div class="filters-canvas">
            <canvas id="filters-canvas" width="750px" height="530px"></canvas>

            <ul class="tools-buttons filters-tb">
              <li class="go-to-tools back-to-tools"><a href="#"></a></li>
              <li class="its-done go-to-publication"><a href="#"></a></li>
            </ul>

            <div class="dark-side filters"></div>

            <p class="hidden">Добавь немного Волшебства!</p>
          </div>

          <div id="wand">
            <ul id="helpers">
              <li id="helper-9"><span>В таком деле как творчество - не обходится без волшебства. Это подтвердит любой художник.</span></li>
            </ul>
          </div>

          <ul class="ux-buttons">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="publication-wrapper" class="hidden screens">
          <ul class="paintings left-side">
            <a href="#" class="group1"><li><div><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></div></li></a>
          </ul>

          <ul class="paintings right-side">
            <a href="#" class="group1"><li><div><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></div></li></a>
            <a href="#" class="group1"><li><div><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></div></li></a>
          </ul>

          <div id="main-image"><img id="painting-img"></div>

          <div class="dark-side sending"></div>

          <form class="sending-form">
            <div class="work-author">
              <div class="item-field"><p class="input-label">Автор:</p><input type="text" onfocus="javascript: if (this.value == 'Укажите ваше имя') this.value = '';" onblur="javascript: if (this.value == '') this.value = 'Укажите ваше имя'" name="image-name" value="Укажите ваше имя"></div>
              <div class="item-field"><p class="input-label">Название картины:</p><input type="text" onfocus="javascript: if (this.value == 'Напишите название работы') this.value = '';" onblur="javascript: if (this.value == '') this.value = 'Напишите название работы'" name="image-name" value="Напишите название работы"></div>
            </div>
            <button name="send" value="Отправить картину в мой музей" type="submit" class="save-and-send go-to-museum">Отправить<br>картину в<br>мой музей</button>
            <ul id="helpers">
              <li id="helper-10"><span>У каждой работы есть автор и название. Подумай, как ты хочешь назвать свою картину.</span></li>
            </ul>
          </form>

          <ul class="ux-buttons">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="museum-wrapper" class="hidden screens">
          <ul id="helpers">
            <li id="helper-11"><span><p>Освещению в музее уделяется особое внимание</p></span></li>
            <li id="helper-12"><span><p>Стены музея выкрашены в белый цвет</p></span></li>
            <li id="helper-13"><span class="up"><p>Это стул, на котором сидит смотритель</p></span></li>
            <li id="helper-14"><span class="up"><p>Безопасность превыше всего</p></span></li>
            <li id="helper-15"><span class="up"><p>Это объект. Он не всегда стоит на постаменте</p></span></li>
          </ul>

          <div class="museum-button go-to-home at-the-backyard"><a href="#"></a></div>

          <div class="museum-button new-painting"></div>

          <img id="your-painting" class="museum-painting">
          <div class="social-buttons">
            <span>Рассказать друзьям</span>
              <ul>
                <li class="vk"></li>
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
            <li></li>
            <li></li>
          </ul>
        </div>

    </div>

  <div class="podval_new">
    <ul class="logotypes">
      <li>
        <span>Официальный партнёр:</span>
        <a href="http://museum.fondpotanin.ru/ " target="_blank"><img src="http://188.227.16.35/wp-content/themes/mmoma/img/potanin.png" width="70" height="70" border="0"></a>
      </li>
      <li>
        <span>Разработано:</span>
        <a href="http://bobaka.ru/" target="_blank"><img src="http://188.227.16.35/wp-content/themes/mmoma/img/bobaka-logo.jpg" width="140" height="26" border="0"></a>
      </li>
    </ul>

    <ul class="social-icons">
      <li><a href="https://www.facebook.com/MoscowMoMA" target="_blank"><img style="margin-right:17px" border="0" src="http://188.227.16.35/wp-content/themes/mmoma/img/fb.gif"></a></li>
      <li><a href="http://vk.com/id77591204" target="_blank"><img style="margin-right:17px" border="0" src="http://188.227.16.35/wp-content/themes/mmoma/img/vk.gif"></a></li>
      <li><a href="https://twitter.com/MMOMA" target="_blank"><img style="margin-right:17px" border="0" src="http://188.227.16.35/wp-content/themes/mmoma/img/tw.gif"></a></li>
      <li><a href="http://instagram.com/mmoma/" target="_blank"><img style="margin-right:17px" border="0" src="http://188.227.16.35/wp-content/themes/mmoma/img/insg.gif"></a></li>
      <li><a href="http://www.youtube.com/user/tvmmoma" target="_blank"><img style="margin-right:17px" border="0" src="http://188.227.16.35/wp-content/themes/mmoma/img/youtube.gif"></a></li>
      <li><a href="#"><img style="margin-right:12px" border="0" src="http://188.227.16.35/wp-content/themes/mmoma/img/mail.gif"></a></li>
    </ul>
    
    <div class="footer_secodn_block">
      <div class="copy_index"><div>© ГБУК г. Москвы «Московский музей современного искусства», 2008 – 2016. Все права защищены. <a class="cont_link" href="/about/departments/">Контакты</a></div></div>
    </div>
  </div>


  <?php wp_footer(); ?>
</body>
</html>