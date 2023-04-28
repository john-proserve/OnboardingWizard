export const useLogin = async username => {
  const res = await fetch(`http://localhost:2023/users/`, {
    method: 'GET',
    mode: 'cors',
  });
  const resObject = await res.json();
  if (resObject) {
    window.location.href = 'http://localhost:3000/checklist';
  }
};
