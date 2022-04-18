import React, { Suspense } from  "react";
import { Navbar } from "./Components/Navbar";
import { Fallback } from "Components";
const Main = (props) => {
  const { children } = props;
  return (
    <>
      <div className="w-full h-full flex flex-col bg-white scroll-smooth relative">
        <Navbar />
        <main className="w-full h-screen">
          <Suspense fallback={<Fallback />}>{children}</Suspense>
        </main>

      </div>
    </>
  );
};

export default Main;
