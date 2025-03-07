import { FaStopwatch, FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    const { recipe_name, short_description, image, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-5 space-y-3 mx-auto">
            <figure className="p-2">
                <img
                    src={image}
                    alt={recipe_name}
                    className="rounded-xl h-50 w-full" />
            </figure>
            <div className="card-body ">
                <h2 className="text-xl font-semibold text-[#282828]">{recipe_name}</h2>
                <p className="text-[#878787] text-base">{short_description}</p>
                <hr />
                <p className="text-lg font-medium text-[#282828]">Ingredients:{ingredients.length}</p>
                <ul className="list-disc">
                    {
                        ingredients.map((ing, idx) => <li className="text-lg text-[#878787]" key={idx}>{ing}</li>)
                    }
                </ul>
                <hr />
                <div className="flex justify-start">
                    <p className="flex justify-center items-center gap-1 text-[#282828CC] text-base"><FaStopwatch /> {preparing_time}</p>
                    <p className="flex justify-center items-center gap-1 text-[#282828CC] text-base"><FaFire /> {calories}</p>
                </div>
                <div className="card-actions">
                    <button className="btn bg-[#0BE58A] text-black rounded-full">Want to cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;