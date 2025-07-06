import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
${reset}
  :root {
    --font-sans: 'Inter', sans-serif;

    /* spacing scale */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;


    /* elements */
    --top-bar-height: 3rem;
  }

  * {
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    background: var(--color-bg);
    color: var(--color-text);
    transition: background-color 0.7s ease, color 0.5s ease;
  }

  section {
    margin-bottom: 4rem;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;  
  }
`;
