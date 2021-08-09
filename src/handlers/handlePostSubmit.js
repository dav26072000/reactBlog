export default function handlePostSubmit(
  postTitle,
  postDescription,
  loginedUserId,
  posts,
  setPopupHook
) {
  console.log(loginedUserId);
  console.log(posts);

  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const newdate = `${year}/${month}/${day}`;

  if (postTitle !== "" && postDescription !== "") {
    const postId = posts.length + 1;
    const setPost = {
      id: loginedUserId,
      post: {
        title: postTitle,
        description: postDescription,
        id: postId,
        date: newdate,
      },
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
