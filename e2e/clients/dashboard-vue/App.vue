<template>
  <dashboard :Viking="Viking" />
</template>

<script>
import Vue from 'vue'
import Viking from '@Viking/core'
import { Dashboard } from '@Viking/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    Viking: () => new Viking(),
  },
}
</script>

<style src="@Viking/core/dist/style.css"></style>
<style src="@Viking/dashboard/dist/style.css"></style>
