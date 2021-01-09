import { Injectable } from "@angular/core";
import { Credentials } from "./credentials.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class CredentialsService {
  constructor(private http: HttpClient) {}
  private _credentials: Credentials[] = [

    new Credentials(
      "p1",
      "Sadan",
      "Iqbal",
    ),
  ];
  get credentials() {
    return [...this._credentials];
  }
  fetchCredentials(){
    var credentials: Credentials[]=[];
    this.http.get('https://skillful-53c9c.firebaseio.com/credentials.json')
    .subscribe(response => {
      for(const key in response) {
        credentials.push(
          new Credentials(
            key,
            response[key].username,
            response[key].password
          )
        );
      }
    });
    this._credentials=credentials;
    return(credentials); 
  }
  getCredentials(id: String) {
    return { ...this._credentials.find((p) => p.id === id) };
  }
  addCredentials(
    username: string,
    password: string,
  ) {
    const newCredentials = new Credentials(
      Math.random().toString(),
      username,
      password,
    );
    this.http.post('https://skillful-53c9c.firebaseio.com/credentials.json',
    {...newCredentials, id:null}).subscribe(response=>{
      console.log(response);
    });
    this._credentials.push(newCredentials);
    console.log(this._credentials);
  }
  updateCredentials(
    credentialsId: string,
    username: string,
    password: string,
  ) {
    const updateCredentialsIndex = this._credentials.findIndex((p1) => p1.id === credentialsId);
    const oldCredentials = this._credentials[updateCredentialsIndex];
    this._credentials[updateCredentialsIndex] = new Credentials(
      oldCredentials.id,
      username,
      password,
    )
    this.http.put(`https://skillful-53c9c.firebaseio.com/credentials/${oldCredentials.id}.json`, 
      {...this._credentials[updateCredentialsIndex], id: null})
      .subscribe((response) => {
      console.log(response);});
      console.log(this._credentials[updateCredentialsIndex]);
    }
    removeCredentials(id: string) {
      this.http.delete(`https://skillful-53c9c.firebaseio.com/credentials/${id}.json`)
      .subscribe((response) => {console.log(response);});
      const position = this._credentials.findIndex( p => p.id === id);
      this._credentials.splice(position, 1);}
    }