import {HOMETAB, PROFILETAB, ROUTE, SCANTAB} from '../../constants';

const initState: TabRoute = {
  tab: HOMETAB,
  route: '',
};

export default (state: TabRoute = initState, action: ReduxAction) => {
  switch (action.type) {
    case HOMETAB:
    case PROFILETAB:
    case SCANTAB:
      return {
        ...state,
        tab: action.type,
      };

    case ROUTE:
      const val = <RouteVal>action.payload;
      return {
        ...state,
        route: val.name,
      };
    default:
      return state;
  }
};
