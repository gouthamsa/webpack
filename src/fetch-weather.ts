export async function fetchWeather(location: string, unit = 'f') {
  const url = 'https://in.finance.yahoo.com/quote/' + location + '.NS?p=' + location + '.NS&.tsrc=fin-srch'

  const res = await fetch(url);



  if (res.status >= 400) {
    throw new Error('Bad response from server')
  }

  //const result = await res.json()
  //return result.query.results && result.query.results.channel
  return res;
}


