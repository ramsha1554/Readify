import { Fragment } from "react";
import Book from "./Book";

function Home() {
  return (
    <Fragment>
      <div className="home max-w-4xl mx-auto p-6 mt-10 flex flex-col items-center">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content area.</p>
      </div>

      <div className="p-6 ">
        <h1 className="text-3xl text-center font-bold mb-4">Books for Sale</h1>

        <div className="flex justify-center gap-3 flex-wrap">
          <div className="w-1/4 p-2 text-center">
            <Book title="JavaScript Mastery" description="This is JS book"  price ="300" author="Syed Ali" />

          </div>
          <div className="w-1/4 p-2 text-center">
            <Book title="React in Depth" description="Learn React deeply "  author=" Ali Hussain" />
          </div>
          <div className="w-1/4 p-2 text-center">
            <Book title="Node.js Essentials" description="Server-side JavaScript" author="Shekar Kapoor" />
          </div>
          <div className="w-1/4 p-2 text-center">
            <Book title="Tailwind CSS Guide" description="Style fast with Tailwind" author=" Amitabh Singh"/>
          </div>
          <div className="w-1/4 p-2 text-center">
            <Book title="MongoDB Basics" description="Database fundamentals" author=" Rizvi Amir" />
          </div>
           <div className="w-1/4 p-2 text-center">
            <Book title="SQL Basics" description="Relational Database fundamentals" author=" Ramsha Mehvish" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
