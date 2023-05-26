import { Smile,Like } from "../utils/icons";

export const MainSort = () => {
  const CATEGORIES = [
    { caption: "Politics", id: 1 },
    { caption: "Tech", id: 2 },
    { caption: "Entertainment", id: 3 },
    { caption: "Sport", id: 4 },
    { caption: "Science", id: 5 },
  ];

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
        <div className="flex w-full flex-row">
          <label
            htmlFor="countries"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="" defaultValue></option>
            {CATEGORIES.map((category) => (
              <option value={category.id} key={category.id}>
                {category.caption}
              </option>
            ))}
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
};
