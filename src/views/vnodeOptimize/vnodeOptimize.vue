<script>
import { Checkbox } from 'element-ui'

export default {
  name: 'vnodeOptimize',
  data() {
    return {
      tableData: [],
      table: {},
      changeIndex: undefined
    }
  },
  components: {
    ElCheckbox: Checkbox
  },
  mounted() {
    if (this.table.useMemo) {
      if (!this.table.rowKey) {
        throw new Error('for useMemo, row-key is required.')
      }
      this.vnodeCache = []
    }
    for (let i = 0; i < 5000; i++) {
      this.tableData.push({
        date: '2016-05-02',
        name: `王小虎${i}`,
        province: '上海',
        city: '普陀区',
        address: `上海市普陀区金沙江路 10${i} 弄`,
        zip: 200333,
        desc: '荷兰优质淡奶，奶香浓而不腻',
        checked: false
      })
    }
    setTimeout(() => {
      this.vnodeCache = this._vnode.children
    })
  },
  updated() {
    setTimeout(() => {
      this.vnodeCache = this._vnode.children
    })
  },
  methods: {
    change(value, item, index) {
      item.checked = value
      this.changeIndex = index
      this.$set(this.tableData, index, item)
      const s = window.performance.now()
      setTimeout(() => {
        this.renderTime = `${(window.performance.now() - s).toFixed(2)}ms`
        console.log(this.renderTime)
      })
    },
    renderRow(item, index) {
      return (
        <div class="row">
          <el-checkbox onChange={(e) => this.change(e, item, index)} value={item.checked}>
            备选项
          </el-checkbox>
          <p>{item.name}</p>
          <p>{item.province}</p>
          <p>{item.city}</p>
          <p>{item.address}</p>
          <p>{item.zip}</p>
          <p>{item.desc}</p>
        </div>
      )
    },
    handleRow(item, index) {
      if (this.changeIndex === index) {
        return this.renderRow(item, index)
      }
      if (!this.vnodeCache) {
        this.vnodeCache = []
      }
      const rowVnode = this.vnodeCache[index]
      if (rowVnode) {
        return rowVnode
      }
      return this.renderRow(item, index)
    }
  },
  render() {
    return <div class="hello">{this.tableData.map((item, index) => this.handleRow(item, index))}</div>
  }
}
</script>

<style scoped lang="less">
.row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    margin-left: 40px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
