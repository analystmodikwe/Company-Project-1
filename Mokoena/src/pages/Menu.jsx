// imports for the cake category images
import ClassicChocolate from "../images/cakes/ClassicChocolate.jpg";
import LemonDrizzle from "../images/cakes/LemonDrizzle.jpg";
import NutellaChocolate from "../images/cakes/NutellaChocolate.jpg";
import RedVelvet from "../images/cakes/RedVelvet.jpg";
import VanillaSponge from "../images/cakes/VanillaSponge.jpg";
import WeddingCake from "../images/cakes/WeddingCake.jpg";

// an array for different pictures
const cakes = [
  { name: "Classic Chocolate", image: ClassicChocolate, price: `R ${100}` },
  { name: "Lemon Drizzle", image: LemonDrizzle, price: `R ${100}` },
  { name: "Nutella Chocolate", image: NutellaChocolate, price: `R ${100}` },
  { name: "Red Velvet", image: RedVelvet, price: `R ${100}` },
  { name: "Vanilla Sponge ", image: VanillaSponge , price: `R ${100}` },
  { name: "Wedding Cake's", image: ClassicChocolate, price: `from R ${100} depending on your desired style`},
];

// menu
function Menu() {
  return (
    <div>
      <div>

        {/*cakes category heading */}
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
    </div>
  );
}

export default Menu;
