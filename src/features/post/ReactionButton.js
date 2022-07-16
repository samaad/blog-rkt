import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsup: "👍🏻",
  wow: "😲",
  heart: "♥️",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtos = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButtos}</div>;
};

export default ReactionButton;
