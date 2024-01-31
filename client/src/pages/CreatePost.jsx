import { useState } from "react";
import Dropzone from "react-dropzone";
import { AttachmentIcon, DeleteOutlinedIcon, ImageIcon, MicIcon } from "../components/Icons";

const CreatePost = () => {
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");

  console.log(image)

  const handlePost = async () => {
    const formData = new FormData();
    // formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    // const response = await fetch(`http://localhost:3001/posts`, {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${token}`},
    //   body: formData
    // })

    // const posts = await response.json();
    // dispatch(setPosts({ posts }))
    // setImage(null)
    // setPost("")
  }
  return (
    <div className="bg-white mt-8 px-6 pt-6 max-w-2xl w-full rounded-xl shadow">
      <form className="pb-3 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center gap-6">
          <img
            className="w-14 h-14 rounded-full bg-center bg-cover bg-no-repeat"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
            alt="profile-photo"
          />
          <input
            type="search"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="p-4 w-full rounded-full bg-gray-100 text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Share something"
          />
        </div>
        {isImage && (
          <div className="p-4 mt-4 border rounded-md">
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <div className="flex items-center">
                  <div {...getRootProps()} className="w-full p-4 border-2 border-dashed hover:cursor-pointer">
                    <input {...getInputProps()} />
                    {!image ? (
                      <p>Add Image Here</p>
                    ) : (
                      <div className="flex">
                        <img src={image.path} alt={image.name} />
                      </div>
                    )}
                  </div>
                  {image && (
                    <button className="w-[15%]" onClick={() => setImage(null)}>
                      <DeleteOutlinedIcon className="w-5 h-5 fill-red-500 mx-auto" />
                    </button>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        )}
        <hr />
        <div className="flex items-center justify-between">
          <button onClick={() => setIsImage(true)} className="flex items-center text-base font-normal text-gray-500">
            <ImageIcon className="w-5 h-5 fill-gray-400 mr-2" />
            Photo
          </button>
          <button className="flex items-center text-base font-normal text-gray-500">
            <ImageIcon className="w-5 h-5 fill-gray-400 mr-2" />
            Clip
          </button>
          <button className="flex items-center text-base font-normal text-gray-500">
            <AttachmentIcon className="w-5 h-5 fill-gray-400 mr-2 -rotate-45" />
            Attachment
          </button>
          <button className="flex items-center text-base font-normal text-gray-500">
            <MicIcon className="w-5 h-5 fill-gray-400 mr-2" />
            Audio
          </button>
          <button onClick={handlePost} className="flex items-center justify-center text-base font-medium px-4 py-1 bg-blue-500 text-white uppercase w-16 rounded">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
