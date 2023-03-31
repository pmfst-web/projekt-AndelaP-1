export const PROMJENA_FAVORITA = 'PROMJENA_FAVORITA';

export const promjenaFavorita = (id) => {
  return {
    type: PROMJENA_FAVORITA,
    idRada: id
  };
};
