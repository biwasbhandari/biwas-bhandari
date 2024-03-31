import Review from "./Review";

const ReviewCard = () => {
  const reviews = [
    {
      name: "Sajina Shrestha",
      designation: "Digital Marketing",
      comment:
        "Very kind and colaborative people with good knowledge of SEO too.",
      twitter: "https://twitter.com/Anijas22",
    },
    {
      name: "Nirajan Malla",
      designation: "Fullstack Developer",
      comment: "Very flexible to work with them and solves the problem fast",
      twitter: "https://twitter.com/coderNirajan",
    },
    {
      name: "Pratik Thapa",
      designation: "Frontend Developer",
      comment:
        "Collaborative and helpful behaviour. It was good to work with them",
      twitter: "https://twitter.com/pratikthapw",
    },
    {
      name: "Dawa Sherpa",
      designation: "UX/UI Designer",
      comment:
        "Excellent eye for design and attention to detail. Always delivers high-quality work.",
      twitter: "https://twitter.com/dawasherpa",
    },
    {
      name: "Bikendra Shrestha",
      designation: "Backend Developer",
      comment:
        "Great problem-solving skills and a strong team player. Highly recommend!",
      twitter: "https://twitter.com/BikendraSh44853",
    },
    {
      name: "Binaya Tripathi",
      designation: "Project Manager",
      comment:
        "Efficient and organized. Keeps the project on track and communicates effectively.",
      twitter: "https://twitter.com/binaya_btc",
    },
  ];

  return (
    <div
      className="container mx-auto py-8 min-h-screen flex justify-center items-center flex-col border-b"
      id="review"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        What People Say about Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
