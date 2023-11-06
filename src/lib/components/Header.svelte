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
    overflow: hidden;
    background: radial-gradient(
      circle at 7vw 7vw,
      rgba(var(--ac-0-raw), 0.3) 0%,
      rgba(var(--ac-0-raw), 0) 30%
      ),
      var(--bg-0);
    @media (max-width: 700px) {
      height: 120vw;
      margin-top: -15vw;
    }
    p {
      margin: 0;
    }
    .name {
      position: absolute;
      left: 10vw;
      top: calc(8vw + 50px);
      width: fit-content;
      max-width: 100%;
      z-index: 2;
      margin: 0;
      font-size: 10vw;
      text-shadow: 0 0 0.5vw var(--tx-0);
      @media (max-width: 700px) {
        font-size: 26vw;
        text-align: center;
        width: 100vw;
        left: 0;
        text-shadow: 0px 0px 12vw black, 0px 0px 12vw black, 0px 0px 4px var(--tx-0);
        top: calc(8vw + 5vw);
        @media (prefers-color-scheme: light) {
          text-shadow: 0px 0px 6vw rgba(0, 0, 0, 0.2), 0px 0px 6vw rgba(0, 0, 0, 0.2), 0px 0px 4px var(--tx-0);
        }
      }
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
      @media (max-width: 700px) {
        width: 170vw;
        height: calc(100% + 50px);
        bottom: 50px;
        object-fit: contain;
      }
    }
    .side {
      position: absolute;
      right: 5vw;
      top: calc(8vw + 50px);
      z-index: 0;
      max-width: 100%;
      .big {
        width: 33vw;
        font-size: 4.5vw;
        text-shadow: 0px 0px 6px var(--tx-0);
        max-width: 100%;
      }
      .small {
        width: 33vw;
        font-size: 2.25vw;
        text-shadow: 0px 0px 4px var(--tx-0);
        margin-top: 1.5vw;
        margin-left: 4vw;
        max-width: 100%;
      }
      @media (max-width: 1000px) {
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
      @media (max-width: 700px) {
        right: inherit;
        top: calc(65vw + 15vw);
        z-index: 2;
        .big {
          font-size: 12vw;
          text-shadow: 0px 0px 8vw black, 0px 0px 8vw black, 0px 0px 4px var(--tx-0);
          text-align: center;
          @media (prefers-color-scheme: light) {
            text-shadow: 0px 0px 4vw rgba(0, 0, 0, 0.2), 0px 0px 4vw rgba(0, 0, 0, 0.2), 0px 0px 4px var(--tx-0);
          }
        }
        .small {
          font-size: 6vw;
          margin-left: 0;
          margin: auto;
          margin-top: 5vw;
          text-shadow: 0px 0px 4vw black, 0px 0px 4vw black, 0px 0px 4px var(--tx-0);
          max-width: calc(100vw - 20vw);
          @media (prefers-color-scheme: light) {
            text-shadow: 0px 0px 2vw rgba(0, 0, 0, 0.2), 0px 0px 2vw rgba(0, 0, 0, 0.2), 0px 0px 4px var(--tx-0);
          }
        }
        .big, .small {
          width: 100vw;
        }
      }
    }
  }
</style>
