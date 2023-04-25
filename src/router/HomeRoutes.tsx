import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";


// このコードは、アプリケーションのルーティングに使用する homeRoutes という配列を定義しています。
// homeRoutes 配列の各要素は、アプリケーション内でアクセスできる URL のパスを示し、そのパスに対応するコンポーネントを表示します。
export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_managment",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];

// 例えば、/user_management という URL にアクセスした場合、<UserManagement /> コンポーネントが表示されます。
// また、path: "*" という要素は、アプリケーション内で定義されていない URL にアクセスした場合に表示する 404 エラーページのコンポーネントを示しています。
