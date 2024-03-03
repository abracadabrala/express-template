export namespace Auth {
  interface LogIn {
    username: string;
    password: string;
  }

  interface LogOut extends LogIn {}
}
