import React from "react";
import styled from "styled-components/native";

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;
const Username = styled.Text`
  font-weight: 600;
  color: white;
`;

const Wrapper = styled.View``;
const FollowBtn = styled.TouchableOpacity`
  color: white;
`;
const FollowBtnText = styled.Text`
  color: white;
`;

export default function UserRow({ avatar, username, isFollowing, isMe }) {
  return (
    <Wrapper>
      <Column>
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        // TODO Follow/UnFallow 버튼 기능 만들기
        <FollowBtn>
          <FollowBtnText>{isFollowing ? "Unfollow" : "Follow"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
}
