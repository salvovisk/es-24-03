import styled from "styled-components";

export const MainSec = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  transition: all 0.5s ease-in-out;

  ${({ theme }) => (theme === "dark" ? "background-color:#252525; " : "")};
`;

export const ThemeBtn = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #252525;
  border: none;
  border-radius: 50px;
  height: 64px;
  width: 64px;
  font-size: 1.5rem;
  color: gold;
  transition: all 0.5s ease-in-out;

  &:hover {
    outline: none;
    cursor: pointer;
  }

  &:active,
  :focus {
    outline: none;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  ${({ theme }) =>
    theme === "dark"
      ? "background-color: #417ffa; animation: spin 2s ease-out"
      : ""};
`;

export const CardComp = styled.div`
  height: 350px;
  width: 280px;
  border-radius: 12px;
  box-shadow: 0 0 10px 1px rgba(25, 25, 25, 0.5);
  padding: 25px;
  background-color: white;
  transition: all 0.5s ease-in-out;
  ${({ theme }) =>
    theme === "dark" ? "background-color: #212121;  box-shadow:none;" : ""};
`;

export const Card_Body = styled.div`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Card_img = styled.img`
  height: 128px;
  width: 128px;
  transition: all 0.5s ease-in-out;

  ${({ theme }) => (theme === "dark" ? "opacity:0.5;" : "")};
`;

export const Card_TextWrapper = styled.div``;

export const Card_TextTitle = styled.h4`
  transition: all 0.5s ease-in-out;

  ${({ theme }) => (theme === "dark" ? "color:white" : "")}
`;

export const Card_TextContent = styled.p`
  transition: all 0.5s ease-in-out;

  ${({ theme }) => (theme === "dark" ? "color:white" : "")}
`;
