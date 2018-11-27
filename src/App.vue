<template>
  <v-app>
    <v-content class="pa-0">
      <v-card-title class="px-0 pt-0">
        <v-img src="/cover.jpg" contain>
          <v-container fluid fill-height justify-center align-center>
            <div class="pa-3 display-4 white--text bg-half-transparent text-xs-center hidden-sm-and-down">
              <p class="display-4">北科資工系學會</p>
              <p class="display-2">NTUT CSIE SA</p>
            </div>
          </v-container>
        </v-img>
      </v-card-title>
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <v-card flat tile color="transparent">
            <v-card-text class="display-1 text-xs-center">
              聯絡我們
            </v-card-text>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs6 md3 class="text-xs-center">
                  <v-btn fab flat large @click="openEmail('csie.sa@ntut.edu.tw')">
                    <img style="height: 48px; width: 48px;" src="/icons/mail.png" alt>
                  </v-btn>
                </v-flex>
                <v-flex xs6 md3 class="text-xs-center">
                  <v-btn fab flat large @click="openSite('https://www.facebook.com/ntutcsieFB')">
                    <img style="height: 48px; width: 48px;" src="/icons/facebook.png" alt>
                  </v-btn>
                </v-flex>
                <v-flex xs6 md3 class="text-xs-center">
                  <v-btn fab flat large @click="openSite('https://line.me/R/ti/p/%40vys5662y')">
                    <img style="height: 48px; width: 48px;" src="/icons/line.png" alt>
                  </v-btn>
                </v-flex>
                <v-flex xs6 md3 class="text-xs-center">
                  <message-form></message-form>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-layout column wrap align-center>
                <iframe
                  id="comment-board"
                  v-if="commentBoard.visible"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfBSjFNNepjcdvHuUIZK1cxvHF-Eq8CwMHAewN1GIM0H7QTcg/viewform?embedded=true"
                  width="640"
                  :height="commentBoard.height"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  @load="loadedCommentBoard"
                ></iframe>
                <v-flex xs12>
                  <v-progress-circular
                    v-if="commentBoard.loading"
                    :size="70"
                    :width="7"
                    color="primary"
                    indeterminate
                  ></v-progress-circular>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-actions
          class="grey darken-3 justify-center"
        >
          © NTUT CSIE Student Association {{ getYear() }}
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import MessageForm from '@/components/MessageForm'

export default {
  data () {
    return {
      currentTab: null,
      commentBoard: {
        loading: false,
        visible: false,
        height: 0
      }
    }
  },
  methods: {
    getYear () {
      let d = new Date()
      return d.getFullYear()
    },
    openSite (url) {
      window.open(url, '_blank')
    },
    openEmail (address) {
      window.location.href = 'mailto:' + address
    },
    toggleCommentBoard () {
      const vm = this
      vm.commentBoard.visible = !vm.commentBoard.visible
      vm.commentBoard.loading = vm.commentBoard.visible
      if (!vm.commentBoard.visible) {
        vm.commentBoard.height = 0
      }
    },
    loadedCommentBoard () {
      const vm = this
      vm.commentBoard.loading = false
      vm.commentBoard.height = 759
    }
  },
  components: {
    MessageForm
  }
}
</script>

<style scoped>
.bg-half-transparent {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
