<template>

<q-layout view="lHh Lpr fFf">
  <q-header >
      <q-toolbar>
        <q-btn
          class='absolute-right q-ma-md'
          to='/'
          label='Go back'
          flat
          dense
          round
          icon="map"
          aria-label="map"
        />
      </q-toolbar>
    </q-header>
<q-page-container>
  <q-page class=' flex-center q-pa-md'>
  <q-card>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="login" label="Login" />
      <q-tab name="register" label="Register" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="login">
        <login-register tab = 'login'/>
      </q-tab-panel>

      <q-tab-panel name="register">
       <login-register tab='register'/>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</q-page>
</q-page-container>

</q-layout>
</template>
<script>

export default {

  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    'login-register': require('components/LoginRegister.vue').default
  }
}
</script>
