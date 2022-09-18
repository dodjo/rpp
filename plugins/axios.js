export default function ({ $axios, store }) {

  $axios.onRequest(config => {
    store.dispatch('setLoadingStatus', true)
    return config
  })

  $axios.onResponse(config => {
    store.dispatch('setLoadingStatus', false)
    return config
  })

  $axios.onError(error => {
    store.dispatch('setLoadingStatus', false)
  })

}
