import { format, isValid, parseISO } from "date-fns";

const dateFormating = (date: string): string => {
    if (!date) return '--';
    if (!!Number(date)) return date;

    const formatDate = parseISO(date);
    
    return isValid(formatDate) ? format(formatDate, 'dd.MM.yyyy') : date;
};

const formatDate = (date?: Date): string => (date && isValid(date) ? format(date, 'dd.MM.yyyy') : '');

export { dateFormating, formatDate };