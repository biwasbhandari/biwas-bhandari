import { Link } from "react-router-dom";
import React from "react";
import { FaTwitter } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  designation: string;
  comment: string;
  twitter?: string;
}

const Review: React.FC<ReviewCardProps> = ({
  name,
  designation,
  comment,
  twitter,
}) => {
  return (
    <div className="max-w-md mx-auto mb-8  rounded-md overflow-hidden shadow-lg border-r">
      <div className="p-4">
        {twitter && (
          <Link
            to={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center mt-2 hover:underline"
          >
            <FaTwitter className="mr-2" />
            {name}
          </Link>
        )}
        <div className=" text-sm text-secondary-foreground mb-2">
          {designation}
        </div>
        <p className="text-muted-foreground">{comment}</p>
      </div>
    </div>
  );
};

export default Review;
