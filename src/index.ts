import { fetchWeather } from './fetch-weather'
import { parse } from 'node-html-parser';


addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
  let test = 'BAJAJ-AUTO'
  const weather = await fetchWeather(test);
  const root = parse(await weather.text());
  return new Response(root.querySelector('.Fz\(36px\)').text);
  // ${weather.location.city}, ${weather.location.region}<br>
  //${weather.item.condition.temp} ${weather.item.condition.text}
  //`.trim()
}

