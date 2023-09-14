const Cart = ({ selectedCourse }) => {
    return (
        <div className="mx-6 lg:mx-0 lg:w-[300px]">
            <div className=" py-6 bg-white rounded-xl px-6">
                <h1 className="font-bold text-lg text-[#2F80ED] ">Credit Hour Remaining 7 hr</h1>
                <div className="divider mx-auto my-2"></div>
                <div className="space-y-2">
                    <h1 className="font-bold text-lg text-[#1C1B1B] mb-4">Course Name</h1>
                    <ol className="list-decimal text-base font-semibold space-y-2 ml-4">
                        {selectedCourse.map((card, idx) => (
                            <li key={idx}>{card.course_name}</li>
                        ))}
                    </ol>
                </div>
                <div>
                    <div className="divider mx-auto my-1"></div>
                    <h3 className="text-[#111111bd] text-lg font-semibold ">Total Credit Hour:</h3>
                    <div className="divider  mx-auto my-2"></div>
                    <h3 className="text-[#111111bd] text-lg font-semibold ">Total Price :</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
