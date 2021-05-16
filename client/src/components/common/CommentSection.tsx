import { Message } from "@material-ui/icons";
import Button from "./Button";

interface Props {
  postID: string;
}

const CommentSection: React.FunctionComponent<Props> = ({ postID }) => {
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

      <div className="flex flex-col gap-2"></div>
    </div>
  );
};

export default CommentSection;
