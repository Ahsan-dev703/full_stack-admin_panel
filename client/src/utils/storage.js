export const loadState = (storageKey) => {
  try {
    const rawState = localStorage.getItem(storageKey);
    return rawState ? JSON.parse(rawState) : null;
  } catch (error) {
    console.warn(`Failed to load state from ${storageKey}:`, error);
    return null;
  }
};

export const saveState = (storageKey, state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(storageKey, serialized);
  } catch (error) {
    console.warn(`Failed to save state to ${storageKey}:`, error);
  }
};

export const clearState = (storageKey) => {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.warn(`Failed to clear state from ${storageKey}:`, error);
  }
};
