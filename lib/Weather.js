export default function Weather(data) {
  this.city = data.current_observation.display_location.full;
  this.temp = data.current_observation.temp_f;
  this.description = data.current_observation.weather;
  this.icon = data.current_observation.icon_url;
  this.high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.month = data.forecast.simpleforecast.forecastday[0].date.monthname;
  this.day = data.forecast.simpleforecast.forecastday[0].date.day;
  this.year = data.forecast.simpleforecast.forecastday[0].date.year;
  this.summary = data.forecast.txt_forecast.forecastday[0].fcttext;

  this.hour = data.hourly_forecast[0].FCTTIME.civil;
  this.hourIcon = data.hourly_forecast[0].icon_url;
  this.hourTemp = data.hourly_forecast[0].temp.english;

  this.hourlyInfo = data.hourly_forecast.splice(0, 7)
  this.dailyInfo = data.forecast.simpleforecast.forecastday


  this.weekDay = data.forecast.simpleforecast.forecastday[0].date.weekday;
  this.weekDayHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.weekDayLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.weekDayIcon = data.forecast.simpleforecast.forecastday[0].icon_url;

}
