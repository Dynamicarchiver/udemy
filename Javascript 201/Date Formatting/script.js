let d = new Date(2025, 0, 15);
const months = ["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
]

console.log(d);
console.log(d.getFullYear());
console.log(d.getDate());
console.log(months[d.getMonth()]);

d.setFullYear(2022);
console.log(d.getFullYear());
