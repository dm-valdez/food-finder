import styled from 'styled-components';

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0
`;
export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 12px;
`;

export const CompleteRecipe = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;