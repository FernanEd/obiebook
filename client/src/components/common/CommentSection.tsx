import { Message } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { serverURL } from "../../utils/constants";
import { IComment } from "../../utils/interfaces";
import Button from "./Button";
import Comment from "./Comment";

interface Props {
  postID: string;
}

const CommentSection: React.FunctionComponent<Props> = ({ postID }) => {
  const [comments, setComments] = useState<Array<IComment & { _id: string }>>();

  useEffect(() => {
    const getPosts = async () => {
      let res = await fetch(`${serverURL}/api/posts/${postID}/comments`);
      let data = await res.json();
      console.log(data);
      setComments(data);
    };

    getPosts();
  }, []);

  return (
    <div className="">
      <p>Comments</p>

      <form action="" className="my-2 flex items-center w-full gap-2">
        <input
          type="text"
          className="flex-1 border border-neutral-300 rounded p-1"
          placeholder="Write a comment"
        />
        <Button style="secondary" size="sm" extendStyle="">
          <Message className="pt-1 pr-1 pb-1" />
          Post
        </Button>
      </form>

      <div className="flex flex-col gap-2">
        {comments?.map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
