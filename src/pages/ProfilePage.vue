<template>
    <q-page class="q-pa-md">
        <q-card v-if="profileIsOpen" class="my-card" flat bordered>
        <div v-for="patient in patientInfo" :key="patient.name">
            <q-item>
            <q-item-section avatar>
                <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>{{patient.name}}</q-item-label>
                <q-item-label caption>
                <div><strong>{{patient.id}}</strong></div>
                <div><strong>{{patient.chr_no}}</strong></div>
                </q-item-label>
            </q-item-section>
            </q-item>
            <q-separator />
            <q-card-section horizontal>
            <q-card-section>
                基本資料：
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="col-4">
                <div><strong>生日：</strong>{{patient.birth}}</div>
                <div>年齡：{{patient.age}}歲</div>
                <div>地址：{{patient.address}}</div>
                <div>性別：{{patient.sex === 0 ? "女": "男"}}</div>
            </q-card-section>
            </q-card-section>
            <q-separator horizontal />
            <q-card-section horizontal>
            <q-card-section>
                聯絡方式：
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="col-4">
                {{patient.phone}}
            </q-card-section>
            </q-card-section>
        </div>
        </q-card>
    </q-page>
</template>

<script lang="ts">
import { Patient } from 'components/models'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {},
  props: {
    profileIsOpen: Boolean
  },
  setup () {
    const patientInfo: Patient[] = reactive([
      {
        id: 'A142345',
        name: 'Nick Wang',
        birth: '1994-10-20',
        age: 27,
        phone: '0912345678',
        address: '台北市文山區興隆路三段111號',
        chr_no: 'I12345',
        sex: 0
      }
    ])
    return { patientInfo }
  }
})
</script>
<style>
.my-card {
  width: 100%;
  max-width: 1400px;
}
</style>
