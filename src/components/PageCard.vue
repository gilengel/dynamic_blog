<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="item">
    <div class="tag">{{ msg }}</div>
    <div class="card card-1">
      <div class="inner-border-bottom inner-border-right"></div>
      <div
        class="inner-border-bottom inner-border-right header-middle center-left"
      >
        <ul class="navigation-list">
          <li>Home</li>
          <li>Education</li>
          <li>Experience</li>
        </ul>
      </div>
      <div class="inner-border-bottom center">
        <span class="material-symbols-outlined">menu</span>
      </div>

      <div class="inner-border-right">
        <h2>Projects</h2>
        <ul>
          <li>Chama</li>
          <li>MapMe</li>
        </ul>
      </div>

      <div class="inner-border-right center">
        <svg width="500" height="200" class="speech-bubble">
          <line class="s" x1="0" y1="0" x2="0" y2=" 0" />
          <line class="s" x1="0" y1="0" x2="0" y2="0" />
          <line class="s" x1="0" y1="0" x2="0" y2="0" />
          <line class="s" x1="0" y1="0" x2="0" y2="0" />
          <line class="s" x1="0" y1="0" x2="0" y2="0" />
          <line class="s" x1="0" y1="0" x2="0" y2="0" />
          <line class="s" x1="0" y1="0" x2="0" y2="0" />
        </svg>
      </div>
      <div class="inner-border-right content">
        <div class="main-text">
          <h1>Gil Engel</h1>
          <h2 class="stroke">Software engineer</h2>
          <h2 class="stroke">Architect</h2>
        </div>

        <div class="bg">
          <code> </code>
        </div>
      </div>

      <div class="center">
        <ul class="icon-list">
          <li><span class="icon material-symbols-outlined">map</span></li>
          <li><span class="material-symbols-outlined">school</span></li>
          <li><span class="material-symbols-outlined">mail</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$outer-border-color: rgb(92, 92, 92);
$outer-border-width: 4px;

$inner-border-color: rgb(92, 92, 92);
$inner-border-width: 2px;

$shadow-offset: -2em;

$teal: #96ceb4;
$yellow: #ffeead;
$red: #d9534f;
$orange: rgba(255, 173, 96, 0.5);

$background-color: white;

.item {
  position: absolute;
  left: 5em;
  top: 5em;
  right: 5em;
  bottom: 5em;
}
.card {
  min-height: 1024px;

  border: solid $outer-border-color $outer-border-width;
}

.tag {
  $tag-height: 3em;
  line-height: $tag-height;
  position: absolute;
  top: calc(-#{$tag-height});

  background-color: var(--color-background);
  border: solid $outer-border-color $outer-border-width;
  border-bottom: none;
  padding-left: 1em;
  padding-right: 1em;

  box-sizing: content-box;

  left: 10em;

  text-transform: uppercase;
  z-index: 1;
}

.card-1 {
  //background-color: $background-color;

  display: grid;

  grid-template-columns: 30em auto auto 12em;
  grid-template-rows: 50px auto;

  .header {
    border-bottom: solid $inner-border-color $inner-border-width;
  }

  .header:nth-child(1),
  .content:nth-child(1) {
    border-right: solid $inner-border-color $inner-border-width;
  }

  .header:nth-child(3) {
    border-left: solid $inner-border-color $inner-border-width;
  }

  .inner-border-bottom {
    border-bottom: solid $inner-border-color $inner-border-width;
  }

  .inner-border-right {
    border-right: solid $inner-border-color $inner-border-width;
  }

  .header-middle {
    grid-column-start: 2;
    grid-column-end: 4;
  }
}

@for $i from 1 through 3 {
  .bg-card-#{$i} {
    background-color: darken(white, 5%);
    border: solid $inner-border-color calc($outer-border-width / 2);

    transform: translate(0, $i * -0.75em);
    z-index: -$i;

    left: 5em + $i * 0.2em;
    right: 5em - $i * 0.2em;

    transition: all ease-in-out 0.1s;
  }

  .bg-card-#{$i}::after {
    content: "Content #{$i}";
    line-height: 2em;
    position: absolute;
    top: calc(-2em - #{$inner-border-width});

    background-color: darken(white, 5%);
    border: solid $inner-border-color $inner-border-width;
    border-bottom: none;
    padding-left: 1em;
    padding-right: 1em;

    box-sizing: content-box;

    left: 10em + $i * 8em;
  }

  .bg-card-#{$i}:hover {
    transform: translateY(-0.1em * $i);
  }
}

/*
.speech-bubble {
  background-image: url(speech.svg);
  background-size: 100%;

  padding: 2em;

  width: calc(83.269951mm - 4em);
  height: calc(50.065441mm - 4em);  
}
*/
/*
  .bubble:after {
    content: '';
    width: 0;
    height: 0;
    border-top: 21px solid transparent;
    border-bottom: 21px solid transparent;
    border-right: 21px solid #dddddd;
    position: absolute;
    top: -21px;
    left: 1px;
  }
  */

/*
.card-1::before {
  position: absolute;
  left: $shadow-offset;
  top: $shadow-offset;
  width: 100%;
  height: 100%;

  z-index: -1;

  content: " ";
  border: solid $outer-border-color $outer-border-width;

  transition: all ease-in-out 0.1s;

  background-color: rgb(240, 240, 240);
}
*/
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-left {
  display: flex;
  align-items: center;
}

.content {
  position: relative;
  display: flex;

  .bg {
    color: rgba(0, 0, 0, 0.3);
    width: 500px;
    height: 750px;

    position: absolute;
    bottom: 0;
    right: 0;

    code {
      white-space: pre-line;
      font-size: 1.2em;
    }
  }
}

.main-text {
  transform: rotate(90deg);
  display: block;

  h1 {
    font-size: 6em;
  }

  h2 {
    font-size: 4em;
    margin: 0em;
  }
}

.stroke {
  //-webkit-text-stroke: 2px $orange;

  color: white;
  text-shadow: -1px 0 $red, 0 1px $red, 1px 0 $red, 0 -1px $red;
}

h2 {
  //font-size: 4em;
  font-family: "Heebo", sans-serif;
}

.icon-list {
  list-style: none;
  padding: 0;

  li {
    line-height: 3em;
  }
}

.navigation-list {
  display: flex;
  list-style: none;
  padding: 0;

  padding-left: 1em;

  li {
    padding-right: 1em;
  }
}

.material-symbols-outlined {
  font-size: 2em !important;
}

svg {
  cursor: none;

  line {
    stroke: $outer-border-color;
    stroke-width: $outer-border-width;
    stroke-linecap: round;
  }
}
</style>
