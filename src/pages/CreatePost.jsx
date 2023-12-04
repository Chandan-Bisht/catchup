const CreatePost = () => {
  return (
    <div className="bg-white mt-8 px-4 max-w-xl w-full rounded-lg shadow">
      <form className="py-3 space-y-2">
        <div className="flex items-center gap-4">
          <img
            className="w-9 h-9 rounded-full bg-center bg-cover bg-no-repeat"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
            alt="profile-photo"
          />
          <input
            type="search"
            className="py-2 px-4 w-full rounded-full bg-gray-100 text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Share something"
          />
        </div>
        <hr className="" />
      </form>
    </div>
  );
};

export default CreatePost;
