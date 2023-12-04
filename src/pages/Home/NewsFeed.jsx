import CreatePost from "../CreatePost";

const NewsFeed = () => {
  return (
    <div
      role="main"
      className="flex-shrink justify-center overflow-y-auto px-8 flex flex-row flex-grow items-stretch basis-[744px]"
    >
      <CreatePost />
    </div>
  );
};

export default NewsFeed;
