import styled from "styled-components/native";

interface TextInput {
  lastOne?: boolean;
}
export const TextInput = styled.TextInput<TextInput>`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 7px 7px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;
