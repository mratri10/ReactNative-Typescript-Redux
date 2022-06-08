import {HOMETAB, PROFILETAB, SCANTAB} from '../../constants';

const initState: string = HOMETAB;

export default (state: string = initState, action: ReduxAction) => {
  switch (action.type) {
    case HOMETAB:
    case PROFILETAB:
    case SCANTAB:
      return action.type;

    default:
      return state;
  }
};
