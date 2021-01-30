<template>
  <div class="gridOnBox" >
    <div class="nav">
      <div id="logoOnBox" style="margin: 0 auto; padding-top: 1.5rem">
        <img src="../assets/bigLogo.svg" alt="DT BOX">
      </div>
      <div style="margin: 0 auto; padding-top: 2rem;">
        <button type="button" class="btn btn-primary" style="border-radius: 25px; width: 330px; height: 55px; font-size : 23px;"><img alt="+" src="../assets/plus.svg" style="padding-right: 1.5rem">Добавить файл</button>
      </div>
      <div style="padding-top: 3rem; padding-left: 15%">
        <h2 style="color: #3B506C">Файлы</h2>
      </div>
      <div class="vertical-scroll-wrapper squares">
        <div class="card mb-2" v-for="day in 15" :key="day.id">
          <h4>День</h4>
        </div>

      </div>
      <div style="white-space:nowrap; padding-top: 35%">
        <div style="display:inline-block; padding-left: 10%">
          <h4 style="color: #3B506C">40 Гб <span style="color: #6E84A3">из 50</span></h4>
        </div>
        <div style="display:inline-block; padding-left: 15%">
          <h4 style="color: #2C7BE5">Увеличить</h4>
        </div>
      </div>
      <div style="padding-left: 10%; padding-right: 10%; padding-top: 3%">
        <div class="progress" style="height: 5px">
          <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div style="margin: 0 auto; padding-top: 10%">
        <h5 style="color: #3B506C">Базовый тариф</h5>
      </div>
    </div>

    <div class="storage">
      <div class="input-group" style="padding-left: 5%; padding-right: 30%; padding-top: 2%; height: 90px;">
        <span class="input-group-text" style="border-radius: 25px 0px 0px 25px; border-color:; background-color: #EDF2F9; border-color: #EDF2F9" id="basic-addon1"><img alt="search" src="../assets/search.svg"></span>
        <input style="border-radius: 0px 25px 25px 0px; color:#3B506C; background-color: #EDF2F9; border-color: #EDF2F9;" type="text" class="form-control" placeholder="Поиск" aria-label="search" aria-describedby="basic-addon1">
      </div>
      <div style="padding-left: 5%; padding-right: 5%; padding-top: 3%; height: 85%">
        <div class="card" style="height: 100%; border-radius: 25px; background-color: #EDF2F9; border-color: #EDF2F9;">

        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
.gridOnBox {
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
}
.nav{
  background: #EDF2F9;
  display: flex;
  flex-direction: column;
}
/*сам скролл*/
.vertical-scroll-wrapper {
  /* width: 500px; */
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
}
/* Стилизация объектов внутри скрола */
.vertical-scroll-wrapper > div {
  /* width: 100px; */
   /* height: 10rem; */
}
/* Эта функция скрывает полосу прокрутки */
.vertical-scroll-wrapper::-webkit-scrollbar {
  width: 0;
}
.storage{
  height: 100%;
  background: url('../assets/bird-s-eye-view-shore-break 1.png')
}
</style>
