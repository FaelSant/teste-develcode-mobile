import moment from 'moment';
export const DateFormater = (unformatedData: Date) => {
  console.log(unformatedData);
  return moment.utc(unformatedData).format('DD/MM/yyyy');
};
