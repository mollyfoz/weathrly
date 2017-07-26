export default function Weather(data) {
  this.city = data.current_observation.display_location.full;
  this.temp = data.current_observation.temp_f;
  this.description = data.current_observation.weather;
  this.icon = data.current_observation.icon_url;
  // this.date = data.current_observation.observation_time;
  this.high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.month = data.forecast.simpleforecast.forecastday[0].date.monthname;
  this.day = data.forecast.simpleforecast.forecastday[0].date.day;
  this.year = data.forecast.simpleforecast.forecastday[0].date.year;
  this.summary = data.forecast.txt_forecast.forecastday[0].fcttext_metric

}
