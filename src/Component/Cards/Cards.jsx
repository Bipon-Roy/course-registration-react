import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faBookOpen } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("./course.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);
    return (
        <div className="max-w-[1340px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0">
                {cards.map((card) => (
                    <div key={card.id} className="card bg-base-100">
                        <figure className="bg-[#1111110D] mx-5 mt-6 mb-4 rounded-xl">
                            <img src={card.image} className="w-full" alt="Course Image" />
                        </figure>
                        <div className="space-y-2">
                            <p className="text-[#1C1B1B] font-bold text-xl mx-6">
                                {card.course_name}
                            </p>
                            <p className="text-[#1111118d] text-lg mx-6">{card.course_details}</p>
                        </div>
                        <div className="flex mx-10 my-3 justify-between">
                            <span className="text-[#1C1B1B] text-2xl ">
                                <FontAwesomeIcon icon={faDollarSign} />
                            </span>
                            <p className="text-[#1111118d] text-lg font-semibold">
                                Price : {card.price}
                            </p>

                            <span className="text-[#1C1B1B] text-2xl ">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                            <p className="text-[#1111118d] text-lg font-semibold">
                                Credit : {card.credit}hr
                            </p>
                        </div>
                        <button className="btn bg-[#2F80ED] mb-5 text-white font-medium text-lg mx-6">
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
