import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ThumbUp } from "@material-ui/icons";
import CommentSection from "./CommentSection";
import { IPost } from "../../utils/interfaces";
import formatDate from "../../utils/formatDate";

interface Props {}

const Post: React.FunctionComponent<IPost & { _id: string }> = ({
  _id,
  author,
  content,
  likes,
  timestamp,
}) => {
  return (
    <article
      className="
      rounded shadow bg-neutral-100
      p-2 w-full
      "
    >
      <p className="text-primary-300 font-bold">
        {typeof author !== "string" ? author.username : author}
      </p>
      <p className="text-neutral-400">{formatDate(timestamp)}</p>
      <p>{content}</p>
      <p className="text-sm text-secondary-300">{likes} likes.</p>

      <Button size="sm">
        <ThumbUp className="pt-1 pr-1 pb-1" />
        Like this post
      </Button>

      <hr className="my-2" />

      <CommentSection postID={_id} />
    </article>
  );
};

export default Post;
