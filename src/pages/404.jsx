import React from "react";

import Seo from "the-great-gatsby-theme/src/components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo title="404 Page introuvable 🕵️" />

      <section className={`my-16`}>
        <div className={`container text-center`}>
          <h1 className={`text-4xl font-bold`}>404 Page introuvable 🕵️</h1>
        </div>
      </section>

      <section className={`pb-16`}>
        <div className={`container max-w-screen-lg mx-auto`}>
          <p className={`text-lg`}></p>
        </div>
      </section>
    </>
  );
}
