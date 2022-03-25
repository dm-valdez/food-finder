import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

import Header from './components/HeaderComponent';
import Recipe from './components/RecipeComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

const Placeholder = styled.img`
  width: 320px;
  height: 320px;
  margin: 200px;
  opacity: 50%;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">{recipeObj.label}</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>See More</Recipe.IngredientsText>
          <Recipe.CompleteRecipe onClick={() => setShow("")}>Close</Recipe.CompleteRecipe>
        </DialogActions>
      </Dialog>
      <Recipe.RecipeContainer>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setShow(true)}>Ingredients</Recipe.IngredientsText>
        <Recipe.CompleteRecipe onClick={() => window.open(recipeObj.url)}>Complete Recipe</Recipe.CompleteRecipe>
      </Recipe.RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, updateTimoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${process.env.REACT_APP_FOOD_ID}&app_key=${process.env.REACT_APP_FOOD_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimoutId(timeout);
  };

  return (
    <Container>
      <Header.Header>
        <Header.AppNameComponent><Header.AppIcon src='/recipe-icon.svg' />Food Finder</Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="/search-icon.svg" />
          <Header.SearchInput placeholder='Search Food' onChange={onTextChange} />
        </Header.SearchComponent>
      </Header.Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src='/recipe-icon.svg' />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
