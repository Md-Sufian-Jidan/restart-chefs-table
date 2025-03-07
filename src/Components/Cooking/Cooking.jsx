import PropTypes from "prop-types";

const Cooking = ({ cook, handlePreparing, prepare }) => {
    console.log(cook);
    return (
        <div className="w-md border-2 border-[#1E1E1E]">
            <h3 className="my-8 mx-10 text-2xl font-semibold text-[#282828] text-center">Want to cook: {cook?.length}</h3>
            {/* want to cook table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#28282808]">
                        {/* row 1 */}
                        {
                            cook?.map((recipe, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipe?.recipe_name}</td>
                                <td>{recipe?.preparing_time}</td>
                                <td>{recipe?.calories}</td>
                                <td onClick={() => handlePreparing(recipe)} className="btn rounded-full bg-[#0BE58A] text-base font-medium text-[#150B2B]">Preparing</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Preparing table */}
            <h3 className="my-8 mx-10 text-2xl font-semibold text-[#282828] text-center">Currently Cooking: {prepare?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#28282808]">
                        {/* row 1 */}
                        {
                            prepare.map((recipe, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipe?.recipe_name}</td>
                                <td>{recipe?.preparing_time}</td>
                                <td>{recipe?.calories}</td>
                                {/* <td onClick={() => handlePreparing(recipe)} className="btn rounded-full bg-[#0BE58A] text-base font-medium text-[#150B2B]">Preparing</td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* total calculation */}
            <div className='flex flex-col items-end my-5'>
                <p className='font-medium'>Total Time : {prepare.reduce((p, c) => p + parseFloat(c?.preparing_time.slice(0, 2)), 0)} Minutes</p>
                <p className='font-medium'>Total Calories : {prepare.reduce((p, c) => p + parseFloat(c?.calories), 0)} Calories</p>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cook: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    prepare: PropTypes.object.isRequired,
}
export default Cooking;