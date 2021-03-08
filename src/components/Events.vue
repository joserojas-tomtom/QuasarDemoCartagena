<template>
<div>
  <q-page-sticky position="bottom-right" :offset="[9, 9]">
  <q-fab ref='fab' padding='sm' color="primary" icon="layers" direction="up">
    <q-fab-action color="secondary" @click="onClick" icon="home_repair_service" />
    <q-fab-action color="secondary" @click="onClick" icon="campaign" />
    <q-fab-action color="secondary" @click="onClick" icon="saved_search" />
    <q-fab-action color="secondary" @click="onClick" icon="shopping_bag" />
  </q-fab>
  </q-page-sticky>
</div>
</template>

<script>

export default {
  name: 'Events',
  props: ['city'],
  data () {
    return {}
  },
  mounted () {},
  beforeDestroy () {},
  methods: {
    close: function () {
      console.log('closing events FAB')
      this.$refs.fab.hide()
    },
    onClick () {}
  }
}
</script>
