import React from "react";
import Hero from "./Hero";
import MessageHero from "./MessageHero";
import CardContainer from "./CardContainer";
import Poem from "./Poem";

const Layout = () => {
  const [showPoem, setShowPoem] = React.useState(false);
  const Grid1 = showPoem ? <Poem></Poem> : <Hero></Hero>;
  const Grid2 = showPoem ? (
    <MessageHero></MessageHero>
  ) : (
    <CardContainer onSubmit={setShowPoem}></CardContainer>
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 pt-10">
      <div className="flex justify-center lg:justify-end mt-10">{Grid1}</div>

      <div className=" flex justify-center lg:justify-start mt-10 lg:mt-20  items-center">
        {Grid2}
      </div>
    </div>
  );
};

export default Layout;
