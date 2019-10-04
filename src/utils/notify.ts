import { toast } from 'react-toastify';

export const success = (text: string) => toast.success(text || '');
export const error = (text: string) => toast.error(text || '');
