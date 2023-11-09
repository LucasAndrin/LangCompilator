<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex flex-md-row flex-column h-100vh">
    <ul id="sidebar" class="nav nav-pills nav-pills-indigo flex-md-column flex-row gap-2 p-3 fs-6 border-end">
      <li class="nav-item">
        <RouterLink class="nav-link" :to="{ name: 'lexical' }">Lexical Analyzer</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :to="{ name: 'syntactic' }">Syntactic Analyzer</RouterLink>
      </li>
    </ul>
    <main class="container-fluid flex-grow-1">
      <RouterView />
    </main>
  </div>
</template>