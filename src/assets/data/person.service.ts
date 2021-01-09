import { Injectable } from "@angular/core";
import { Person } from "./person.model";
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: "root",
})
export class PersonService {

  constructor(private http: HttpClient,
    private loadingController: LoadingController,) {}
  private _persons: Person[] = [

    new Person(
      "p1",
      "Emma",
      "Painter",
      "I love to work with colors",
      "../../assets/Images/ImagePost1.png",
      20,
      new Date("2020-01-01"),
      new Date("2020-12-31"),
      // "u1"
    ),
    new Person(
      "p2",
      "Lilly",
      "Carpenter",
      "Building is my passion!",
      "../../assets/Images/ImagePost2.png",
      189.99,
      new Date("2020-01-01"),
      new Date("2020-12-31"),
      // "u1"
    ),
    new Person(
      "p3",
      "Mathew",
      "Electrician",
      "Get Wired!",
      "../../assets/Images/ImagePost3.png",
      149.99,
      new Date("2020-01-01"),
      new Date("2020-12-31"),
      // "u1"
    ),
  ];
  get persons() {
    return [...this._persons];
  }
  fetchPersons(){
    var persons: Person[]=[];
    this.http.get('https://skillful-53c9c.firebaseio.com/persons.json')
    .subscribe(response => {
      for(const key in response) {
        persons.push(
          new Person(
            key,
            response[key].name,
            response[key].category,
            response[key].description,
            response[key].image,
            response[key].wage,
            new Date(response[key].availableFrom),
            new Date(response[key].availableTo),
            // response[key].userId
          )
        );
      }
    });
    this._persons=persons;
    console.log(this.persons);
    return(persons); 
  }
  getPerson(id: String) {
    return { ...this._persons.find((p) => p.id === id) };
  }
  addPerson(
    name: string,
    category: string,
    description: string,
    wage: number,
    image: string,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPerson = new Person(
      Math.random().toString(),
      name,
      category,
      description,
      // "../../assets/Images/ImagePost3.png",
      image,
      wage,
      dateFrom,
      dateTo,
      // "u1"
    );
    this.http.post('https://skillful-53c9c.firebaseio.com/persons.json',
    {...newPerson, id:null}).subscribe(response=>{
      // console.log('abc'+response);
    });
    this._persons.push(newPerson);
    // console.log(this._persons);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...',
      duration: 50
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  updatePerson(
    personId: string,
    name: string,
    category: string,
    description: string,
    wage: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const updatePersonIndex = this._persons.findIndex((p1) => p1.id === personId);
    const oldPerson = this._persons[updatePersonIndex];
    this._persons[updatePersonIndex] = new Person(
      oldPerson.id,
      name,
      category,
      description,
      oldPerson.image,
      wage,
      dateFrom,
      dateTo,
      // oldPerson.userId
    )
    this.http.put(`https://skillful-53c9c.firebaseio.com/persons/${oldPerson.id}.json`, 
      {...this._persons[updatePersonIndex], id: null})
      .subscribe((response) => {
      console.log(response);});
      console.log(this._persons[updatePersonIndex]);
    }
    removePerson(id: string) {
      this.http.delete(`https://skillful-53c9c.firebaseio.com/persons/${id}.json`)
      .subscribe((response) => {console.log(response);});
      const position = this._persons.findIndex( p => p.id === id);
      this._persons.splice(position, 1);}
    
    }

    