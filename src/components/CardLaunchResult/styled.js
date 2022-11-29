import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: lightgray;
  border-radius: 5px;
  font-weight: bold;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const Success = styled.p`
  border: 1px solid darkgreen;
  background-color: green;
  color: white;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  width: 80%;
`;

export const Failure = styled.p`
  border: 1px solid darkred;
  background-color: crimson;
  color: white;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  width: 80%;
`;

export const Waiting = styled.p`
  border: 1px solid darkblue;
  background-color: lightblue;
  color: darkblue;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  width: 80%;
`;

export const LinkIcon = styled.a`
  color: red;
  font-size: 30px;
  text-align: center;
`;

export const FlightNumber = styled.span`
  text-align: center;
`;

