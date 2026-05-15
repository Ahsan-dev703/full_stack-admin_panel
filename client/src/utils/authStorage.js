const AUTH_STORAGE_KEY = "dashboard_auth_state";

export const loadAuthState = () => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (parsed?.isAuthenticated && parsed?.user) {
      return {
        ...parsed,
        loading: false,
        error: null,
      };
    }

    return null;
  } catch (error) {
    console.warn("Failed to load auth state from localStorage", error);
    return null;
  }
};

export const saveAuthState = (authState) => {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState));
  } catch (error) {
    console.warn("Failed to save auth state to localStorage", error);
  }
};

export const clearAuthState = () => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear auth state from localStorage", error);
  }
};
