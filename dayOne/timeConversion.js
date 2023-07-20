function timeConversion(s) {
  var timeArr = s.split(":");
  var hour = parseInt(timeArr[0]);
  var minute = timeArr[1];
  var second = timeArr[2].substring(0, 2);
  var period = timeArr[2].substring(2);
  var militaryHour = "";

  if (period === "AM") {
    if (hour === 12) {
      militaryHour = "00";
    } else {
      militaryHour = hour.toString().padStart(2, "0");
    }
  } else {
    if (hour === 12) {
      militaryHour = "12";
    } else {
      militaryHour = (hour + 12).toString();
    }
  }

  var militaryTime = militaryHour + ":" + minute + ":" + second;
  return militaryTime;
}