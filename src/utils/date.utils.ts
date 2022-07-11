import { format } from 'date-fns';

export const formatDate = (date: number | Date, dateFormat: string): string => {
  return format(date, dateFormat);
};
