import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, ThemeChangeButton, FormWrapper, RequestForm, 
  InfoWrapper, regularTheme, darkTheme } from './styledElements';
import UserInputContent from './components/UserInputContent';
import LoaderObject from './components/Loader';
import { useSelector } from 'react-redux';
import { whetherShowLoaderSelector, showDataSelector } from './weather/selectors';
import ContentHolder from './components/ContentHolder';
import { useDispatch } from 'react-redux';
import { toggleTheme as tg} from './theming/actions'; // Avoid name collision.
import { themeSelector } from './theming/selectors';
import { REGULAR_THEME } from './theming/constants';

// Main React element.
export default function App() 
{
  const dispatch = useDispatch()

  const toggleTheme = () => dispatch(tg())
  const toggleButton = <ThemeChangeButton onClick={toggleTheme}>Change theme</ThemeChangeButton>

  const showLoader = useSelector(whetherShowLoaderSelector)
  const showData = useSelector(showDataSelector)
  const themeValue = useSelector(themeSelector)

  return (
    <ThemeProvider theme={themeValue === REGULAR_THEME ? regularTheme : darkTheme}>
      <GlobalStyle />
        <FormWrapper>
          <RequestForm onSubmit={(e) => e.preventDefault()}>
            <UserInputContent/>
            <InfoWrapper>
              {showLoader && <LoaderObject/>}
              {showData && <ContentHolder/>}
            </InfoWrapper>
            {toggleButton}
          </RequestForm>
        </FormWrapper>
    </ThemeProvider>
  )
}

