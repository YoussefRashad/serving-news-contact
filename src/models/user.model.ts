import IUserModel from '../interfaces/IUserModel';
export default class User {
  users: IUserModel[] = [
    {
      user_id: 1,
      username: "youssef_rashad",
      password: "123456789",
      tokens: [],
    },
    {
      user_id: 2,
      username: "youssef_rashad2",
      password: "123456789",
      tokens: [],
    },
  ]

  public getUsers(): IUserModel[] {
    return this.users
  }
}