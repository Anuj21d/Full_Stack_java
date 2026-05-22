import { ArrowRight } from "lucide-react";

const CardText = (props) => {
  return (
    <div className="absolute top-0 left-0 p-10 flex flex-col justify-between w-full h-full">
        <span className="p-6 text-xl font-semibold bg-white shadow-lg h-12 w-12 flex justify-center items-center rounded-full">{props.id+1}</span>
        <div>
          <p className="text-white font-medium text-shadow-gray text-shadow-md text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem mollitia fugit ratione beatae voluptates facilis.
          </p>
          <div className="flex justify-between items-center mt-10">
            <button className="px-12 py-4 bg-blue-600 rounded-full text-white font-semibold shadow-lg">{props.tag}</button>
            <button className="p-4 bg-blue-600 rounded-full text-white font-semibold shadow-lg">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default CardText
