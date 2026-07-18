import { toast } from 'react-toastify';
import VacationToastContent from './components/VacationToastContent';

export function ShowVacationToast() {
  toast(<VacationToastContent />, {
    autoClose: 8000,
    hideProgressBar: false,
    closeButton: true,
    pauseOnHover: true,
    style: {
      width: '600px', // 130% of 320px ≈ 416px
    },
  });
}
