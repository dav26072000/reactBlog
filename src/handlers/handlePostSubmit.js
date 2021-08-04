export default function handlePostSubmit(
  postTitle,
  postDescription,
  loginedUserId,
  posts,
  setPopupHook
) {
  console.log(loginedUserId);
  console.log(posts);

  if (postTitle !== "" && postDescription !== "") {
    const postId = posts.length + 1;
    const setPost = {
      id: loginedUserId,
      post: { title: postTitle, description: postDescription, id: postId },
    };
    const setPostInStorage = Promise.resolve()
      .then(() => {
        const parsedDate = JSON.stringify([...posts, setPost]);
        return parsedDate;
      })
      .then((parsedDate) => {
        localStorage.setItem("posts", parsedDate);
        setPopupHook({
          isPopup: true,
          massage: "Posted",
          isError: false,
        });
      });
    return true;
  }

  setPopupHook({
    isPopup: true,
    massage: "Set title and description",
    isError: true,
  });

  return false;
}
