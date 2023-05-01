import { memo, VFC, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};
// このコードはpropsという型を定義しています。
//　この型はchildrenという名前のプロパティを持ち、そのプロパティの値はReactNode型であると定義しています。
// ReactNode型は、Reactでレンダリング可能なすべての要素を表します。
// このように型を定義することで、Reactコンポーネントで受け取るpropsの型を明確にし、間違った型の値が渡されることを防ぐことができます。


export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
