/** 八皇后 */

<script>
const grids = new Array(8).fill(1).map((_, r) => {
  return new Array(8).fill(1).map((_, c) => ({
    key: `key-${r * 8 + c}`,
    ok: false
  }))
})

export default {
  name: 'EightQueen',
  data () {
    return {
      grids
    }
  },
  methods: {
    select (rIndex, cIndex) {
      if (this.validate(rIndex, cIndex)) {
        this.grids[rIndex][cIndex].ok = true
      } else {
        alert('当前位置不能放置皇后')
      }
    },
    validate (rindex, cindex) {
      // 横
      const horizontal = this.grids[rindex]
      for (let i = 0; i < horizontal.length; i++) {
        if (horizontal[i].ok) return false
      }

      // 竖
      const vertical = this.grids
      for (let i = 0; i < vertical.length; i++) {
        if (vertical[i][cindex].ok) return false
      }

      // 撇丿
      for (let i = 0; i < vertical[0].length; i++) {
        const y = rindex + cindex - i
        if (y >= 0 && y < vertical.length && vertical[y][i].ok) return false
      }

      // 捺㇏
      for (let i = 0; i < vertical[0].length; i++) {
        let y = rindex - cindex + i
        if (y >= 0 && y < vertical.length && vertical[y][i].ok) return false
      }
      return true
    },
    createInterval (msg) {
      let count = 0
      const timer = setInterval(() => {
        console.log(msg + ++count)
        if (count >= 10) {
          clearInterval(timer)
        }
      }, 1000)
      this.$once('hook:beforeDestroy', function () {
        console.log('通过$on 、$once监听页面生命周期销毁')
        clearInterval(timer)
      })
    }
  },
  mounted () {
    this.createInterval('程序化的事件侦听器')
  },
  render () {
    const renderCell = function (ok) {
      if (ok) return <span>Q</span>
      return null
    }
    return (
      <div>
        <h4 class="title">八皇后 JSX Template</h4>

        <div class="gird">
          {
            this.grids.map((row, r_index) => (
              <div class="row" key={r_index}>
                {
                  row.map((cell, c_index) => (
                    <div class="cell" key={cell.key} onClick={() => this.select(r_index, c_index)}>
                      {renderCell(cell.ok)}
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
</script>

<style scoped>
.title {
  line-height: 40px;
}
.gird {
  width: 320px;
  margin: 0 auto;
}
.row {
  height: 40px;
  display: flow-root;
}
.row .cell {
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #999;
  float: left;
  cursor: pointer;
}
.row .cell:nth-child(2n) {
  background: #efefef;
}

.row:nth-child(2n) .cell:nth-child(2n) {
  background: #999;
}
.row:nth-child(2n) .cell:nth-child(2n-1) {
  background: #efefef;
}
</style>