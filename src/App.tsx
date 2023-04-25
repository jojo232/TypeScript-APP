import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

// ChakraProviderは、Chakra UIというUIライブラリのコンポーネントを使用するためのプロバイダーであり、
// themeプロパティによって、アプリケーション全体のテーマを設定することができます。


// export defaultは、モジュールからデフォルトのエクスポートを提供するための構文。
// この構文を使用すると、モジュールが1つの値または関数をエクスポートできるようになります。
// 他のモジュールからは、デフォルトのエクスポートは単一の変数としてインポートする
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
// テーマを渡してあげてtheme={theme}

