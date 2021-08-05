import moment from 'moment';
export const DateFormater = (unformatedData: Date) => {
  return moment(unformatedData).format('DD/MM/YYYY');
};
