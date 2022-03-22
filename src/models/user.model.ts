export interface IUser {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  tokens: Object[];
}


const users: IUser[] = [
  {
    username: "youssef_rashad",
    email: "youssef_rashad@gmail.com",
    password: "123456789",
    phone_number: "01126728146",
    tokens: [],
  },
  {
    username: "youssef_rashad2",
    email: "youssef_rashad2@gmail.com",
    password: "123456789",
    phone_number: "01015628145",
    tokens: [],
  },
]