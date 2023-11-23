import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { StyleButton } from '../../style/Button';
import { TFood } from '../../@types/Food';
import { Form } from '../Form';
import { StyleInput } from '../../style/Input';
import { StyleLabel } from '../../style/Label';
import { ContainerFooterModal } from './style';
import { api } from '../../service/api';
import { toast } from 'react-toastify';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  food: TFood | null;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onRequestClose, food }) => {
    const { register, handleSubmit } = useForm<TFood>();
    const token = localStorage.getItem("@token");
    const myToken = JSON.parse(token!);

    const onSubmit = async (data: TFood) => {
        try {
            await api.patch(`/foods/${Number(food!.id)}`, data, { headers: { Authorization: myToken.token } });
            onRequestClose()
            toast.success('Lanche atualizado', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            } catch (error) {
            console.log(error);
        }
    };

  return (
    <Modal style={{content: { margin: '0 auto', background: 'transparent', border: '0', width: '35rem' }}} isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form typeForm='' onSubmit={handleSubmit(onSubmit)}>
        <StyleLabel styleLabel="">Nome</StyleLabel>
        <StyleInput styleInput="display_admin_add" {...register('name')} defaultValue={food?.name} />
        <StyleLabel styleLabel="">Preço</StyleLabel>
        <StyleInput styleInput="display_admin_add" {...register('price')} defaultValue={food?.price} />
        <ContainerFooterModal>
            <StyleButton onClick={() => onRequestClose()} styleButton="cancel">Cancelar</StyleButton>
            <StyleButton styleButton="save" type="submit">Salvar</StyleButton>
        </ContainerFooterModal>
      </Form>
    </Modal>
  );
};
