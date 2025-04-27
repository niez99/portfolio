<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <header>
    <img src="<?php echo get_template_directory_uri(); ?>/images/avatar.jpg" alt="Avatar" />
    <h1><?php bloginfo('name'); ?></h1>
    <p>Educator, Lifelong Learner, Passionate about Teaching</p>
  </header>
  <nav class="navbar">
    <div class="container">
      <?php
        wp_nav_menu(array(
          'theme_location' => 'primary',
          'menu_class' => 'navbar-nav',
          'container' => false,
          'link_before' => '<span class="nav-link">',
          'link_after' => '</span>',
        ));
      ?>
    </div>
  </nav>
</body>
</html>
