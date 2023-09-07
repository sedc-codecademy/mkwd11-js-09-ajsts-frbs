export type Roles = { [key: string]: boolean };

// {
//   admin: false;
//   editor: true;
// }

export interface User {
  uid: string;
  email: string;
  name: string;
  roles: Roles;
}
