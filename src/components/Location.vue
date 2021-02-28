<template>
  <q-icon v-if='visible' :name="iconName" size='1.5em'
                    color='blue-1' rounded
                     @click='sendLocation()'
                    class='q-ml-xs q-mr-xs'/>
</template>
<script>
export default {
  name: 'Location',
  data () {
    return {
      iconName: 'location_off',
      visible: true,
      location: undefined,
      watchId: undefined
    }
  },
  methods: {
    showPosition (position) {
      this.iconName = 'location_on'
      // console.log(position)
      this.location = position
    },
    errorLocation (error) {
      this.iconName = 'location_off'
      console.log(error)
    },
    sendLocation () {
      if (this.location) {
        this.$root.$emit('location-update', this.location)
      }
    }
  },
  mounted () {
    if (navigator.geolocation) {
      // console.log('geolocation OK')
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000
      }
      navigator.geolocation.getCurrentPosition(this.showPosition, this.errorLocation, options)
      this.watchId = navigator.geolocation.watchPosition(this.showPosition, this.errorLocation, options)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  },
  beforeDestroy () {
    navigator.geolocation.clearWatch(this.watchId)
  }
}
</script>
