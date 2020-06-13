import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  max-width: 800px;
  background-color: white;
  padding: 20px;
  text-align: center;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
`;

const Button = styled.button<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  padding: 5px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid black;
`;

type CardProps = {
  image: string;
  info: string;
  link: string;
  type: string;
  returnHome: () => void;
};

function Card({ image, info, link, type, returnHome }: CardProps): JSX.Element {
  const title = type.slice(0, 1).toUpperCase() + type.slice(1);
  return (
    <Wrapper>
      <Img src={image} alt={`${type} triangle`} />
      <h2>{title}</h2>
      <p>{info}</p>
      <p>
        <a href={link}>More..</a>
      </p>
      <Button width={25} onClick={returnHome}>
        Return to form
      </Button>
    </Wrapper>
  );
}

export default Card;
