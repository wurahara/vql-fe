import request from './request'

export function queryBalanceSum (requestBody) {
  return request({
    // baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/balance/sum',
    method: 'post',
    data: requestBody
  })
}

export function queryBalanceRecords (requestBody) {
  return request({
    // baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/balance/records',
    method: 'post',
    data: requestBody
  })
}
