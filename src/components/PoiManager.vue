<template>
<div class="q-ma-md">
  <q-list bordered separator>
    <q-item v-for='(poi, index) in pois' :key='poi.id' class='q-my-xs' >
      <q-item-section>
        <q-item-label overline> {{ poi.name }} </q-item-label>
        <q-item-label caption> {{ poi.address }} </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="delete" color='green'
          @click='removePoi(index)'/></q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>

function renderSinglePoi (poi) {
  console.log('renderSinglePOI')
  console.log(poi)
}

export default {
  name: 'PoiManager',
  data () {
    return {
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },

      contentActiveStyle: {
        backgroundColor: 'white',
        color: 'black'
      },

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: 'white',
        width: '35px',
        opacity: 0.75
      },
      pois: [
        {
          id: 0,
          name: 'poi name',
          address: 'the address',
          category: 'restaurant'
        },
        {
          id: 1,
          name: 'poi name',
          address: 'the address',
          category: 'police station'
        }
      ]
    }
  },
  methods: {
    removePoi (index) {
      this.pois.splice(index, 1)
    }
  },
  mounted () {
    const root = this.$root
    root.$on('render-single-poi', renderSinglePoi)
  }
}
</script>
