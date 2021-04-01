import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./card";
import update from "immutability-helper";
import { Button } from "@material-ui/core";
import Model from "./form/model";
import styled from "styled-components";
import Project from "../../../api/api/project";
import auth from "../../../services/auth-service";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  font-size: 35px;
  background: cadetblue;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonStyle = styled.div`
  display: flex;
  > * + * {
    margin-left: 15px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const style = {
  width: 400,
};

const Drag: React.FC = () => {
  const user = auth.getCurrentUser();
  const [open, setOpen] = React.useState(false);
  // const [openFirst, setOpenFirst] = React.useState(false);
  const [label, setLabel] = React.useState("");
  const [cards, setCards] = useState<any>([]);
  const [projectId, serProjectId] = useState<any>("");
  const [component, setComponent] = useState<any>("");

  useEffect(() => {
    Project.getForm(user.id).then((response) => {
      if (response.result) {
        serProjectId(response.result._id);
        setCards(response.result.item);
        setLabel(response.result.label);
      }
    });
  }, [user.id]);

  const updateFieldChanged = (eventType: string, text: string) => {
    let newArr = [...cards]; // copying the old datas array
    if (eventType === "add") {
      newArr[cards.length] = { id: cards.length + 1, text: text, component: "TextBox" };
    } else if (eventType === "sub") {
      newArr.pop();
    }
    setCards(newArr); // ??
  };

  const handleClickOpen = (component: string) => {
    setOpen(true);
    setComponent(component);
  };

  const handleClose = (text?: string) => {
    setOpen(false);
    if (!label && text) {
      setLabel(text);
    } else if (text) {
      updateFieldChanged("add", text);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!projectId) {
      await Project.addForm(label, cards, user.id);
    } else {
      await Project.updateForm(label, cards, projectId);
    }
  };

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };
  // const checkItem = cards.length !== 0;
  return (
    <>
      <Wrapper>
        <div style={style}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {label && <HeaderStyle>{label}</HeaderStyle>}
            {cards.map((card: any, i: any) => (
              <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} />
            ))}
            {label && (
              <Button type="submit" fullWidth variant="contained" color="primary">
                SAVE
              </Button>
            )}
          </form>
        </div>
        <hr />
        <div>
          <ButtonStyle>
            {label ? (
              <>
                <Button fullWidth variant="contained" color="primary" onClick={() => handleClickOpen("TextBox")}>
                  Add Text Box
                </Button>
                <Button fullWidth variant="contained" color="primary" onClick={() => handleClickOpen("DropDown")}>
                  Add Drop Down
                </Button>
              </>
            ) : (
              <>
                <Button fullWidth variant="contained" color="primary" onClick={() => handleClickOpen("Label")}>
                  + Create Project
                </Button>
              </>
            )}
          </ButtonStyle>
        </div>
      </Wrapper>
      <>
        <Model open={open} handleClose={handleClose} component={component} />
      </>
    </>
  );
};

export default Drag;
