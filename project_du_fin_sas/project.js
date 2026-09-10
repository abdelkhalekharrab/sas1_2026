let scan = require("prompt-sync")();






let n ;



let Nom ;
let id = 0 ;


let availableSeat = 50 ; 

const tickets = [];

let ticket ;






const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];






do
{
    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticke");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajet");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");


    n =  Number(scan("votre choix :"));

switch(n)
{
    case 1 : afficherTrajets() 
    break ;
    case 2 : achatTicket();
    break ; 
    case 3 : Afficher_les_tickets();
    break ;
    case 4 : Annuler_un_ticket();
    break ;
    case 5 : Rechercher_un_ticket();
    break ;
    case 6 : Filtrer_les_trajets();
    break ;
    case 7 : Trier_les_trajets();
    break ;
    case 0 : console.log("Quitter ...");
    break;
    default : console.log("sorry");
    break;
}

    
}
while(n !== 0);




function afficherTrajets() {
        console.log("=== TRAJETS DISPONIBLES ==="); 
        for (let i = 0; i < trips.length; i++) {
            console.log("#" + trips[i].id + " " + trips[i].departure + " → " + trips[i].destination);
            console.log("Départ : " + trips[i].departureTime);
            console.log("Arrivée : " + trips[i].arrivalTime);
            console.log("Prix :" + trips[i].price);
            console.log("Places disponibles :" + trips[i].availableSeats);
        }
    }





function achatTicket() 
    {

        let nom = scan("votre nom : ");
        let idtrajet = +scan("votre id du trajet : ");


        for (let i = 0; i < trips.length; i++) 
            {
            if (idtrajet == trips[i].id) 
                {
                    if(trips[i].availableSeats > 0)
                {
                    ticket =
                    {
                        id : ++id ,
                        passengerName: nom  ,
                        tripId: idtrajet    ,
                        seatNumber: id + 1  ,
                        price: trips[i].price ,
                    }
                    console.log(ticket);
                 
                }
                else
                {
                    console.log("train complete");
                    break ;
                }
                
                
                
            }
        }
        
        console.log("Trajet introuvable.");
    }


tickets.push(ticket);





function Afficher_les_tickets()
{
    for(let i = 0 ; i < tickets.length ; i++)
    {
        console.log("=== TICKETS ===");
        console.log(ticket + "#" + tickets[i].id );
        console.log("Passager :" + ticket.passengerName);
        console.log("Trajet : :" + trips[i].departure + " → " + trips[i].destination);
        console.log("place :" , ticket[i].seatNumber);
        console.log("Prix :" + ticket[i].price);

    }

}






function Annuler_un_ticket()
{
    let idticket = Number (scan("enter l'identifiant du ticket :"));

    for(let i = 0 ; i < tickets.length ; i++)
    {
        if(idticket == tickets[i].id)
        {
            idtrajet == idticket ;
            tickets.splice(i , 1);
            console.log("Ticket annulé avec succès")
        }
        else
        {
            console.log("Ticket introuvable.");
        }
    }

}



function Rechercher_un_ticket()
{
    for(let i = 0 ; i < tickets.length ; i++)
    {
        
    }



}