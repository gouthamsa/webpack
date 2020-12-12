import { fetchWeather } from './fetch-weather'


addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
  let test = ['BAJAJ-AUTO', 'DRREDDY']
  for (var i = 0; i < test.length; i++) {
    const weather = await fetchWeather(test[i]);
    console.log(weather.text())
    return weather;
  }
  //const body = `
  // ${weather.location.city}, ${weather.location.region}<br>
  //${weather.item.condition.temp} ${weather.item.condition.text}
  //`.trim()
}

