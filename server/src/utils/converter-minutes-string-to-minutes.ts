export function ConverterMinutesStringToHorasStrigs(minutesAmounter: number) {

  const hours = Math.floor(minutesAmounter / 60);
  const minutes = minutesAmounter  % 60;

  return `${String(hours).padStart(2,'0')}:${ String (minutes) .padStart(2,'0') }`;

}