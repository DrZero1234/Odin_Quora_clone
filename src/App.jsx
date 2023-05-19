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

- User authentication through gmail
- Main page with list of questions
- User´s questions page
- Question sorting by category
- Like counter for Post&Comments

-------------------Optional------------

- Images in Posts/Comments
- Swear word filter
- Emoticons for Posts only


*/
export const Post = () =>{
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

export const Posts = () => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="flex flex-col">
        <Post />
        <Post />
      </div>
    </div>
  );
}

export const Footer = () => {
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

export const AddQuestionModal = () =>{
  // https://flowbite.com/docs/forms/textarea/
  return (
    <div
      className="fixed inset-0 flex h-full h-screen w-full items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50"
      id="highscore-modal"
    >
      <div className="relative h-full w-full max-w-md md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-start text-xl font-medium text-gray-900 dark:text-white">
              Create a new question
            </h3>
            <h2 className="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">
              {" "}
            </h2>
            <form className="space-y-6" action="#">
              <div id="question-title">
                <label
                  htmlFor="question-title"
                  className="text-md mb-2 block text-start font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="question_title"
                  id="question-title"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  required
                  autoFocus={true}
                />
              </div>
              <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      <button
                        type="button"
                        className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Add emoji</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
                  <label htmlFor="editor" className="sr-only">
                    Publish post
                  </label>
                  <textarea
                    id="editor"
                    rows="8"
                    className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write an article..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-row justify-around">
                <button
                  type="button"
                  className="w-[30%] rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-[50%] rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MainSort = () => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div>
          <div className="relative h-12 w-12">
            <img
              className="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user image"
            />
          </div>
        </div>
        <div className="flex w-full items-center rounded-full bg-input-bg-grey p-2 text-input-text-black hover:cursor-pointer hover:bg-input-text-black hover:text-input-bg-grey">
          Ask anything
        </div>
      </div>
      <div className="my-4 flex flex-col items-start">
        Sort by
        <div className="flex flex-row w-full">
          <label
            htmlFor="countries"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="sort-table flex w-full flex-row gap-3 bg-red-300 p-5">
          <button className="inline-flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300">
            {Like}
            Most liked
          </button>

          <button className="inline-flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300">
            {Smile}
            Funny
          </button>
        </div>
      </div>
    </>
  );
}

export const MainPage=()=>{
  return (
    <div>
      <MainSort />
      <Posts />
    </div>
  );
}

export const Heading = () => {
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
            <AddQuestionModal />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default App;
