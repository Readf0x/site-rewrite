<script>
  import photo from "$lib/assets/wypher2-crop.png";

  export let data;
  let { hello } = data;
</script>

<template>
  <div class="header">
    <p class="name">Davis<br>Forsythe</p>
    <img src="{photo}" alt="Big art" class="photo" draggable="false">
    <div class="side">
      <p class="big">Lorem ipsum dolor sit amet,</p>
      <p class="small">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc.</p>
    </div>
  </div>
  <p class="placeholder">Nulla et ea duis et ex reprehenderit enim amet commodo ad cillum dolor magna tempor. Mollit et adipisicing minim sunt in reprehenderit duis incididunt Lorem magna. Ea sit ea ad proident nulla consectetur commodo anim veniam. Irure reprehenderit cupidatat magna do cillum in cupidatat. Ipsum qui ut incididunt nisi reprehenderit velit. Duis nulla sit voluptate adipisicing. Aute in reprehenderit incididunt ipsum ut. Deserunt excepteur esse duis commodo aliquip amet occaecat magna. Amet anim sint nisi nisi nisi aute dolore sit ullamco fugiat Lorem ea. Dolore incididunt cupidatat do dolore adipisicing cillum dolore nostrud amet. Culpa dolore elit deserunt veniam do ea quis irure officia id. Ullamco ex magna laboris laboris. Laboris minim in mollit ut nostrud irure elit adipisicing ipsum labore aliqua. Est consectetur duis ullamco duis fugiat ad ex ullamco velit cupidatat culpa. Non irure in incididunt qui duis proident. Et ad et fugiat qui ut esse ullamco excepteur sit. Tempor aliquip dolore nostrud culpa enim consequat. Proident elit excepteur ut nostrud aliqua nostrud exercitation in adipisicing ullamco consequat. Cupidatat eu exercitation amet fugiat laborum tempor dolor. Sunt in id fugiat ad id in non minim esse sunt esse officia.</p>
</template>

<style lang="scss">
  .placeholder {
    font-size: 30px;
    width: 66vw;
    margin: auto;
    margin-top: 1vw;
  }
  .header {
    margin-top: -50px;
    padding-top: 50px;
    height: 35vw;
    width: 100%;
    background: radial-gradient(
      circle at 7vw 7vw,
      rgba(129, 120, 238, 0.3) 0%,
      rgba(129, 120, 238, 0) 30%
    ),
    var(--bg-0);
    p {
      margin: 0;
    }
    overflow: hidden;
    .name {
      position: absolute;
      left: 10vw;
      top: calc(8vw + 50px);
      width: fit-content;
      z-index: 2;
      margin: 0;
      font-size: 10vw;
      text-shadow: 0 0 0.5vw var(--text-0);
    }
    .photo {
      width: 38vw;
      height: 100%;
      object-fit: contain;
      object-position: bottom;
      z-index: 1;
      user-select: none;
      pointer-events: none;
      margin: auto;
      padding-right: 5vw;
      display: block;
      filter: drop-shadow(0 0 20px rgba(129, 120, 238, 0.2));
    }
    .side {
      position: absolute;
      right: 5vw;
      top: calc(8vw + 50px);
      z-index: 0;
      .big {
        width: 33vw;
        font-size: 4.5vw;
        text-shadow: 0px 0px 6px var(--text-0);
      }
      .small {
        width: 33vw;
        font-size: 2.25vw;
        text-shadow: 0px 0px 4px var(--text-0);
        margin-top: 1.5vw;
        margin-left: 4vw;
      }
    }
  }
</style>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>
