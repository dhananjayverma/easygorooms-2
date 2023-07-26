function timeToEat(currentTime) {
  const [time, meridian] = currentTime.split(" ");
  const [hours, minutes] = time.split(":");
  let parsedHours = parseInt(hours);
  const parsedMinutes = parseInt(minutes);
  if (meridian.toLowerCase() === "p.m.") {
    parsedHours += 12;
  }
  const currentTimeInMinutes = parsedHours * 60 + parsedMinutes;
  const breakfastTimeInMinutes = 7 * 60;
  const lunchTimeInMinutes = 12 * 60;
  const dinnerTimeInMinutes = 19 * 60;
  let timeRemainingInMinutes;
  let meal;
  
  if (currentTimeInMinutes < breakfastTimeInMinutes) {
    timeRemainingInMinutes = breakfastTimeInMinutes - currentTimeInMinutes;
    meal = "breakfast";
  } else if (currentTimeInMinutes < lunchTimeInMinutes) {
    timeRemainingInMinutes = lunchTimeInMinutes - currentTimeInMinutes;
    meal = "lunch";
  } else if (currentTimeInMinutes < dinnerTimeInMinutes) {
    timeRemainingInMinutes = dinnerTimeInMinutes - currentTimeInMinutes;
    meal = "dinner";
  } else {
    timeRemainingInMinutes = (24 * 60) - currentTimeInMinutes + breakfastTimeInMinutes;
    meal = "breakfast (next day)";
  }
  const hoursRemaining = Math.floor(timeRemainingInMinutes / 60);
  const minutesRemaining = timeRemainingInMinutes % 60;

  return [hoursRemaining, minutesRemaining];
}

// Test cases
console.log(timeToEat("2:00 p.m.")); //ans ➞ [5, 0]
console.log(timeToEat("5:50 a.m.")); // ans ➞ [1, 10]


