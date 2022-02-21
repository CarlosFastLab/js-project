// Handling user's created_at date to return a pt-BR date format
export function handleDate(user) {
  const date = new Date(user.created_at);
  return new Intl.DateTimeFormat('pt-BR').format(date);
};

/**
 * Handling location in case github user did not provide a location
 * to the platform, avoiding a "null" string
 */
export function handleLocation(user) {
  if (!user.location || user.location === null) {
    return 'No location provided';
  } else {
    return user.location;
  };
};