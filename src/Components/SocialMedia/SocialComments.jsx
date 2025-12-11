import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

// Optional: bad comment check function
const badWords = ["badword1", "badword2", "spam", "offensive"]; // Replace with actual bad words
const isBadComment = (text) => {
  return badWords.some((word) => text.toLowerCase().includes(word));
};

export default function SocialComments() {
  const [posts, setPosts] = useState([]);
  const [selectedLikes, setSelectedLikes] = useState(null);
  const [selectedComments, setSelectedComments] = useState(null);

  useEffect(() => {
    fetch("/public/comments.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow overflow-hidden relative"
            >
              {/* User Info */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <p className="text-gray-500 text-sm">{post.time}</p>
                  </div>
                </div>
              </div>

              {/* Post Image */}
              <img src={post.image} alt="Post" className="w-full object-cover" />

              {/* Caption */}
              <div className="p-3">
                <p>{post.caption}</p>
              </div>

              {/* Like / Comment Footer */}
              <div className="flex border-t border-gray-200">
                <button
                  className="flex-1 flex items-center justify-center gap-1 p-3 hover:text-blue-500"
                  onClick={() =>
                    setSelectedLikes(selectedLikes === post.id ? null : post.id)
                  }
                >
                  👍 <span>{post.likes?.length || 0}</span>
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-1 p-3 hover:text-[#01cdcc]"
                  onClick={() =>
                    setSelectedComments(
                      selectedComments === post.id ? null : post.id
                    )
                  }
                >
                  💬 <span>{post.commentsList?.length || 0}</span>
                </button>
              </div>

              {/* Likes Modal */}
              {selectedLikes === post.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white shadow-lg border border-gray-200 rounded-lg z-50 p-4">
                  <h4 className="font-semibold mb-2 text-center">Liked by:</h4>
                  <ul className="list-disc pl-5">
                    {(post.likes || []).map((user, idx) => (
                      <li key={idx}>{user}</li>
                    ))}
                  </ul>
                  <button
                    className="absolute top-1 right-2 text-gray-500 hover:text-red-500"
                    onClick={() => setSelectedLikes(null)}
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Comments Modal */}
              {selectedComments === post.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-white shadow-lg border border-gray-200 rounded-lg z-50 p-4">
                  <h4 className="font-semibold mb-2 text-center">Comments:</h4>
                  <ul className="space-y-2 max-h-48 overflow-y-auto">
                    {(post.commentsList || []).map((c, idx) => (
                      <li
                        key={idx}
                        className={isBadComment(c.text) ? "text-red-600 font-semibold" : ""}
                      >
                        <span className="font-semibold">{c.user}: </span>
                        <span>{c.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="absolute top-1 right-2 text-gray-500 hover:text-[#01cdcc]"
                    onClick={() => setSelectedComments(null)}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
