import {ROUTE} from '../../constants';

export const tabAction = (tab: string) => {
  return async (dispacth: DispatchType, getState: any) => {
    dispacth({
      type: tab,
    });
  };
};

export const routeAction = (route: string) => {
  return async (dispacth: DispatchType, getState: any) => {
    dispacth({
      type: ROUTE,
      payload: <RouteVal>{name: route},
    });
  };
};
