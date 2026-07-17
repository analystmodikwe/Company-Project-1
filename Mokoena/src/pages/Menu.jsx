import { cakes } from "../data/cakesData.js";
import { everydayTreats } from "../data/everydayData.js";

// menu
function Menu() {
  return (
    <div>
      <div>
        {/*cakes category */}
        <h3>CAKES</h3>

        {/* each image card from the array lives here */}
        {/* .map will perform a function in every original array and then return a new array with newly performed function */}
        <div>
          {cakes.map((cake) => (
            // key is for react to know which array is which it tracks the id or index of an array
            <div key={cake.name}>
              {/* image per Array */}
              <div>
                <image src={cake.image} alt={cake.name} />
              </div>

              {/* image name and price */}
              <div>
                <h3>{cake.name}</h3>
                <h4>{cake.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Treats category */}
      <div>
        <h3>EVERYDAY TREATS</h3>

        {/* each image card from the array lives here */}
        {/* .map will perform a function in every original array and then return a new array with newly performed function */}
        <div>
          {everydayTreats.map((treat) => (
            // key is for react to know which array is which it tracks the id or index of an array
            <div key={treat.name}>
              {/* image per Array */}
              <div>
                <image src={treat.image} alt={treat.name} />
              </div>

              {/* image name and price */}
              <div>
                <h3>{treat.name}</h3>
                <h4>{treat.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
