export class Person {
  constructor(
    public id: string,
    public name: string,
    public category: string,
    public description: string,
    public image: string,
    public wage: number,
    public availableFrom: Date,
    public availableTo: Date,
    // public userId: string,
  ){}
  }