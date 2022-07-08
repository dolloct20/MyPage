<template>
  <!-- <div class="header">
    <div class="logo">
        Mypage
    </div>
    <div class="search-bar">
      <input v-model="searchedText" type="text" placeholder="病歷號/身分證號/床號"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>
    <button type="button" class="notifications">
      <span class="notification-icon"><i class="fa fa-bell"></i></span>
      <span class="badge">3</span>
    </button>
  </div> -->
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
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
    <q-btn-group class="nav-bar" spread>
      <q-btn class="tab" label="PROFILE" icon="fas fa-clipboard-user" @click="LoadData('profile')" />
      <q-btn class="tab" label="CULTURE" icon="fas fa-bacterium" @click="LoadData('culture')"/>
      <q-btn class="tab" label="LAB" icon="fas fa-flask-vial" @click="LoadData('lab')"/>
      <q-btn class="tab" label="SURGERY" icon="fas fa-utensils" @click="LoadData('surgery')"/>
      <q-btn class="tab" label="EXAM" icon="fas fa-x-ray" @click="LoadData('exam')"/>
      <q-btn class="tab" label="VACCINE" icon="fas fa-syringe" @click="LoadData('vaccine')"/>
      <q-btn class="tab" label="HISTORY" icon="fas fa-book-medical" @click="LoadData('history')"/>
    </q-btn-group>
    <!-- <div v-if="profileIsOpen">
      <ProfilePage></ProfilePage>
    </div> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import ProfilePage from 'src/pages/ProfilePage.vue'
import { useStore } from 'stores/labData'

export default defineComponent({
  name: 'MainLayout',
  components: {
    // ProfilePage
  },
  setup () {
    const store = useStore()
    store.getLabList()
    const searchedText = ref('')
    const profileIsOpen = ref(false)
    const LoadData = (tab:string) => {
      if (tab === 'profile') {
        console.log(12345)
        console.log(store.labList)
        profileIsOpen.value = true
      } else if (tab === 'culture') {
        console.log(45678)
      }
    }
    return {
      searchedText,
      profileIsOpen,
      LoadData
    }
  }
})
</script>
<style scoped>
.notifications {
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  border: none;
  border-radius: 50%;
}
/* .fa-bell {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.nav-bar {
  position: relative;
  top: 80px;
  color: rgb(255, 255, 255);
  background-color: rgb(6, 63, 30);
  padding: 10px 0px;
}
.tab:hover {
  border-bottom: 1px solid rgb(233, 218, 11);
  transition: 5s;
}
</style>
