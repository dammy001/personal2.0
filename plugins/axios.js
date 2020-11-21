export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    switch (error.response.status) {
      case 500:
        redirect('/')
        break
      case 404:
        redirect('/404')
        break
      default:
    }
  })
}
