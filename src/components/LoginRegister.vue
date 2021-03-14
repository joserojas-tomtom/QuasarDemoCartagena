<template>
  <div>
  <q-form @submit='submitForm'>
    <q-input
    v-if="tab=='register'"
    class='q-mb-md' outlined v-model="formData.name" label="Name" />
    <q-input class='q-mb-md' outlined v-model="formData.email" label="Email" type='email'/>
    <q-input class='q-mb-md' outlined v-model="formData.password" label="Password" type='password'/>
    <div class='row'>
      <q-space/>
    <q-btn color='primary' :label='tab' type='submit'/>
    </div>
  </q-form>
  <div v-if='message' class="q-py-md q-gutter-sm">
    <q-banner inline-actions rounded :class="message.color">
      {{ message.text }}
      <template v-slot:action>
        <q-btn flat icon='cancel' @click="closeMessage()"/>
      </template>
    </q-banner>
  </div>
  </div>
</template>

<script>
import store from '../router/store'

export default {
  props: ['tab'],
  methods: {
    closeMessage () {
      this.message = undefined
    },
    success () {
      // go back
      this.$router.back()
    },
    error (code) {
      if (code) {
        this.message = {
          text: code.message,
          color: 'bg-red'
        }
      }
    },
    submitForm () {
      if (this.tab === 'login') {
        store.actions.loginUser(this.formData, this.success, this.error)
      } else {
        store.actions.registerUser(this.formData, this.success, this.error)
      }
    }
  },
  data () {
    return {
      message: undefined,
      formData: {
        email: '',
        name: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
