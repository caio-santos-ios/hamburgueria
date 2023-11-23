import { useAtom } from "jotai";
import { listFood } from "../../Jotai/Food";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { HeaderTable, ItenBody, ItenHeader, Table, TitleTable, CollomnTable, BodyTable, TitleSection } from "./style";
import { StyleButton } from "../../style/Button";
import { TFood } from "../../@types/Food";
import { Section } from "../../components/Section";
import { EditModal } from "../../components/ModalUpdateFood";
import { useNavigate } from "react-router-dom";

const ListFoodPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableFood, setEditableFood] = useState<TFood | null>(null);
    const [foods, setFoods] = useAtom(listFood);
    const token = localStorage.getItem("@token");
    const myToken = JSON.parse(token!);
  
    const navegation = useNavigate()

    useEffect(() => {
      const req = async () => {
        try {
          const res = await api.get("/foods");
          setFoods(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      req();
    }, []);
  
    const deleteFood = async (id: string) => {
      const newFoods = foods.filter((food: TFood) => food.id !== Number(id));
      try {
        await api.delete(`/foods/${Number(id)}`, { headers: { Authorization: myToken.token } });
        setFoods(newFoods);
      } catch (error) {
        console.log(error);
      }
    };

    const openModal = (food: TFood) => {
        setEditableFood(food);
        setIsModalOpen(true);
    }
    
    const closeModal = () => {
        setEditableFood(null);
        setIsModalOpen(false);
    }
    return (
      <>
        <Header waiter={false} />
        <main>
            <Section typeSection="display_admin_add">
                <StyleButton styleButton="back" onClick={() => navegation("/admin")}>
                    Voltar
                </StyleButton>  
                {
                    foods.length > 0 ?
                    <>
                    <Table>
                    <HeaderTable>
                        <ItenHeader>
                            <TitleTable>#</TitleTable>
                            <TitleTable>Nome</TitleTable>
                            <TitleTable>Preço</TitleTable>
                            <TitleTable></TitleTable>
                            <TitleTable></TitleTable>
                        </ItenHeader>
                    </HeaderTable>
                    <BodyTable>
                        {
                        foods.map((food: TFood) => (
                            <ItenBody key={food.id}>
                                <TitleTable>{food.id}</TitleTable>
                                <CollomnTable disabled defaultValue={food.name} />
                                <CollomnTable disabled defaultValue={food.price} />
                                <StyleButton onClick={() => openModal(food)} styleButton="update" type="button">Editar</StyleButton>
                                <StyleButton onClick={(e) => deleteFood(e.currentTarget.id)} id={String(food.id)} styleButton="delete">Excluir</StyleButton>
                            </ItenBody>
                        ))
                        }
                    </BodyTable>
                    </Table>
                    <EditModal isOpen={isModalOpen} onRequestClose={closeModal} food={editableFood} />
                    </>
                    :
                    <TitleSection>Sem lanches Cadastrados</TitleSection>
                }
            </Section>
        </main>
      </>
    );
  };
  
  export default ListFoodPage;

  /*
{
    foods.length > 0 ?
    
}
  */