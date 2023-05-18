import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png"
import { Like, Smile,Comment } from "./utils/icons";

/*
// Data Mock

Comments = [
  {id, uid, comment_text, likes timestamp}
]

Questions = [
  {title: Title1, user: user.id,category, likes comments(subcoll), timestamp,}
]

-------------------MUST HAVES------------

- Main page with list of questions
- User´s questions page
- Question sorting by category
- Like counter for Post & Comments

-------------------Optional------------

- Images in Posts/Comments
- Swear word filter
- Emoticons for Posts only


*/

const Post = () => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 overflow-y-scroll ">
      <div className="p-5 hover:cursor-pointer">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            Post title
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Enim quibusdam non quam a deserunt odio amet consequatur
          similique officiis ut fugit blanditiis obcaecati itaque
          repellat asperiores architecto, distinctio assumenda eaque!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Animi delectus quasi assumenda quam. Mollitia, laboriosam
          asperiores perspiciatis nam officiis placeat iste animi,
          reiciendis recusandae aliquid nisi corrupti cum. Voluptas,
          ducimus?
        </p>
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-row p-2.5 justify-around">
        <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
          <h3>123</h3>
          <div className="flex flex-col justify-center">
            <div className="w-[36px] h-[36px]">{Like}</div>
            <h3>Like</h3>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
          <h3>123</h3>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[36px] h-[36px]">{Comment}</div>
            <h3>Comment</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const Posts = () => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="flex flex-col">
        <Post />
        <Post />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

const MainPage = () => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div>
          <div className="relative w-12 h-12">
            <img
              className="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user image"
            />
          </div>
        </div>
        <div className="bg-input-bg-grey text-input-text-black w-full p-2 rounded-full hover:text-input-bg-grey hover: hover:bg-input-text-black flex items-center hover:cursor-pointer">
          Ask anything
        </div>
      </div>
      <div className="flex flex-col items-start my-4">
        Sort by
        <div className="sort-table flex flex-row p-5 w-full gap-3 bg-red-300">
          <button className="inline-flex items-center px-4 py-2 gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
            {Like}
            Most liked
          </button>

          <button className="inline-flex items-center px-4 py-2 gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
            {Smile}
            Funny
          </button>
        </div>
      </div>
      <Posts />
    </div>
  );
}

const Heading = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Quora clone
            </span>
          </a>
          <div className="flex items-center lg:order-2 gap-4">
            <div className="flex">
              <div className="relative w-12 h-12">
                <img
                  className="rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt="user image"
                />
              </div>
            </div>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Logout
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My posts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <div className="container flex flex-col">
        <div className="basis 1/4">
          <Heading />
        </div>
        <div className="basis1/2 flex flex-col items-center gap-y-2">
          <div className="w-3/6">
            <MainPage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default App;
