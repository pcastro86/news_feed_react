import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es')

const baseUrl = 'https://api.canillitapp.com'
const date = dayjs()
const formatDate = date.format('YYYY-MM-DD')


const api = {
  async latestNews(){
    try {
      const response = await fetch(`${baseUrl}/latest/${formatDate}`)
      const res = await response.json()
      return res;
    }
    catch(error){
      console.log('error', error)
    }
  },
  async categoryNews(catrgoryId){
    try {
      const response = await fetch(`${baseUrl}/news/category/${catrgoryId}`)
      const res = await response.json()
      return res;
    }
    catch(error){
      console.log('error', error)
    }
  },
  async searchNews(item){
    try {
      const response = await fetch(`${baseUrl}/search/${item}`)
      const res = await response.json()
      return res;

    }
    catch(error){
      console.log('error', error)
    }
  }
}

export default api;

