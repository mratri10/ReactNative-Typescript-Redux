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
