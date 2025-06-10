<script lang="ts">
  import { goto } from "$app/navigation";
  import { SectionHeadline, Button, ExperienceTable } from "$components";
  import image from "$assets/about-me.jpeg";

  function onclick(){
    goto("/#contact-form")
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>
        Hi, I’m Zane — a Full-Stack developer and designer with a passion for
        creating fast, functional, and visually compelling websites. I’ve spent
        the past 3+ years building and refining digital experiences that not
        only look great but convert users into customers.
      </p>
      <p>
        With a foundation in HTML, SCSS, JavaScript, and Svelte, I build
        responsive, mobile-first interfaces that are smooth, interactive, and
        easy to maintain. I also bring a strong design eye and a love for clean,
        reusable code—whether I’m animating with GSAP, working in a Bootstrap
        environment, or setting up modern stacks with Vite.
      </p>
      <p>
        When I'm not coding, I'm usually in the ocean — surfing, exploring, or
        working on creative side projects that blend tech, freedom, and
        community.
      </p>
        <Button className="mt-m" {onclick}>Tell me about your porject</Button>
    </div>
  </div>
  <ExperienceTable />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
