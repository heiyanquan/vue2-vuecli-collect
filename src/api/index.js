import fetch from '@/utils/fetch'

const AREA_ID = process.env.VUE_APP_AREA_ID

// 模块指标
export const inxGeneral = (data, config) => fetch('post', '/index/list', { area_id: AREA_ID, ...data }, config)
// 指标明细
export const inxGeneralDetail = (data, config) => fetch('post', '/index/detail', { area_id: AREA_ID, ...data }, config)
// es查询
export const getStandardData = async (data) => fetch('post', '/entity/list', data)
