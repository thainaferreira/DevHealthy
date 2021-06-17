import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { useGroups } from "../../contexts/Groups";
import { useModal } from "../../contexts/Modal";
import Backdrop from "../Backdrop";
import {
  ContainerGroups,
  ContainerStyled,
  InternContainer,
  ContainerControlers,
  InputStyled,
  FilterContainer,
  Container,
} from "./style.js";
import GroupCard from "../GroupCard";
import Modal from "../Modal";
import FloatButton from "../FloatButton";
import Button from "../Button";
import { useUserGroups } from "../../contexts/UserGroups";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import { Hidden } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Form from "../Form";
import SelectInput from "../../components/SelectInput";
import IconsGroups from "../../components/IconsGroups";
import { useUser } from "../../contexts/User";

const AllGroups = ({ hideButton }) => {
  const {
    groups,
    handleNext,
    handlePrev,
    conEnterGroup,
    previous,
    next,
    inputSearch,
    setInputSearch,
    getGroupsByCategory,
  } = useGroups();
  const { getGroups } = useUser();
  const { isVisible, handleModal } = useModal();
  const [modalInfo, setModalInfo] = useState();
  const [open, setOpen] = useState(false);
  const { createGroup, getAGroup } = useUserGroups();
  const [isVisibleCreateGroup, setIsVisibleCreateGroup] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().min(3, "Mínimo de 3 caracteres"),
    description: yup.string().min(6, "Mínimo de 6 caracteres"),
    category: yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const categoryOptions = [
    {
      id: "DevHealthy-Saúde",
      label: "Saúde",
    },
    {
      id: "DevHealthy-Hobby",
      label: "Hobby",
    },
    {
      id: "DevHealthy-Estudo",
      label: "Estudo",
    },
    {
      id: "DevHealthy-Culinária",
      label: "Culinária",
    },
  ];
  const createGroupByUser = () => {
    reset();
    setIsVisibleCreateGroup(!isVisibleCreateGroup);
  };

  const submitGroup = (data) => {
    createGroup(data);
    createGroupByUser();
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (info) => {
    setModalInfo(info);
    handleModal();
  };

  const handleClose = () => {
    handleModal();
    handleToggle();
  };

  const handleEnterGroup = (id) => {
    conEnterGroup(id);
    handleModal();
    getGroups();
    getAGroup(id);
  };

  return (
    <>
      <Container>
        <ContainerControlers>
          <InputStyled>
            <GoSearch />
            <input
              type="text"
              placeholder="Pesquisar grupo"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </InputStyled>
          {!hideButton && (
            <>
              <Hidden smUp>
                <FloatButton
                  title="Criar Grupo"
                  icon={AddIcon}
                  onClick={createGroupByUser}
                  color="primary"
                  greenIcon
                />
              </Hidden>

              <Hidden only="xs">
                <Button color="secondary" onClick={createGroupByUser}>
                  <AiFillPlusCircle /> Criar Grupo
                </Button>
              </Hidden>
            </>
          )}
        </ContainerControlers>
        <FilterContainer>
          <ul>
            <li onClick={() => getGroupsByCategory("DevHealthy-Culinária")}>
              <a href="#">Culinária</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy-Estudo")}>
              <a href="#">Estudo</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy-Hobby")}>
              <a href="#">Hobby</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy-Saúde")}>
              <a href="#">Saúde</a>
            </li>
            <li onClick={() => getGroupsByCategory("DevHealthy")}>
              {" "}
              <a href="#">Todos</a>
            </li>
          </ul>
        </FilterContainer>
        <ContainerStyled>
          <FloatButton
            title="Voltar"
            icon={MdKeyboardArrowLeft}
            onClick={handlePrev}
            disabled={!previous}
          />
          <ContainerGroups>
            {inputSearch
              ? groups
                  .filter((group) => {
                    return group.name
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase());
                  })
                  .map((group) => {
                    return (
                      <GroupCard
                        key={group.id}
                        name={group.name}
                        category={group.category}
                        handleClick={() =>
                          handleClick({
                            id: group.id,
                            name: group.name,
                            description: group.description,
                            category: group.category,
                          })
                        }
                      />
                    );
                  })
              : groups.map((group) => {
                  return (
                    <GroupCard
                      key={group.id}
                      name={group.name}
                      category={group.category}
                      handleClick={() =>
                        handleClick({
                          id: group.id,
                          name: group.name,
                          description: group.description,
                          category: group.category,
                        })
                      }
                    />
                  );
                })}
          </ContainerGroups>
          <FloatButton
            title="Avançar"
            icon={MdKeyboardArrowRight}
            onClick={handleNext}
            disabled={!next}
          />
        </ContainerStyled>
      </Container>
      {isVisible && (
        <Modal>
          <InternContainer>
            <div className="Header">
              <figure>
                <IconsGroups category={modalInfo?.category} modal />
              </figure>
              <h4>{modalInfo?.name}</h4>
            </div>
            <div className="Body">
              <p>
                <span>Descrição:</span> {modalInfo?.description}
              </p>
              <p>
                <span>Categoria:</span> {modalInfo?.category.split("-")[1]}
              </p>
            </div>

            <Button color="secondary" onClick={handleToggle}>
              Entrar
            </Button>
            <Backdrop simple text="Confirma a entrada no grupo?" open={open}>
              <Button onClick={handleClose}>Não</Button>
              <Button
                onClick={() => handleEnterGroup(modalInfo.id)}
                color="secondary"
              >
                Sim
              </Button>
            </Backdrop>
          </InternContainer>
        </Modal>
      )}

      <Backdrop simple open={isVisibleCreateGroup}>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(submitGroup)} autoComplete="off">
            <Input
              label="Título"
              register={register}
              name="name"
              error={!!errors.name}
              errorMsg={errors.name?.message}
              pinkScheme
              isValidated
            />

            <SelectInput
              name="category"
              title="Categoria"
              label="Categoria"
              options={categoryOptions}
              required
              style={{ width: 200 }}
            />

            <Input
              label="Descrição"
              register={register}
              name="description"
              error={!!errors.description}
              errorMsg={errors.description?.message}
              pinkScheme
              isValidated
            />
            <div style={{ display: "flex", gap: 8 }}>
              <FloatButton
                title="Cancelar"
                icon={CloseIcon}
                color="primary"
                greenIcon
                onClick={createGroupByUser}
              />
              <FloatButton title="Criar Grupo" icon={DoneIcon} type="submit" />
            </div>
          </Form>
        </FormProvider>
      </Backdrop>
    </>
  );
};

export default AllGroups;
