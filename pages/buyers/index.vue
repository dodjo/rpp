<template>
  <div class='page'>
    <the-header title='Покупатели' />

    <div class='table'>
      <div class='table-card'>
        <div class='table-card__filters'>
          <div class='form-item'>
            <label>Регион</label>
            <el-select
              v-model='filters.region'
              placeholder=''
              style='width: 100%'>
              <!--            <el-option-->
              <!--              v-for="item in options"-->
              <!--              :key="item.value"-->
              <!--              :label="item.label"-->
              <!--              :value="item.value">-->
              <!--            </el-option>-->
            </el-select>
          </div>
          <div class='form-item'>
            <label>Населенный пункт</label>
            <el-select
              v-model='filters.settlement'
              placeholder=''
              style='width: 100%'>
              <!--            <el-option-->
              <!--              v-for="item in options"-->
              <!--              :key="item.value"-->
              <!--              :label="item.label"-->
              <!--              :value="item.value">-->
              <!--            </el-option>-->
            </el-select>
          </div>
          <div class='form-item'>
            <label>Дата регистрации</label>
            <el-date-picker
              v-model='filters.dateRegistration'
              type='date'
              placeholder=''
              style='width: 100%'>
            </el-date-picker>
          </div>
          <div class='form-item'>
            <label>Дата последнего входа</label>
            <el-date-picker
              v-model='filters.dateLastEntry'
              type='date'
              placeholder=''
              style='width: 100%'>
            </el-date-picker>
          </div>
          <div class='form-item'>
            <label>Никнейм</label>
            <el-input v-model='filters.name'
              style='width: 100%' />
          </div>
        </div>
        <div class='table-card__table'>
          <el-table
            :data='tableData'
            stripe
            style='width: calc(100% + 1000px); margin-right: -1000px'>
            <el-table-column
              prop='id'
              label='ID'
              width='90'>
            </el-table-column>

            <el-table-column
              prop='name'
              label='Никнейм'
              width='200'>
            </el-table-column>

            <el-table-column
              prop='status'
              label='Статус'
              width='180'>
            </el-table-column>

            <el-table-column
              prop='city'
              label='Город'
              width='auto'>
            </el-table-column>

            <el-table-column
              prop='dateRegistration'
              label='Дата регистрации'
              width='180'>
            </el-table-column>

            <el-table-column
              prop='dateLastEntry'
              label='Дата последнего входа'
              width='180'>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class='table__footer'>
        <div class='pagination'>
          <el-pagination
            :page-size='20'
            :pager-count='11'
            layout='prev, pager, next'
            :total='1000'>
          </el-pagination>
        </div>

        <div>Показано записей 15 из 300</div>
      </div>
    </div>

  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  name: 'BuyersPage',
  components: { TheHeader },
  data() {
    return {
      filters: {
        region: null,
        settlement: null,
        dateRegistration: null,
        dateLastEntry: null,
        name: null
      },
      tableData: [{
        id: 1,
        name: 'Никнейм 1',
        status: 'Активный',
        city: 'Стерлитамак',
        dateRegistration: '14.05.2022',
        dateLastEntry: '30.06.2022'
      },
        {
          id: 1,
          name: 'Никнейм 1',
          status: 'Активный',
          city: 'Стерлитамак',
          dateRegistration: '14.05.2022',
          dateLastEntry: '30.06.2022'
        },
        {
          id: 1,
          name: 'Никнейм 1',
          status: 'Активный',
          city: 'Стерлитамак',
          dateRegistration: '14.05.2022',
          dateLastEntry: '30.06.2022'
        },
        {
          id: 1,
          name: 'Никнейм 1',
          status: 'Активный',
          city: 'Стерлитамак',
          dateRegistration: '14.05.2022',
          dateLastEntry: '30.06.2022'
        }
      ]
    }
  },
}
</script>

<style lang='scss' scoped>
.table {
  height: calc(100vh - 100px);
  display: flex;
  gap: 20px;
  flex-direction: column;
  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.pagination {
  background-color: $color5;
  border-radius: $border-radius;
}

.table-card {
  border-radius: $border-radius;
  background-color: $color5;
  overflow: hidden;
  &__filters {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
  }
}

.form-item {
  flex: 1 1;
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: $color2;
  }
}
</style>
