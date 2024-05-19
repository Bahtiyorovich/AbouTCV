// src/utils/localStorage.js
export const saveToLocalStorage = (data) => {
  localStorage.setItem('resumeData', JSON.stringify(data));
};

export const loadFromLocalStorage = () => {
  const data = localStorage.getItem('resumeData');
  return data ? JSON.parse(data) : null;
};

export const removeAll = () => {
  localStorage.removeItem('resumeData');
  window.location.reload();
}
