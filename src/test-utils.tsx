import React, { ReactElement, ReactNode, ComponentType } from "react";
import {
  render as rtlRender,
  RenderResult,
  RenderOptions,
} from "@testing-library/react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles";
import rootReducer, { initialState as defaultState } from "./reducers";
import { State } from "./types";

type AllProvidersProps = {
  children: ReactElement | ReactElement[] | ReactNode;
};

type OptionsType = {
  initialState?: Partial<State>;
  store?: Store;
} & RenderOptions;

const render = (
  ui: ReactElement,
  {
    initialState,
    store = createStore(rootReducer, {
      ...defaultState,
      ...initialState,
    }),
    ...renderOptions
  }: OptionsType
): RenderResult => {
  const Wrapper = ({ children }: AllProvidersProps): ReactElement => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };
  return rtlRender(ui, {
    wrapper: Wrapper as ComponentType,
    ...renderOptions,
  });
};

// const Wrapper = ({ children }: AllProvidersProps): ReactElement => {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <GlobalStyles />
//         {children}
//       </ThemeProvider>
//     </Provider>
//   );
// };

// const render = (
//   ui: ReactElement,
//   state: State,
//   store: Store = createStore(reducer, state)
//   options?: RenderOptions =
// ): RenderResult =>
//   render(ui, { wrapper: Wrapper as ComponentType, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
