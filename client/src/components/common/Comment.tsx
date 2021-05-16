import { Message } from "@material-ui/icons";
import formatDate from "../../utils/formatDate";
import { IComment } from "../../utils/interfaces";
import Button from "./Button";

interface Props {}

const Comment: React.FunctionComponent<IComment> = ({
  author,
  content,
  likes,
  timestamp,
}) => {
  return (
    <article
      className="rounded shadow 
          p-2 bg-neutral-200
          w-full
      "
    >
      <p className="text-secondary-300 font-bold">
        {typeof author !== "string" ? author.username : author}
      </p>
      <p className="text-neutral-400">{formatDate(timestamp)}</p>
      <p>{content}</p>

      <div className="flex gap-2 items-center">
        <p className="text-sm text-secondary-300">{likes} likes.</p>
        <Button
          style="primary"
          size="sm"
          isGhost={true}
          extendStyle="font-bold"
        >
          Like comment
        </Button>
      </div>
    </article>
  );
};

export default Comment;
