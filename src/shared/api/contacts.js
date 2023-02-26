import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ebe5f3be929df00ca4038a.mockapi.io/contacts',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  console.log(data);
  return data;
};
