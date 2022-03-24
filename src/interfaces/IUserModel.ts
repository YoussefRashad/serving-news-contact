import IUser from './IUser';

export default interface IUserModel extends IUser {
  user_id: number;
  tokens: {token: string}[];
}