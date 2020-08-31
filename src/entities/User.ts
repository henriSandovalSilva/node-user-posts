interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IAddressGeo;
}

interface IAddressGeo {
  lat: string;
  lng: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

class IUser {
  id: number;

  name: string;

  username: string;

  email: string;

  address: IAddress;

  phone: string;

  website: string;

  company: ICompany;

  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
}

export default IUser;
