import PropTypes from "prop-types";

const Cooking = ({ cook }) => {
    return (
        <div className="w-md border-2 border-[#1E1E1E]">
            <h3 className="my-8 mx-10 text-2xl font-semibold text-[#282828] text-center">Want to cook: {cook.length}</h3>
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
                    <tbody>
                        {/* row 1 */}
                        {
                            cook.map((recipe, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipe?.recipe_name}</td>
                                <td>{recipe?.preparing_time}</td>
                                <td>{recipe?.calories}</td>
                                <td className="btn rounded-full bg-[#0BE58A] text-base font-medium text-[#150B2B]">Preparing</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cook: PropTypes.array.isRequired,
}
export default Cooking;