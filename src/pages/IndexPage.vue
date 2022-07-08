<template>
    <div class="q-pa-md">
      <q-table
        title="Patient Lists"
        :rows="store.labList"
        :columns="columns"
        :pagination="pagination"
        :filter="filter"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
      <q-separator vertical inset />
    </div>
    <q-btn @click="test">
      test
    </q-btn>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
</template>

<script lang="ts">
import { Todo, Meta, Colunms } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'stores/labData'

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  props: {
    // labList: Object
  },
  setup (props) {
    const store = useStore()
    const filter = ref('')
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ])
    const meta = ref<Meta>({
      totalCount: 1200
    })
    const columns: Colunms[] = reactive([
      {
        name: 'name',
        required: true,
        label: '姓名',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true,
        style: 'width: 100px',
        headerStyle: 'width: 500px'
      },
      { name: 'chr_no', align: 'center', label: '病歷號', field: 'chr_no', sortable: true },
      { name: 'sex', label: '性別', field: 'sex', sortable: true, format: val => val === 0 ? '女' : '男' },
      { name: 'doctor', label: '主治醫師', field: 'doc_id' }
    ])
    const rows = store.labList
    const test = () => {
      console.log(store.labList)
      console.log(rows)
      // console.log(labList)
    }
    const pagination = reactive({
      rowsPerPage: 10
    })
    return {
      todos,
      meta,
      rows,
      columns,
      store,
      pagination,
      filter,
      test
      // labList,
      // list
      // formatData
    }
  }
})
</script>
