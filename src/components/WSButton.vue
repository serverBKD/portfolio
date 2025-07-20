<script setup>
// import { ref } from "vue";
import { LINK_WS } from "@/constants/constants.ts";

const LINKWS = LINK_WS;
</script>


<template>
  <section >
      <a :href="LINKWS"
        target="_blank" rel="noopener noreferrer">
        <span class="ws-btn"></span>
      </a>
  </section>
</template>
