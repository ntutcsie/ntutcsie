<template>
  <v-dialog v-model="dialog" max-width="640" max-height="759">
    <v-btn slot="activator" fab flat large>
      <img style="height: 48px; width: 48px;" src="/icons/message.png" alt>
    </v-btn>
    <v-card class="pa-3">
      <v-card-text class="headline text-xs-center">
        留下訊息給我們
      </v-card-text>
      <v-card-text>
        <v-text-field color="primary" v-model="name" label="名字" :rules="[nameRequired]" @blur="name = ''"></v-text-field>
        <v-text-field color="primary" v-model="email" label="信箱" :rules="[emailRequired]" @blur="email = ''"></v-text-field>
        <v-textarea color="primary" v-model="message" label="訊息" :rules="[messageRequired]" @blur="message = ''" auto-grow rows="3"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="sendForm">送出</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="successfulDialog" max-width="300" height="200">
      <v-card>
        <v-card-text class="headline text-xs-center">
          <v-icon color="success" size="36">done</v-icon>送出成功！
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="failedDialog" max-width="300" height="200">
      <v-card>
        <v-card-text class="headline text-xs-center">
          <v-icon color="error" size="36">warning</v-icon>送出失敗！
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      successfulDialog: false,
      failedDialog: false,
      name: null,
      email: null,
      message: null
    }
  },
  watch: {
    dialog () {
      const vm = this
      if (!vm.dialog) {
        vm.resetForm()
      }
    }
  },
  computed: {
    nameRequired () {
      return this.name !== '' || '必填欄位'
    },
    emailRequired () {
      return this.email !== '' || '必填欄位'
    },
    messageRequired () {
      return this.message !== '' || '必填欄位'
    }
  },
  methods: {
    resetForm () {
      const vm = this
      vm.name = null
      vm.email = null
      vm.message = null
    },
    sendForm () {
      const vm = this
      // eslint-disable-next-line no-undef
      $.ajax({
        url:
          'https://docs.google.com/forms/d/e/1FAIpQLSfBSjFNNepjcdvHuUIZK1cxvHF-Eq8CwMHAewN1GIM0H7QTcg/formResponse',
        type: 'POST',
        data: {
          'entry.893261622': vm.name,
          'entry.889652266': vm.email,
          'entry.618087132': vm.message
        },
        cache: false,
        crossDomain: true,
        complete: (jqXHR, textStatus) => {
          vm.dialog = false
          vm.resetForm()
          switch (jqXHR.status) {
            case 0:
            case 200:
              vm.successfulDialog = true
              break
            default:
              vm.failedDialog = true
          }
        }
      })
    }
  }
}
</script>
