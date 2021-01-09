import { Component } from '@angular/core';
import { BookingService } from '../../assets/data/booking.service';
import { Booking } from '../../assets/data/booking.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService,
    private http: HttpClient) {
    
  }
  
//   loadIds(){
//     var abc: Booking [] = [];
//     this.http.get('https://skillful-53c9c.firebaseio.com/booking.json')
//     .subscribe(response => {
//       for(const key in response) {
//         abc.push(
//           new Booking (
//             key,
//             response[key].id,
//             response[key].personId,
//             response[key].userId,
//             response[key].personName,
//             // response[key].personImage,
//             response[key].firstName,
//             response[key].lastName,
//             response[key].guestNumber,
//             new Date(response[key].bookingFrom),
//             new Date(response[key].bookingTo),
//           )       );
//   }});
// return (abc);}



    ionViewDidEnter() {
    // this.loadedBookings = this.bookingService.booking;
    this.loadedBookings = this.bookingService.fetchBooking();
  }
  OnRemoveBooking(id:string) {
    // console.log(this.loadedBookings);
    // console.log(id);
    this.bookingService.removeBooking(id);
    this.loadedBookings = this.bookingService.booking;
    // console.log("2"+this.loadedBookings);
    // //To reload page ^
    // console.log(id);
     
  }
}
