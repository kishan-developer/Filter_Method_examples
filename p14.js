// filter by date range

const events = [
    { name : "Event1", date: new Date("2024-02-01")},
    { name : "Event2", date: new Date("2024-03-15")}
];
const upcomingEvent = events.filter(event => event.data >= new Date());
console.log(upcomingEvent);