<script>
  import photo from "$lib/assets/wypher2-crop.png";

  export let data;
  let { hello } = data;
</script>

<div class="header">
  <p class="name">Davis<br />Forsythe</p>
  <img src={photo} alt="Big art" class="photo" />
  <div class="side">
    <p class="big">Lorem ipsum dolor sit amet,</p>
    <p class="small">
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Amet volutpat consequat mauris nunc.
    </p>
  </div>
</div>

<div class="page-content">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at hendrerit elit. Aliquam
    ultricies neque sit amet libero faucibus, eget aliquet turpis dictum. Donec eros mi, lacinia non
    erat at, placerat bibendum ipsum. Aenean faucibus ornare molestie. Ut gravida ut sem quis porta.
    Duis ut porta tortor, nec scelerisque erat. Pellentesque varius nunc elementum faucibus
    dignissim. Cras malesuada, nisl ac blandit facilisis, tellus dui sagittis turpis, sed cursus leo
    ipsum eget felis. Aenean lectus diam, lobortis quis ultricies nec, bibendum at justo. Phasellus
    viverra ex urna, in dignissim ante pharetra maximus. Cras at nibh feugiat, pellentesque arcu sit
    amet, consectetur libero. Phasellus imperdiet ac nibh non imperdiet. Aliquam vestibulum vehicula
    accumsan. Morbi porta lobortis sem vel porta.
  </p>
  <p>
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Vestibulum efficitur nisi in sapien imperdiet mollis. Nunc felis metus, volutpat quis odio a,
    ullamcorper aliquet purus. Pellentesque pulvinar est ut lacinia lacinia. Vivamus molestie
    commodo velit ut volutpat. Donec id libero sed magna volutpat eleifend nec et elit. Aliquam
    fermentum, magna semper ultricies pellentesque, ipsum orci ornare orci, nec volutpat turpis
    metus nec ex. Maecenas finibus ex sed ipsum condimentum interdum. Donec nec tempus lorem.
  </p>
  <p>
    Praesent id tellus nisl. Vivamus eu vestibulum enim. Phasellus semper semper bibendum. Donec
    gravida sit amet libero vel pharetra. Vestibulum consequat nibh sed metus ullamcorper, vitae
    interdum ex interdum. Phasellus enim metus, aliquet a commodo a, facilisis eget neque.
    Suspendisse porta risus sit amet euismod tincidunt. Nulla id suscipit ex, consequat sodales
    dolor. Aenean sem mauris, congue ac rutrum in, bibendum a metus. Cras vestibulum id ante a
    ornare. Nulla sit amet sagittis ex. Aliquam dignissim sodales orci, id finibus nibh iaculis sit
    amet. Sed molestie consectetur pulvinar. Maecenas dapibus iaculis diam a tempor. Cras non leo
    leo.
  </p>
  <p>
    In quis nunc eget mi placerat finibus ac ac magna. Nam facilisis, nulla vel molestie imperdiet,
    dui arcu varius orci, posuere euismod leo nisl tempor purus. Quisque ipsum quam, faucibus id
    placerat vitae, posuere id urna. Proin et ultricies nibh. Curabitur malesuada ipsum est, ac
    efficitur mauris molestie ut. Mauris consectetur nisl vitae risus euismod, quis rhoncus dui
    auctor. Proin scelerisque tincidunt ex, ut maximus arcu tincidunt non. Sed tellus odio, cursus
    et magna non, lobortis luctus dui. Etiam placerat accumsan neque, suscipit tincidunt diam
    feugiat convallis. Phasellus purus risus, luctus a purus nec, viverra dapibus odio. Vestibulum
    iaculis, tortor sed euismod hendrerit, eros eros efficitur justo, id pulvinar justo dolor vel
    ex. Cras dapibus, nibh non euismod aliquet, tellus enim ultrices mi, a venenatis nunc ante eu
    leo. Donec ut convallis augue.
  </p>
  <p>
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Sed tristique ante quis neque congue fringilla. Pellentesque id efficitur urna. Aliquam finibus
    rutrum ultrices. Cras cursus est nulla, cursus gravida elit scelerisque a. Praesent erat ligula,
    mollis ut enim a, lobortis aliquam metus. Fusce ornare erat ut eros vestibulum, a dignissim
    dolor bibendum. Suspendisse potenti. Phasellus commodo fringilla felis, id sodales arcu placerat
    sed. Donec sit amet tortor purus. Duis ac massa fermentum, ornare tellus a, molestie arcu.
  </p>
</div>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

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
  }
</style>
