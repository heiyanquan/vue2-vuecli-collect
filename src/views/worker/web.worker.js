import { getStandardData } from '@/api/index'

async function exportExcel() {
  const params = {
    doc_table: 'ads_client_main_company_info',
    uniq_field: ['address_province'],
    uniq_field_value: ['安徽省'],
    uniq_field_ext: [],
    page: 1,
    page_size: 1999,
    doc_field: [],
    sort: {
      reg_capital_cal: 'desc'
    }
  }
  return getStandardData(params).then((res) => {
    return res
  })
}

// eslint-disable-next-line no-restricted-globals
self.onmessage = () => {
  console.log(11)
  exportExcel().then((res) => {
    postMessage(res.list)
  })
}

// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', (e) => {
  console.log(33, e.data)
})
