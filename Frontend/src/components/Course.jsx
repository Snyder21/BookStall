import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstall-fvln.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome to the beginning of a beautiful journey.{" "}
            <span className="text-pink-500">  :)</span>
          </h1>
          <p className="mt-12">
            Welcome to BookStall, your one-stop shop for all your literary needs!
            Here, you can explore a vast collection of books,
            from classic novels to contemporary bestsellers.
            Whether you're a seasoned reader or just starting your
            literary journey, we have something for everyone.
            Looking for a specific book for a short period? Our rental
            service allows you to borrow physical books for a set duration,
            perfect for students, researchers,
            or anyone who wants to explore a book without committing to ownership.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;