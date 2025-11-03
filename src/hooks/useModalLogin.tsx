import { useState } from 'react';

import Login from '@/components/login/Login';

import { useModalStore } from '@/store/modal-store';

const useModalLogin = (): {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
} => {
  const { openModal, onClose } = useModalStore();
  const [isLoginModalOpen, onToggleIsLoginModalOpen] = useState<boolean>(false);

  return {
    isLoginModalOpen,
    openLoginModal: (): void => {
      onToggleIsLoginModalOpen(true);
      openModal({
        children: <Login />,
      });
    },
    closeLoginModal: onClose,
  };
};

export default useModalLogin;
