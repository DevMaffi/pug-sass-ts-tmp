<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="container">
    <?php
    the_content(
      sprintf(
        wp_kses(
          __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'template'),
          array(
            'span' => array(
              'class' => array(),
            ),
          )
        ),
        wp_kses_post(get_the_title())
      )
    );

    wp_link_pages(
      array(
        'before' => '<div class="page-links">' . esc_html__('Pages:', 'watches'),
        'after'  => '</div>',
      )
    );
    ?>
  </div>
</article>