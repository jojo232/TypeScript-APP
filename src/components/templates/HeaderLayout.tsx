import { memo, VFC, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

// memo、VFCはReactコンポーネントの最適化のために使用されるものです。
// HeaderLayoutコンポーネントは、propsとしてchildrenを受け取り、Headerコンポーネントとchildrenを返します。

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

// このコードは、Reactの関数コンポーネント HeaderLayout を定義しています。 
// HeaderLayout は、Propsとして children を受け取り、Header コンポーネントを先頭に置いて、その下に children を表示する役割を持っています。
// また、VFC<Props> の形式で関数コンポーネントの型を定義しています。 
// VFC は、"Void Function Component" の略で、戻り値がなく、Propsがある関数コンポーネントの型を表します。
// この場合、 Props の型を指定しています。 Props の型は、children プロパティを持つ ReactNode 型のオブジェクトです。
