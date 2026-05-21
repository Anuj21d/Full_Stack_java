import Card from "../components/Card";

const App = () => {
  const jobs = [
    {
      companyLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
      companyName: "Google",
      posted: "2 days ago",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG20zHjiZTp54nUhQC_A_RPkRGylGz65LhA&s",
      companyName: "Microsoft",
      posted: "1 week ago",
      role: "React Developer",
      tag1: "Part Time",
      tag2: "Fresher",
      pay: "$60/hr",
      location: "Pune, India",
    },
    {
      companyLogo: "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-current-Logo-2.jpg",
      companyName: "Amazon",
      posted: "5 days ago",
      role: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hr",
      location: "Bangalore, India",
    },
    {
      companyLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      posted: "3 weeks ago",
      role: "Backend Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Hyderabad, India",
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      companyName: "Meta",
      posted: "4 days ago",
      role: "MERN Stack Developer",
      tag1: "Internship",
      tag2: "Fresher",
      pay: "$40/hr",
      location: "Delhi, India",
    },
    {
      companyLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      posted: "2 weeks ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$180/hr",
      location: "Chennai, India",
    },
    {
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1KTr8XuO4PGG388mREAcdl1jg9CfBfBQYw&s",
      companyName: "Adobe",
      posted: "6 days ago",
      role: "Graphic Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Kolkata, India",
    },
    {
      companyLogo: "https://cdn-icons-png.flaticon.com/512/725/725281.png",
      companyName: "Spotify",
      posted: "1 day ago",
      role: "Mobile App Developer",
      tag1: "Full Time",
      tag2: "Fresher",
      pay: "$85/hr",
      location: "Noida, India",
    },
    {
      companyLogo: "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG12.png",
      companyName: "Tesla",
      posted: "10 days ago",
      role: "Data Analyst",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Ahmedabad, India",
    },
    {
      companyLogo: "https://i.pcmag.com/imagery/articles/01yFcoWt46kjgmGH7WKRu2t-3..v1569489046.jpg",
      companyName: "Airbnb",
      posted: "2 months ago",
      role: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Goa, India",
    },
  ];
  return (
    <div className="App">
      {jobs.map(function (job, idx) {
        return (
          <div key={idx}>
            <Card
              companyLogo={job.companyLogo}
              companyName={job.companyName}
              posted={job.posted}
              role={job.role}
              tag1={job.tag1}
              tag2={job.tag2}
              pay={job.pay}
              location={job.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
