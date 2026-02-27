const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];
 
let analyzeSalary = (minYears, teamPlayers) => {
    
    let listPlayerFilter = teamPlayers.filter((player) => {
        return player.years >= minYears;
    });

    let sum = listPlayerFilter.reduce((total, player) => total +player.salary,0);

    let highestPaid = Math.max(...listPlayerFilter.map((p) =>{
        return p.salary;
    }));

    let lowestPaid = Math.min(...listPlayerFilter.map((p) =>{
        return p.salary;
    }));

    return {sum,highestPaid,lowestPaid};
}

console.log(analyzeSalary(10, players));