import React from 'react';
import { create } from 'zustand';

type TOpenModal = Partial<
  Pick<IModalState, 'title' | 'className' | 'hideHeader' | 'titleMobile'>
> &
  Pick<IModalState, 'children'>;

interface IModalState {
  isOpenModal: boolean;
  title: string | null;
  titleMobile: string | null;
  className: string | null;
  hideHeader: boolean;
  children: React.ReactNode | null;
  onClose: () => void;
  openModal: (open: TOpenModal) => void;
}

const useModalStore = create<IModalState>((set) => ({
  isOpenModal: false,
  title: null,
  titleMobile: null,
  children: null,
  className: null,
  hideHeader: false,
  openModal: (data: TOpenModal): void =>
    set({
      ...data,
      isOpenModal: true,
    }),
  onClose: (): void =>
    set({
      title: null,
      children: null,
      isOpenModal: false,
    }),
}));

export { useModalStore };
