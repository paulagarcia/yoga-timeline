import events from './events.json';
const years = Array.from(new Map(events.map(event => [event.year, { year: event.year, id: event.id }])).values());
export default years;
