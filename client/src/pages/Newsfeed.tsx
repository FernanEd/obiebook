import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Post from "../components/common/Post";
import { serverURL } from "../utils/constants";
import { IPost } from "../utils/interfaces";
import Page from "./Page";

interface Props {}

const Newsfeed: React.FunctionComponent<Props> = () => {
  const [posts, setPosts] = useState<Array<IPost & { _id: string }>>();

  useEffect(() => {
    const getPosts = async () => {
      let res = await fetch(`${serverURL}/api/posts`);
      let data = await res.json();
      console.log(data);
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <Page>
      <section
        id="news-wrapper"
        className="
        rounded shadow-md bg-neutral-200
        max-w-sm md:max-w-lg lg:max-w-screen-lg
        mx-auto px-4 lg:px-20 
        flex flex-col gap-2
        "
      >
        {/* <Post /> */}
      </section>
    </Page>
  );
};

export default Newsfeed;
