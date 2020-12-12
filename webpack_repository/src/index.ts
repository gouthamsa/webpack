import { fetchWeather } from './fetch-weather'


addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
  let test = 'BAJAJ-AUTO'
  const weather = await fetchWeather(test);
  return weather;
  //const body = `
  // ${weather.location.city}, ${weather.location.region}<br>
  //${weather.item.condition.temp} ${weather.item.condition.text}
  //`.trim()
}

