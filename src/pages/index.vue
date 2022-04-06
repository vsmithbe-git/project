<script setup>
import useAuth from '../composable/useAuth';

const {isAuthenticated, user} = useAuth();
</script>

<template>
<div class="grid grid-rows-2 grid-flow-col gap-3">
      <div class="row-span-3 bg-blue-900 text-blue-50 flex items-stretch">
          
      </div>

      <div class="row-span-2 col-span-2 flex flex-col space-y-12 items-center justify-center min-h-screen-nonav">
      <h2 v-if="!isAuthenticated" class="font-extralight text-6xl tracking-tight">Family Tree Creator</h2>
      <h2 v-else class="font-extralight text-6xl tracking-tight">{{user}}</h2>
        <img src="../assets/bghome.png" alt="Hello BG">
      </div>
  </div>

 </template>