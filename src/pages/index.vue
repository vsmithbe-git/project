<script setup>
import useAuth from '../composable/useAuth';

const {isAuthenticated, user} = useAuth();
</script>

<template>
<div class="flex flex-col space-y-12 items-center justify-center min-h-screen-nonav">
  <h2 v-if="!isAuthenticated" class="font-extralight text-6xl tracking-tight">Welcome</h2>
  <h2 v-else class="font-extralight text-6xl tracking-tight">Welcome {{user}}</h2>
    <img src="../assets/bgindex.png" alt="Hello BG">
  </div>
 </template>