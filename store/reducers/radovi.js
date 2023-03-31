import { RADOVI } from '../../data/test-podaci';
import { PROMJENA_FAVORITA } from '../actions/radovi';

const pocetnoStanje = {
  radovi: RADOVI,
  filterRadovi: RADOVI,
  favoritRadovi: [],
};

const radReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabran = state.favoritRadovi.findIndex(
        (rad) => rad.id === action.idRada
      );
      if (odabran >= 0) {
        const noviFavoriti = [...state.favoritRadovi];
        noviFavoriti.splice(odabran, 1);
        return { ...state, favoritRadovi: noviFavoriti };
      } else {
        const rad = state.radovi.find((rad) => rad.id === action.idRada);
        return { ...state, favoritRadovi: state.favoritRadovi.concat(rad) };
      }
    }
    default:
      return state;
  }
};
export default radReducer;
