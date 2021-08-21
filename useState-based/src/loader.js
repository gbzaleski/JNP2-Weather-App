import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useTheme } from 'styled-components';

// Temporal object to show while user is waiting for weather information.
export default function LoaderObject() 
{
    // So changing theme mid-loading a request with apply new colours to the loader.
    const theme = useTheme()

    return (
      <Loader
        type="Oval"
        color={theme.colors.boardcolor}
        height={150}
        width={150}
      />
    );
}
