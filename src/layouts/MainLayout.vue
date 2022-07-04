<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          MyPAGE
        </q-toolbar-title>
          <q-input class="q-pt-md" color="grey-3" outlined bottom-slots dense v-model="searchedText" placeholder="病歷號/身分證號">
            <template v-slot:append>
              <q-icon v-if="searchedText !== ''" name="close" @click="searchedText = ''" class="cursor-pointer" />
              <q-icon color="grey-3" name="search" />
            </template>
          </q-input>
          <q-btn dense round flat icon="notifications" class="q-ma-md">
            <q-badge floating color="red">10</q-badge>
          </q-btn>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md">
      <q-btn-group spread>
        <q-btn label="PROFILE" icon="fas fa-clipboard-user" @click="LoadData('profile')" />
        <q-btn label="CULTURE" icon="fas fa-bacterium" @click="LoadData('culture')"/>
        <q-btn label="LAB" icon="fas fa-flask-vial" @click="LoadData('lab')"/>
        <q-btn label="SURGERY" icon="fas fa-utensils" @click="LoadData('surgery')"/>
        <q-btn label="EXAM" icon="fas fa-x-ray" @click="LoadData('exam')"/>
        <q-btn label="VACCINE" icon="fas fa-syringe" @click="LoadData('vaccine')"/>
        <q-btn label="HISTORY" icon="fas fa-book-medical" @click="LoadData('history')"/>
      </q-btn-group>
    </div>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const searchedText = ref('')
    const profileIsOpen = ref<boolean>(false)
    const LoadData = (tab:string) => {
      if (tab === 'profile') {
        console.log(12345)
        profileIsOpen.value = true
      } else if (tab === 'culture') {
        console.log(45678)
      }
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      searchedText,
      profileIsOpen,
      LoadData,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
