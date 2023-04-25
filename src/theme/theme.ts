import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});
export default theme;

// このコードは、Chakra UIのテーマをカスタマイズするために使用されます。extendTheme 関数は、Chakra UIテーマを拡張するために使用されます。
// この例では、グローバルなスタイルを設定しています。
// 具体的には、全体の背景色をグレーに、文字色を暗めのグレーに変更しています。
// その後、カスタマイズしたテーマをエクスポートしています。これにより、アプリ全体でこのテーマが使用されます。
