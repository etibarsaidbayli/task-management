<template>
  <nav class="nav__">
    <router-link to="/createtask">Yeni tapşırıqların yaradılması</router-link>
    <router-link to="/taskslist">Mövcud tapşırıqların siyahısı</router-link>
  </nav>
</template>

<script></script>

<style scoped>
.nav__ {
  padding: 30px 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.nav__ a {
  border: 1px solid green;
  display: inline-block;
  padding: 10px 5px;
  color: rgb(44, 23, 91);
  font-size: 30px;
  font-weight: bold;
}
</style>
