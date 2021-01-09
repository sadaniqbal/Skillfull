import { Component, OnInit } from '@angular/core';
import { Person } from '../../../assets/data/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../../assets/data/person.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../../../assets/data/booking.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.page.html',
  styleUrls: ['./createbooking.page.scss'],
})
export class CreatebookingPage implements OnInit {
  person: Person;
  id: String;
  form: FormGroup;
  constructor(
     private route: ActivatedRoute,
     private personService: PersonService,
     private bookingService: BookingService,
     private router: Router,

     ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('personId');
    // console.log(this.id);
    this.person = this.personService.getPerson(this.id);
    // console.log(this.person);
    this.form = new FormGroup({
      firstName: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      lastName: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      guestNumber: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      bookingFrom: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      bookingTo: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  onCreateBooking(){
    this.bookingService.addBooking(
      this.person.id,
      this.person.name,
      this.person.image,
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.guestNumber,
      new Date(this.form.value.bookingFrom),
      new Date(this.form.value.bookingTo),
    )
    this.form.reset();
    this.router.navigate(['/booking']);
  }
}
