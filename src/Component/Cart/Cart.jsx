import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const Cart = ({
    selectedCourse,
    remainingTime,
    totalCost,
    totalCreditHour,
    handleRemoveFromCart,
}) => {
    return (
        <div className="mx-6 lg:mx-0 lg:w-[320px]">
            <div className=" py-6 bg-white rounded-xl px-6">
                <h1 className="font-bold text-lg text-[#2F80ED] ">
                    Credit Hour Remaining {remainingTime} hr
                </h1>
                <div className="divider mx-auto my-2"></div>
                <div className="space-y-2">
                    <h1 className="font-bold text-lg text-[#1C1B1B] mb-4">Course Name</h1>
                    <ol className="list-decimal text-base font-semibold space-y-2 ml-4">
                        {selectedCourse.map((card, idx) => (
                            <div key={idx} className="flex gap-1">
                                <li>{card.course_name}</li>
                                <button
                                    className="text-red-600 text-lg"
                                    onClick={() => handleRemoveFromCart(card)}
                                >
                                    <FontAwesomeIcon icon={faRemove} />
                                </button>
                            </div>
                        ))}
                    </ol>
                </div>
                <div>
                    <div className="divider mx-auto my-1"></div>
                    <h3 className="text-[#111111bd] text-lg font-semibold ">
                        Total Credit Hour : {totalCreditHour}
                    </h3>
                    <div className="divider  mx-auto my-2"></div>
                    <h3 className="text-[#111111bd] text-lg font-semibold ">
                        Total Price : {totalCost} USD
                    </h3>
                </div>
            </div>
        </div>
    );
};
Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    remainingTime: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    totalCreditHour: PropTypes.number.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};
export default Cart;
