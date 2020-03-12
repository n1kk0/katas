int movie(int card, int ticket, double perc) {
  var quantity = 1;
  var aboPrice = card.toDouble();
  var aboTicketPrice = ticket * perc;
 
  while (ticket * quantity <= (aboPrice + aboTicketPrice).ceil()) {
    quantity++;
    aboPrice += aboTicketPrice;
    aboTicketPrice = aboTicketPrice * perc;
  }

  return quantity;
}
