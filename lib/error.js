export default function error(data) {
  this.city = "Invalid location";
  this.temp = 'NOPE';
  this.description = 'Wrong!!';
  this.icon = 'assets/200w_d.gif';
  this.className = `error-icon`
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
