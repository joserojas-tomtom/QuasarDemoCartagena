<template>
  <div>
  <q-form @submit='submitForm'>
    <q-input
    class='q-mb-md' outlined v-model="formData.name" label="Name" />
    <q-input class='q-mb-md' outlined v-model="formData.email" label="Email" type='email'/>
    <div class='row'>
      <q-space/>
    <q-btn color='primary' label='Registro' type='submit'/>
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
import { Notify } from 'quasar'
import store from '../router/store'

export default {
  methods: {
    closeMessage () {
      this.message = undefined
    },
    success () {
      // go back
      Notify.create('Te hemos enviado un correo electronico. Confirma el registro con el enlace enviado')
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
      store.actions.loginWithEmail(this.formData.email,
        this.formData.name,
        this.success, this.error)
    }
  },
  data () {
    return {
      message: undefined,
      formData: {
        email: '',
        name: ''
      }
    }
  }
}
</script>

<style>

</style>
