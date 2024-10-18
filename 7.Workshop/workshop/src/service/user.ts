import { UserDetails } from "../type/user";
import { HttpService } from "./http";

export class UserService extends HttpService<UserDetails> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/users`);
  }

  getSingleUser(userId: number) {
    // Validation
    return this.getOne(userId);
  }
}
