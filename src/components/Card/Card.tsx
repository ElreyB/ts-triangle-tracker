import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { restTriangle } from "../../actions";
import { State, CardProps, Sides } from "../../types";
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

function Card({
  image,
  info,
  link,
  type,
  restTriangle,
}: CardProps & ReturnType<typeof mapDispatchToProps>): JSX.Element {
  const handleRest = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    restTriangle({
      side1: "",
      side2: "",
      side3: "",
    });
  };

  const title = type && type.slice(0, 1).toUpperCase() + type.slice(1);

  return (
    <Wrapper>
      <Img src={image} alt={`${type} triangle`} />
      <h2>{title}</h2>
      <p>{info}</p>
      <p>
        <a href={link}>More..</a>
      </p>
      <Button width={25} onClick={handleRest}>
        Return to form
      </Button>
    </Wrapper>
  );
}

const mapStateToProps = (state: State): CardProps => {
  console.log({ state });
  return {
    image: data[state.type as keyof typeof data]?.image,
    info: data[state.type as keyof typeof data]?.info,
    link: data[state.type as keyof typeof data]?.link,
    type: state.type,
  };
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    restTriangle: (sides: Sides) => dispatch(restTriangle(sides)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
