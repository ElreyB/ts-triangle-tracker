import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { State, CardProps } from "../../types";
import data from "../../data";

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

const mapStateToProps = (state: State): CardProps => {
  return {
    image: data[state.type as keyof typeof data].image,
    info: data[state.type as keyof typeof data].info,
    link: data[state.type as keyof typeof data].link,
    type: state.type,
  };
};

// <Card
//   image={data[type as keyof typeof data].image}
//   info={data[type as keyof typeof data].info}
//   link={data[type as keyof typeof data].link}
//   type={type}
//   returnHome={() => setState(defaultState)}
// />
function ConnectedCard({
  image,
  info,
  link,
  type,
}: // returnHome,
CardProps): JSX.Element {
  const title = type && type.slice(0, 1).toUpperCase() + type.slice(1);
  return (
    <Wrapper>
      <Img src={image} alt={`${type} triangle`} />
      <h2>{title}</h2>
      <p>{info}</p>
      <p>
        <a href={link}>More..</a>
      </p>
      <Button width={25}>Return to form</Button>
    </Wrapper>
  );
}

const Card = connect(mapStateToProps)(ConnectedCard);

export default Card;
