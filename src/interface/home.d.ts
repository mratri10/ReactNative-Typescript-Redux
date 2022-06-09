// enum itab {
//   HOME,
//   PROFILE,
//   SCAN,
// }
type Itab = {
  tab: string;
};

type TabValue = {
  active: boolean;
  name: string;
  onPress: () => void;
};

type TabRoute = {
  tab: string;
  route: string;
};
type RouteVal = {
  name: string;
};
type RListener = {
  state: {
    stale: boolean;
    type: string;
    key: string;
    index: number;
    routeNames: List<string>;
  };
};
