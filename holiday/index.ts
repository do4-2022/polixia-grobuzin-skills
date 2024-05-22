import { DateTimeFormatOptions } from 'intl';

export async function run(req) {
  // fetch api https://calendrier.api.gouv.fr/jours-feries/metropole/2024.json

  const holidays = await fetch("https://calendrier.api.gouv.fr/jours-feries/metropole/2024.json")
    .then((response) => response.json()) 

    
  const today = new Date().toISOString().split("T")[0];

  const nextHoliday = Object.keys(holidays).find( date =>  date > today);
  if (!nextHoliday) {
    return {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Je n'ai pas trouvé de jour férié" }),
    };
  }
  const nextHolidayName = holidays[nextHoliday];

  // format the date to be prononcable by the voice
  const date = new Date(nextHoliday);
  const options: DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const nextHolidayDate = date.toLocaleDateString('fr-FR', options);

  const message = `Le prochain jour férié est le ${nextHolidayDate} c'est ${nextHolidayName}`;  

  // Return a simple JSON response
  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  };
}