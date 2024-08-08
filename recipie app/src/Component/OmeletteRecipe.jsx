import React from "react";
import omllet from "../assets/image-omelette.jpeg";
const OmeletteRecipe = () => {
  return (
    <div className="font-serif h-full w-full  lg:px-72 bg-pink lg:flex flex-col items-center lg:py-24">
      <div className=" lg:h-fit lg:w-fit  lg:rounded-md bg-white">
        <div className="lg:px-6 lg:py-4 lg:pt-8">
          <img className=" lg:w-full lg:rounded-lg" src={omllet} alt="" />
        </div>
        <div className="px-6 py-4 space-y-4">
          <p className="font-bold text-4xl "> Simple Omelette Recipe</p>
          <p className="text-gray">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="px-6 py-4 space-y-4 ">
          <div className="h-fit w-full bg-pinkLite rounded-md py-4 pl-4">
            <p className=" font-bold text-dippink pb-2">Preparation time</p>
            <ul className="list-disc marker:text-dippink pl-5 space-y-1 text-gray">
              <li>
                <span className="font-bold text-gray">Total</span>:
                Approximately 10 minutes
              </li>
              <li>
                <span className="font-bold text-gray">Preparation</span>: 5
                minutes
              </li>
              <li>
                <span className="font-bold text-gray">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
        </div>
        <div className="px-6 py-4 space-y-4 ">
          <p className="text-2xl font-bold text-Amber ">Ingredients</p>
          <ul className="list-disc marker:text-Amber pl-5 space-y-1 border-b border-gray pb-5 text-gray">
            <li> 2-3 large eggs</li>
            <li> Salt, to taste</li>
            <li> Pepper, to taste</li>
            <li> 1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div className="px-6 py-4 space-y-4 ">
          <p className="text-2xl font-bold text-Amber "> Instructions</p>
          <ul className="list-decimal marker:text-Amber pl-5 border-b border-gray pb-5 space-y-1">
            <li className="text-gray">
              <span className="font-bold text-gray">Beat the eggs</span> : In a
              bowl, beat the eggs with a pinch of salt and pepper until they are
              well mixed. You can add a tablespoon of water or milk for a
              fluffier texture.
            </li>
            <li className="text-gray">
              <span className="font-bold ">Heat the pan</span>: Place a
              non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className="text-gray">
              <span className="font-bold "> Cook the omelette</span>: Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>
            <li className="text-gray">
              <span className="font-bold ">Add fillings (optional)</span>: When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li className="text-gray">
              <span className="font-bold text-gray">Fold and serve</span>: As
              the omelette continues to cook, carefully lift one edge and fold
              it over the fillings. Let it cook for another minute, then slide
              it onto a plate.
            </li>
            <li className="text-gray">
              <span className="font-bold ">Enjoy</span> : Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ul>
        </div>
        <div class="px-6 py-4 space-y-4 lg:pb-14">
          <h2 class="text-2xl font-bold text-Amber ">Nutrition</h2>
          <p class="text-sm mb-2 text-gray">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table class="w-full ">
            <tbody>
              <tr>
                <td class="px-4 py-2 border-b text-gray">Calories</td>
                <td class="px-4 py-2 border-b border-gray font-bold text-Amber">
                  277kcal
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-b text-gray">Carbs</td>
                <td class="px-4 py-2 border-b border-gray font-bold text-Amber">
                  0g
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-b text-gray">Protein</td>
                <td class="px-4 py-2 border-b border-gray font-bold text-Amber">
                  20g
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-b text-gray">Fat</td>
                <td class="px-4 py-2 border-b border-gray font-bold text-Amber">
                  22g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OmeletteRecipe;
