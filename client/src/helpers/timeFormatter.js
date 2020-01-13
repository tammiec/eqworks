export function timeFormatter(hour) {

  let ampm;
  let num = hour;

  if (num === 0) {
    num = 12;
    ampm = 'AM';
  } else if (num >= 1 && num <= 11) {
    ampm = 'AM';
  } else if (num === 12) {
    ampm = 'PM';
  } else {
    num = num - 12;
    ampm = 'PM';
  }

  return `${num}:00 ${ampm}`;
}