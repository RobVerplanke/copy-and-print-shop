import { toast } from 'react-toastify';
import ChristmasToastContent from './components/ChristmasToastContent';

export function ShowChristmasToast() {
  toast(<ChristmasToastContent />, {
    autoClose: 8000,
    hideProgressBar: false,
    closeButton: true,
    pauseOnHover: true,
    style: {
      width: '416px', // 130% of 320px ≈ 416px
    },
  });
}
