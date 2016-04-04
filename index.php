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
	<link rel='stylesheet' id='main-style'  href='<?php echo get_stylesheet_uri(); ?>' type='text/css' media='all' />
    <link rel="stylesheet" href="http://188.227.16.35/wp-content/themes/mmoma/css/style.css">
    <link rel="stylesheet" href="http://188.227.16.35/wp-content/themes/mmoma/css/colorbox.css">
    <link rel="stylesheet" href="http://188.227.16.35/wp-content/themes/mmoma/css/mmoma.css">

    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
    <script src="href="http://188.227.16.35/wp-content/themes/mmoma/js/jquery.colorbox-min.js"></script>

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
    <a href="/"><img src="<?php get_template_directory(); ?>/wp-content/themes/mmoma/img/logo_mmoma.gif"></a>
  </div>

  <div id="wrapper">

        <div id="index-wrapper">
          <div id="sky"></div>
          
          <div id="art"></div>
          
          <ul id="buttons">
            <div class="left-block">
              <li id="button-1" class="hor"><span class="up">Раздел в разработке</span><a></a></li>
              <li id="button-2" class="hor clear"><span class="down">Раздел в разработке</span><a></a></li>  
            </div>
            <div class="middle-block">
              <li id="button-3" class="vert mintop"><a href="#"></a></li>
              <li id="button-4" class="vert mintop"><a href="#"></a></li>
            </div>
            <div class="right-block">
              <li id="button-5" class="hor mintop"><span class="up">Раздел в разработке</span><a></a></li>
              <li id="button-6" class="hor mintop"><span class="down">Раздел в разработке</span><a></a></li>
            </div>

          </ul>

          <ul id="helpers" class="index">
            <li id="helper-1"><span class="down"><p>Дом, в котором живёт наш музей, был построен в 18 веке купцом для своей семьи. А ещё с тех пор в этом доме была мужская гимназия, общежитие милиционеров, больница и много других интересных жильцов. В 1999 году в доме поселился музей. Мы надеемся, что в будущем с искусством всё будет хорошо!</p></span></li>
            <li id="helper-2"><span class="down"><p>У нашего музея есть еще 3 здания - Ермолаевский, 17, Гоголевский, 10, Тверской бульвар, 9</p></span></li>
            <li id="helper-3"><span class="up"><p>Во дворе музея тоже живёт искусство. Тут можно погулять и посмотреть на скульптуры из разных стран. У нас есть свой небольшой кусочек Эйфелевой башни и солнца.</p></span></li>
            <li id="helper-4"><span class="up"><p>А основатель музея Зураб Церетели не только подарил музею свою коллекцию, но и придумал для него необычный вход с приветами из разных эпох.</p></span></li>
            <li id="helper-5"><span class="up"><p>Ты можешь приходить в музей каждый день с 12 до 18:00. У музея всего один выходной в месяц (третий понедельник). В этот день сотрудники наводят в музее порядок, а искусство отдыхает от зрителей.</p></span></li>
            <li id="helper-6"><span><p>Тебе предстоит создать новую современную картину!</p></span></li>
          </ul>

          <ul class="ux-buttons home">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="surface-wrapper" class="hidden">
          <div class="dark-side"></div>

          <div class="surface-canvas">
            <p class="hidden">Выбери, на чём ты хочешь рисовать!</p>

            <ul id="helpers" class="surface">
              <li id="helper-7"><span>Поверхность, которую художник выбирает для картины, называется основа.</span></li>
            </ul>

            <ul class="tools-buttons surface-tb">
              <li class="hidden"><a href="#"><img src="<?php echo $this->baseurl."/templates/".$this->template."/img/tools-buttons-next.png" ?>"></a></li>
            </ul>
          </div>

          <ul class="surfaces">
            <li class="hidden"></li>
            <li class="hidden"></li>
            <li class="hidden"></li>
            <li class="hidden"></li>
            <li class="hidden"></li>
            <li class="hidden"></li>
            <li class="hidden"></li>
          </ul>

          <ul class="ux-buttons">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="tools-wrapper" class="hidden">
          <div class="main-canvas">
            <p class="hidden">Выбери, чем ты хочешь рисовать!</p>
            <button class="back"></button>
            <button class="refresh"></button>

            <ul class="tools-buttons">
              <li class="back-to-surface"><a href="#"><img src="<?php echo $this->baseurl."/templates/".$this->template."/img/tools-buttons-prev.png" ?>"></a></li>
              <li class="send-to-museum"><a href="#">Готово</a></li>
              <li class="add-filter"><a href="#"><img src="<?php echo $this->baseurl."/templates/".$this->template."/img/tools-buttons-next.png" ?>"></a></li>
            </ul>
          </div>

          <div class="dark-side tools"></div>

          <ul class="tools">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <ul class="ux-buttons">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="filters-wrapper" class="hidden">
          <div class="dark-side filters"></div>

          <div class="filters-canvas">
            <p>Добавь немного Волшебства!</p>

            <ul class="tools-buttons filters-tb">
              <li class="back-to-tools"><a href="#"><img src="<?php echo $this->baseurl."/templates/".$this->template."/img/tools-buttons-prev.png" ?>"></a></li>
              <li class="its-done"><a href="#">Готово</a></li>
            </ul>
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

        <div id="sending-wrapper" class="hidden">
        <div class="dark-side sending"></div>

          <ul class="paintings left-side">
            <li><a href="<?php echo $this->baseurl."/templates/".$this->template."/img/main-painting.jpg" ?>" class="group1"><p><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></p></a></li>
            <li><a href="<?php echo $this->baseurl."/templates/".$this->template."/img/main-painting.jpg" ?>" class="group1"><p><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></p></a></li>
            <li><a href="<?php echo $this->baseurl."/templates/".$this->template."/img/main-painting.jpg" ?>" class="group1"><p><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></p></a></li>
          </ul>

          <ul class="paintings right-side">
            <li><a href="<?php echo $this->baseurl."/templates/".$this->template."/img/main-painting.jpg" ?>" class="group1"><p><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></p></a></li>
            <li><a href="<?php echo $this->baseurl."/templates/".$this->template."/img/main-painting.jpg" ?>" class="group1"><p><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></p></a></li>
            <li><a href="<?php echo $this->baseurl."/templates/".$this->template."/img/main-painting.jpg" ?>" class="group1"><p><span class="title">«Луг»</span><span class="author">Геннадий Баранкин</span><span class="materials">(скотч, джинсы, кетчуп)</span></p></a></li>
          </ul>

          <div class="main-painting">
            <p>Мы в музейном фонде живописи.<br>Здесь твоя работа встречает соседей.<br>Осмотрись хорошенько, не стесняйся!</p>
          </div>
          
          <form class="sending-form">
            <div class="work-author">
              <input type="text" onfocus="javascript: if (this.value == 'Введите название своей картины...') this.value = '';" onblur="javascript: if (this.value == '') this.value = 'Введите название своей картины...'" name="image-name" value="Введите название своей картины...">
              <span></span>
              <p>Автор: <a href="#">Казимир Малевич</a></p>
            </div>
            <button name="send" value="Выставить работу" type="submit" class="save-and-send">Выставить<br>работу</button>
            <ul id="helpers">
              <li id="helper-10"><span>У каждой работы есть автор и название. Подумай, как ты хочешь назвать свою картину.</span></li>
            </ul>
          </form>

          <ul class="ux-buttons">
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="museum-wrapper" class="hidden">
          <div class="dark-side museum"></div>

          <div class="museum-button at-the-backyard"><a href="index.html">Во двор</a></div>

          <div class="museum-button new-painting"><a href="#">Новая картина</a></div>

          <div class="main-painting in-museum">
            <div class="social-buttons">
              <span>Рассказать друзьям</span>
              <ul>
                <li class="vk"></li>
                <li class="fb"></li>
              </ul>
            </div>
          </div>
          
          <div class="painting-info">
            <span class="title">Атлеты</span><span class="author">Казимир Малевич</span><span class="materials">(холст, мел, кетчуп, апельсины)</span>
          </div>

        <ul id="helpers">
          <li id="helper-11"><span><p></p></span></li>
          <li id="helper-12"><span><p></p></span></li>
          <li id="helper-13"><span><p></p></span></li>
          <li id="helper-14"><span><p></p></span></li>
          <li id="helper-15"><span><p></p></span></li>
        </ul>

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
        <a href="http://www.samsung.com/ru/home" target="_blank"><img src="<?php echo $this->baseurl."/templates/".$this->template."/img/sumsung-logo.jpg" ?>" width="156" height="34" border="0"></a>
      </li>
      <li>
        <span>Разработано:</span>
        <a href="http://bobaka.ru/" target="_blank"><img src="<?php echo $this->baseurl."/templates/".$this->template."/img/bobaka-logo.jpg" ?>" width="140" height="26" border="0"></a>
      </li>
    </ul>
    
    <ul class="social-icons">
      <li><a href="https://www.facebook.com/MoscowMoMA" target="_blank"><img style="margin-right:17px" border="0" src="<?php echo $this->baseurl."/templates/".$this->template."/img/fb.gif" ?>"></a></li>
      <li><a href="http://vk.com/id77591204" target="_blank"><img style="margin-right:17px" border="0" src="<?php echo $this->baseurl."/templates/".$this->template."/img/vk.gif" ?>"></a></li>
      <li><a href="https://twitter.com/MMOMA" target="_blank"><img style="margin-right:17px" border="0" src="<?php echo $this->baseurl."/templates/".$this->template."/img/tw.gif" ?>></a></li>
      <li><a href="http://instagram.com/mmoma/" target="_blank"><img style="margin-right:17px" border="0" src="<?php echo $this->baseurl."/templates/".$this->template."/img/insg.gif" ?>"></a></li>
      <li><a href="http://www.youtube.com/user/tvmmoma" target="_blank"><img style="margin-right:17px" border="0" src="<?php echo $this->baseurl."/templates/".$this->template."/img/youtube.gif" ?>"></a></li>
      <li><a href="#"><img style="margin-right:12px" border="0" src="<?php echo $this->baseurl."/templates/".$this->template."/img/mail.gif" ?>"></a></li>
    </ul>
    
    <div class="footer_secodn_block">
      <div class="copy_index"><div>© ГБУК г. Москвы «Московский музей современного искусства», 2008 – 2016. Все права защищены. <a class="cont_link" href="/about/departments/">Контакты</a></div></div>
    </div>
  </div>

  <script src="href="http://188.227.16.35/wp-content/themes/mmoma/js/scripts.js"></script>

  <?php wp_footer(); ?>
</body>
</html>