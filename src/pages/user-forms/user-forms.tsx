import React from "react";
import auth from "../../services/auth-service";
import useProject from "../../api/hooks/use-project";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const FieldStyle = styled.div`
  display: flex;
  justify-content: center;
  > * + * {
    margin-top: 30px;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputBase-input {
    padding: 25px 0px 10px;
  }
  .MuiInputLabel-animated {
    margin-top: 15px;
    font-size: 20px;
  }
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  font-size: 35px;
  background: cadetblue;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: gainsboro;
  padding: 10px 20px 30px;
`;

const UserForms: React.FC = () => {
  const user = auth.getCurrentUser();

  const { loading, project } = useProject(user.id);

  if (loading) {
    return <>"loading...."</>;
  }
  const { item, label } = project;

  return (
    <>
      <HeaderStyle>{label}</HeaderStyle>
      {
        <Wrapper>
          {item.map((element: any) => (
            <FieldStyle>
              <TextField required id="standard-required" label={element.text} />
            </FieldStyle>
          ))}
        </Wrapper>
      }
    </>
  );
};

export default UserForms;
