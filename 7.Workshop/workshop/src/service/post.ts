import { Post } from "../type/post";
import { HttpService } from "./http";

export class PostService extends HttpService<Post> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/posts`);
  }

  getSinglePost(postId: number) {
    // Validation
    return this.getOne(postId);
  }
}
