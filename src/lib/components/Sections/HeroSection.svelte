<script lang="ts">
    import { goto } from '$app/navigation';
  import {Button} from '$components';

  function onclick(){
    goto('/#contact-form')
    console.log('clicked')
  }
</script>

<section class="hero-section default-margin">
<h3>Hello I'm Zane</h3>
<div class="underscore mb-m"></div>
<h1 class="">I'm a Full-Stack developer crafing intuitive and user-friendly</h1>
<h1 class="dark-grey mb-m">web experiences.</h1>
<Button {onclick}>Let's Talk</Button>
</section>



<style>
  .hero-section {
    padding-top: 60px;
  }
</style>
