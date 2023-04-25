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

// BrowserRouterは、
// React Routerのブラウザルーターであり、アプリケーション内でページ間のルーティングを実現します。
// Routerは、アプリケーション内で使用される具体的なルートを定義するために使用されます。

// 全体の流れ
// このコードは、App という名前のデフォルトエクスポートを持つ関数を定義しています。
// この関数は、Reactアプリケーションのエントリーポイントであり、ChakraProvider コンポーネントでアプリケーションをChakra UIのテーマでラップし、
// BrowserRouter コンポーネントで React Router のルーターをラップして、 Router コンポーネントをレンダリングします。
// BrowserRouter は、ブラウザのURLを使ってページを切り替えるためのもので、 Router コンポーネントは、定義されたルートに基づいて、異なるページをレンダリングします。


