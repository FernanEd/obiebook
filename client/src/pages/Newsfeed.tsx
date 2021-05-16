import { ThumbUp } from "@material-ui/icons";
import React, { useState } from "react";
import Button from "../components/common/Button";
import Page from "./Page";

interface Props {}

const Newsfeed: React.FunctionComponent<Props> = () => {
  return (
    <Page>
      <section
        id="news-wrapper"
        className="
        max-w-sm md:max-w-lg lg:max-w-screen-md
        rounded shadow-md 
        p-2 bg-neutral-200
        flex flex-col gap-2
        mx-auto
        "
      >
        <article
          className="
        rounded shadow 
        p-2 bg-neutral-100
        w-full
        "
        >
          <p className="text-primary-300">FernanED</p>
          <p className="text-neutral-400">27 feb 2020 - 5:32PM</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eius
            quo asperiores libero ipsum quae sequi aliquam explicabo? Vero
            adipisci perspiciatis suscipit eaque. Nostrum deserunt totam, quidem
            non ipsa corrupti.
          </p>
          <p className="text-sm text-secondary-300">52 likes.</p>
          <Button size="sm">
            <ThumbUp className="pt-1 pr-1 pb-1" />
            Like this post
          </Button>
        </article>
      </section>
    </Page>
  );
};

export default Newsfeed;
