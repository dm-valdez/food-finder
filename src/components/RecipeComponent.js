import styled from 'styled-components';

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;
const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin: 20px 0;
`;
const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px #4d3d36;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 12px;
  &:hover {
      background-color: #ffe6b8;
      color: #4d3d36;
      font-weight: 700;
  }
`;

const CompleteRecipe = styled(IngredientsText)`
  border: solid 1px #4d3d36;
`;

export default {
    RecipeContainer,
    CoverImage,
    RecipeName,
    IngredientsText,
    CompleteRecipe
};