<script lang="ts">
  import photo from "$lib/assets/wypher2-crop.png";

  export let hello: string[];
</script>

<div class="header">
  <p class="name">Davis<br />Forsythe</p>
  <img src={photo} alt="Big art" class="photo" />
  <div class="side">
    <p class="big">Aspiring software developer</p>
    <p class="small">
      <span title={hello[1]}>{hello[0]}</span>! I’m a prospective comp <br />sci student who
      currently has web development experience.
    </p>
  </div>
</div>

<style lang="scss">
  .header {
    margin-top: -50px;
    padding-top: 50px;
    height: 35vw;
    width: 100%;
    background: radial-gradient(
        circle at 7vw 7vw,
        rgba(var(--ac-0-raw), 0.3) 0%,
        rgba(var(--ac-0-raw), 0) 30%
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
      text-shadow: 0 0 0.5vw var(--tx-0);
    }
    .photo {
      width: 38vw;
      height: 100%;
      object-fit: contain;
      object-position: bottom;
      z-index: 1;
      user-select: none;
      pointer-events: none;
      position: relative;
      margin: auto;
      display: block;
      filter: drop-shadow(0 0 20px rgba(var(--ac-0-raw), 0.2));
    }
    .side {
      position: absolute;
      right: 5vw;
      top: calc(8vw + 50px);
      z-index: 0;
      .big {
        width: 33vw;
        font-size: 4.5vw;
        text-shadow: 0px 0px 6px var(--tx-0);
      }
      .small {
        width: 33vw;
        font-size: 2.25vw;
        text-shadow: 0px 0px 4px var(--tx-0);
        margin-top: 1.5vw;
        margin-left: 4vw;
      }
    }
    @media (max-width: 1000px) {
      .side {
        right: 2vw;
        .small {
          font-size: 3vw;
          width: 34vw;
          margin-left: 6vw;
          br {
            display: none;
          }
        }
      }
    }
  }
</style>
