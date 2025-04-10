import styles from './ToastCloseButton.module.scss';

export const ToastCloseButton = ({
  closeToast,
}: {
  closeToast?: () => void;
}) => (
  <button onClick={closeToast} className={styles.toastClose}>
    ✖
  </button>
);
