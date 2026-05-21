import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
            <img
              src={props.companyLogo}
              alt="Company Logo"
            />
            <button>
              Save <Bookmark size={12} strokeWidth={1.25} color="#b1b1b1" />
            </button>
          </div>
          <div className="center">
            <h3>
              {props.companyName} <span>{props.posted}</span>
            </h3>
            <h2>{props.role}</h2>
            <div className="tags">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
