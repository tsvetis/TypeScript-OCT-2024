import { CONFIG } from "../constant";
import { PostService } from "../service/post";

const { baseUrl } = CONFIG;

const postService = new PostService(baseUrl);

/* Create - Post */
postService.create({
  userId: 123,
  id: 321,
  title: "TypeScript is the best!",
  body: "Lorem ipsum bla bkaLorem ipsum bla bkaLorem ipsum bla bkaLorem ipsum bla bkaLorem ipsum bla bkaLorem ipsum bla bka",
});

/* Read One - Post */
postService.getSinglePost(4).then((post) => {
  console.log(post);
});

/* Update - Post */
postService.update({
  id: 1,
  title: "Zdrasti!",
});

/* Delete - Post */
postService.delete(3);

export const postPage = `<div>Hello, from post page! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, error facere beatae explicabo vitae hic, eaque voluptatem qui ex quae sint voluptas. Officiis excepturi harum, molestias minus fugit ducimus exercitationem!</div> `;
