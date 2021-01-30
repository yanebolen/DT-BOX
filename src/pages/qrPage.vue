<template>
  <div id="qrPage">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="card" style="border-radius: 0px 0px 15px 15px; border-color: white; width: 100%">
      <div id="logo" style="height: 6rem;">
        <img src="../assets/Logo.svg" alt="DT BOX">
      </div>
    </div>
    <div class="grid">
      <div class="description">
        <h1 style="color: white; text-align: center; font-size: 350%;">Делитесь вашими файлами<br>без сcылок и паролей</h1>
        <ol style="padding-left: 18.5rem; padding-top: 4rem; color: white; font-size: 200%; line-height: 2.5;">
          <li>Откройте приложение DT BOX на телефоне</li>
          <li>Зайдите во вкладку сканирование</li>
          <li>Наведите свой телефон на QR код справа</li>
          <li>Передавайте ваши файлы на это устройство</li>
        </ol>
      </div>
      <div class="qr-code">
        <button type="button" @click="$router.push('/box')">qr-code</button>
      </div>
    </div>
    <h5 style="padding-left: 17rem; padding-top: 7rem; color: white">Готовы попробовать, но нужна помощь?</h5>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  padding-top:6rem;
  /* padding-left: 14rem; */
  /* padding-right: 7rem; */
  display: grid;
  grid-template-columns: 4fr 2fr;
}
#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#qrPage{
  width: 100%;
  height: 100%;
  background: #2C7BE5;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
