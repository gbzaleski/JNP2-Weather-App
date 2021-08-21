import styled, { css, createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

// All HTML objects styled with styled components framework.
export const regularTheme = {
    colors: {
        boardcolor: "navy",
        backgroundcolor: "white",
        panelcolor: "#fff",
        contrastcolor: "white",
      }
  };

  export const darkTheme = {
    colors: {
        boardcolor: "gold",
        backgroundcolor: "#272727",
        panelcolor: "#4d4747",
        contrastcolor: "black",
      }
  };

// Local css constants.
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: -40px;
  margin-bottom: 20px;
`;

export const TitleBanner = styled.h1`
  justify-content: center;
  text-align: center;
  margin-top: 0px;
`;

export const RequestForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: ${theme('colors.panelcolor')};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  width: 150%;
  ${sharedStyles}
`;

// Shared parameters for buttons.
const ButtonParameters = css`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  ${ButtonParameters}
  margin-bottom: 20px;
`;

export const LocationButton = styled.button`
  ${ButtonParameters}
  display: inline;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 10px;
  height: 30px;
  color: ${theme('colors.contrastcolor')};
  background-color: ${theme('colors.boardcolor')};
`;

export const ThemeChangeButton = styled.button`
  ${ButtonParameters}
  margin: 0 auto;
  margin-top: 10px;
  color: ${theme('colors.contrastcolor')};
  background-color: ${theme('colors.boardcolor')};
`;

export const GifField = styled.img`
  max-width: 60%;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend 
  {
    padding: 0 10px;
  }
  label 
  {
    padding-right: 20px;
  }
  input 
  {
    margin-right: 10px;
  }
`;

export const HorizontalLine = styled.div`
  border-top: 1px dashed ${theme('colors.boardcolor')};
  width: 100%;
`;

export const DivTip = styled.div`
  color: ${theme('colors.boardcolor')};
  background-color: ${theme('colors.panelcolor')};
`;

export const DivTipHighlight = styled.div`
  background-color: ${theme('colors.boardcolor')};
  color: ${theme('colors.contrastcolor')};
  cursor: pointer;
`;

export const GlobalStyle = createGlobalStyle`
  html 
  {
    height: 100%;
  }

  body 
  {
    background-color: ${theme('colors.backgroundcolor')};
    color: ${theme('colors.boardcolor')};
    padding-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
  }
`;
