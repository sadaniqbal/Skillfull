import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) {}
    
  private _booking: Booking[] = [

  //   new Booking(
  //   "b1",
  //   "p1",
  //   "Emma",
  //   "../../assets/Images/ImagePost1.png",
  //   "Iqbal",
  //   "Ahmad",
  //   2,
  //   new Date("2020-01-01"),
  //   new Date("2020-12-31"),
  // ),
];
  get booking() {
    return [...this._booking];
  }
  fetchBooking(){
    var booking: Booking[]=[];
    this.http.get('https://skillful-53c9c.firebaseio.com/booking.json')
    .subscribe(response => {
      for(const key in response) {
        booking.push(
          new Booking(
            response[key].userId,
            response[key].personName,
            response[key].personImage,
            response[key].personId,
            response[key].lastName,
            response[key].guestNumber,
            response[key].firstName,
            new Date(response[key].bookingTo),
            key,
            // response[key].bookingId,
            new Date(response[key].bookingFrom),
          )
        );
      }
    });
    this._booking=booking;
    return(booking); 
  }
  getBooking(id:string) {
    return { ...this._booking.find((p) => p.id === id) };
  } 
  addBooking(
    personId: string,
    personName: string,
    personImage: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date,
  ) {
    const newBooking = new Booking(
      'u1',
      personName,
      personImage,
      personId,
      lastName,
      guestNumber,
      firstName,
      dateTo,
      Math.random().toString(),
      dateFrom,
      // "../../assets/Images/ImagePost2.png",
    );
    this.http.post('https://skillful-53c9c.firebaseio.com/booking.json',
    {...newBooking, id:null}).subscribe(response=>{
      console.log(response);
    });
    this._booking.push(newBooking);
    console.log(this._booking);
  }
  removeBooking(bookingId:string) {
    this.http.delete(`https://skillful-53c9c.firebaseio.com/booking/${bookingId}.json`)
    .subscribe((response) => {console.log(response);});
    const position = this._booking.findIndex( p => p.bookingId===bookingId);
    console.log(position)
    this._booking.splice(position,1);
    console.log(this._booking);
  } 
  

  // updatePerson(
  //   bookingId: string,
  //   personTitle: string,
  //   // personImage: string,
  //   firstName: string,
  //   lastName: string,
  //   guestNumber: number,
  //   bookedFrom: Date,
  //   bookedTo: Date,
  // ) {
  //   const updateBookingIndex = this._booking.findIndex((p => p.bookingId===bookingId);
  //   const oldBooking = this._booking[updateBookingIndex];
  //   this._booking[updateBookingIndex] = new Booking(
  //     oldBooking.bookingId,
  //     personTitle,
  //     oldBooking.personImage,
  //     firstName,
  //     lastName,
  //     guestNumber,
  //     bookedFrom,
  //     bookedTo,
  //     // oldPerson.userId
  //   )
  //   this.http.put(`https://skillful-53c9c.firebaseio.com/booking/${oldBooking.bookingId}.json`, 
  //     {...this._booking[updateBookingIndex], id: null})
  //     .subscribe((response) => {
  //     console.log(response);});
  //     console.log(this._booking[updateBookingIndex]);
  // };

}
