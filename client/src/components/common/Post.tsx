import React, { useState } from "react";
import Button from "./Button";
import { ThumbUp } from "@material-ui/icons";
import CommentSection from "./CommentSection";
import { IPost } from "../../utils/interfaces";

interface Props {}

const Post: React.FunctionComponent<IPost> = ({
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
      <p className="text-primary-300 font-bold">{author}</p>
      <p className="text-neutral-400">{timestamp}</p>
      <p>{content}</p>
      <p className="text-sm text-secondary-300">{likes} likes.</p>

      <Button size="sm">
        <ThumbUp className="pt-1 pr-1 pb-1" />
        Like this post
      </Button>

      <hr className="my-2" />

      <CommentSection postID="a" />
    </article>
  );
};

export default Post;
