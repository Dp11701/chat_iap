import React from "react";
import CommentCard from "../Card/CommentCard";
import { User } from "@/components/Atoms/Card/CommentCard";

const CommentGrid = (props: {
  comments: Array<{ comment: string; name: string; user: User }>;
}) => {
  const items = props.comments;
  const duplicated = [...items, ...items];
  return (
    <>
      {/* Mobile: 1 column grid (hidden on tablet range) */}
      {/* <div className="grid grid-cols-1 gap-[24px] w-full px-4 tablet-hide sm:hidden">
        {items.map((comment) => (
          <CommentCard
            key={`m-${comment.name}`}
            comment={comment.comment}
            name={comment.name}
            user={comment.user}
          />
        ))}
      </div> */}

      {/* Tablet: marquee (375 <= width < 1280) */}
      <div className="tablet-marquee w-full px-4">
        <div className="tablet-marquee-track">
          {duplicated.map((comment, idx) => (
            <div key={`t-${comment.name}-${idx}`} className="min-w-[320px]">
              <CommentCard
                comment={comment.comment}
                name={comment.name}
                user={comment.user}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3 column grid (>= 1280) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] sm:w-[1200px] w-full sm:px-0 px-4">
        {props.comments.map((comment) => (
          <CommentCard
            key={comment.name}
            comment={comment.comment}
            name={comment.name}
            user={comment.user}
          />
        ))}
      </div>
    </>
  );
};

export default CommentGrid;
