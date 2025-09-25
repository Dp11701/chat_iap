import React from "react";
import CommentCard from "../Card/CommentCard";
import { User } from "@/components/Atoms/Card/CommentCard";

const CommentGrid = (props: {
  comments: Array<{ comment: string; name: string; user: User }>;
}) => {
  return (
    <div className="grid grid-cols-3 gap-[24px] w-[1200px]">
      {props.comments.map((comment) => (
        <CommentCard
          key={comment.name}
          comment={comment.comment}
          name={comment.name}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default CommentGrid;
