import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Sena";
  const recipeItem = {
    title: "Adana Kebap",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Adana kebabı, Adana'ya özgü, zırh adı verilen, satıra benzer bir bıçak ile elde kıyılan parça etten yapılan Türk mutfağında bir kebap veya şiş köfte çeşidi. Adana kebabını diğer kebaplardan ayıran en belirgin özellik kullanılan ettir."
  };

  const likeCount = 18973;
  const isLiked = false;


  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          recipe={recipeItem.description}
          title={recipeItem.title}
          date={recipeItem.date}
          img={recipeItem.image}
          count={likeCount}
          liked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;
