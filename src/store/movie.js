import { Store } from '../core/heropy'

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const searchMovies = async page => {
  // apikey는 연습용으로만 사용
  const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
  const json = await res.json()
  console.log(json)
}