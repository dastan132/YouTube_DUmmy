import React from "react";

const commentsData = [
  {
    id: "c1",
    user: {
      name: "Anshul Rawat",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    comment: "This video explains Redux Toolkit really well 🔥",
    likes: 120,
    time: "2 days ago",
    replies: [
      {
        id: "c1-r1",
        user: {
          name: "Rahul Sharma",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
        comment: "Totally agree! The cache part was 🔥",
        likes: 25,
        time: "1 day ago",
        replies: [],
      },

      {
        id: "c1-r2",
        user: {
          name: "Sneha Verma",
          avatar: "https://i.pravatar.cc/150?img=3",
        },
        comment: "Can you share the GitHub repo?",
        likes: 10,
        time: "12 hours ago",
        replies: [
          {
            id: "c1-r2-r1",
            user: {
              name: "Anshul Rawat",
              avatar: "https://i.pravatar.cc/150?img=1",
            },
            comment: "Sure, I’ll add it in the description 👍",
            likes: 5,
            time: "10 hours ago",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "c2",
    user: {
      name: "Mohit Singh",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    comment: "Best explanation for beginners 👏",
    likes: 60,
    time: "3 days ago",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { user, name, comment, text } = data;

  return (
    <div className="flex gap-3 my-4 shadow-sm bg-gray-50">
      <img
        className="w-10 h-10 rounded-full"
        src={user?.avatar || "https://i.pravatar.cc/150"}
        alt="user"
      />

      <div>
        <p className="font-semibold">
          {user?.name || name}
        </p>
        <p className="text-sm text-gray-700">
          {comment || text}
        </p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={comment.id || index}>
      <Comment data={comment} />

      {/* RECURSION */}
      {comment.replies?.length > 0 && (
        <div className="ml-6 border-l pl-4">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};


const CommentContainer = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;


