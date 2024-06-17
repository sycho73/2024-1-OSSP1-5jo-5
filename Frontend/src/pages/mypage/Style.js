import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(245, 245, 251);
  width: 84vw;
  min-height: 100vh;
`;

export const Profile = styled.div`
  background-color: white;
  width: 26%;
  height: fit-content;
  margin-left: 120px;
  margin-top: 50px;
  border-radius: 16px;
  padding: 20px 40px;
`;

export const Rdiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Cdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Level = styled.div`
  width: 100%;
  height: 30px;
  background-color: #c6c7f8;
  margin-left: 40px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const UserItem = styled.div`
  text-align: center;
  flex: 1;
  border-right: 1px solid #ccc;
  padding: ${(props) => (props.first ? "0px 50px 0px 0px" : "0px 50px")};
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
  }
`;

export const UserLabel = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: normal;
`;

export const UserValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ApiBox = styled.div`
  width: 75%;
  height: fit-content;
  padding: 30px 50px;
  background-color: white;
  margin-top: 50px;
  margin-left: 120px;
  border-radius: 16px;
`;

export const Title = styled.p`
  color: #5060ff;
  margin: 0px 0px;
  font-size: 23px;
  font-weight: 600;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
`;

export const CardGridItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const More = styled.p`
  color: #5060ff;
  font-size: 23px;
  font-weight: 600;
  margin-left: auto;
`;