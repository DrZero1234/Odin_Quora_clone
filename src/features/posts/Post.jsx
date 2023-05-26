import { Like } from "../../utils/icons";

export const Post = () => {
  return (
    <div className="mb-5 max-w-sm overflow-y-scroll rounded-lg border border-gray-200 bg-white shadow-md ">
      <div className="p-5 hover:cursor-pointer">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Post title
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
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
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="flex flex-row justify-around p-2.5">
        <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
          <h3>123</h3>
          <div className="flex flex-col justify-center">
            <div className="h-[36px] w-[36px]">{Like}</div>
            <h3>Like</h3>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1.5 hover:cursor-pointer">
          <h3>123</h3>
          <div className="flex flex-col items-center justify-center">
            <div className="h-[36px] w-[36px]">{Comment}</div>
            <h3>Comment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
