import { makeUrl } from '../../../utils/utils'
import { axiosApi } from './config'

export function transactionRecentTxApi(payload) {
  return new Promise((resolve, reject) => {
    axiosApi.get(makeUrl('/v3/transaction/recentTx', payload))
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function transactionTxDetailApi(payload) {
  return new Promise((resolve, reject) => {
    axiosApi.get(makeUrl('/v3/transaction/txDetail', payload))
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}