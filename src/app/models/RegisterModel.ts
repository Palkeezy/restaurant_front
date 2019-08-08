import {Roles} from '../enums/roles';

export class RegisterModel {
  constructor(
    public username?: string,
    public surname?: string,
    public email?: string,
    public password?: string,
    public role?: Roles,
  ) {

  }
}
