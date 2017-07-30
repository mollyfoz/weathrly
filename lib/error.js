export default function error(data) {
  this.city = "Invalid location";
  this.temp = 'NOPE';
  this.description = 'TRY AGAIN!!';
  this.icon = 'assets/weather.svg';
  this.high = 'N/A';
  this.low = 'N/A';
  this.month = '';
  this.day = '';
  this.year = '';
  this.summary = 'Invalid lication or format';

  this.hour = '';
  this.hourIcon = '';
  this.hourTemp = '';

  this.hourlyInfo = ''
  this.dailyInfo = ''


  this.weekDay = ''
  this.weekDayHigh = ''
  this.weekDayLow = ''
  this.weekDayIcon = ''
}
