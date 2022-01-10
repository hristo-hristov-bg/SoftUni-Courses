function solve(tickets, criteria)  {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketArr = [];

    tickets.forEach(element => {
        const[dest, price, status] = element.split('|');
        ticketArr.push(new Ticket(dest, Number(price), status));
    });

    if (criteria == 'destination') {
        ticketArr.sort((a,b) => {
            return a.destination.localeCompare(b.destination);
        })
    } else if (criteria == 'status') {
        ticketArr.sort((a,b) => {
            return a.status.localeCompare(b.status);
        })  
    } else {
        ticketArr.sort((a, b) => {
            return a.price - b.price;
        })
    }

    return ticketArr;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
    ))