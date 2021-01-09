export class Booking {
  id: string;
  constructor (
    public userId: string,
    public personName: string,
    public personImage: string,
    public personId: string,
    public lastName: string,
    public guestNumber: number,
    public firstName: string,
    public bookingTo: Date,
    public bookingId: string,
    public bookingFrom: Date,
    

  ) {}
}