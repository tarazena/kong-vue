<template>
  <div>
    <Appbar />
    <Catalog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Catalog, Appbar } from '../components'

export default Vue.extend({
  name: 'Home',
  components: {
    Catalog,
    Appbar
  }
})
</script>
