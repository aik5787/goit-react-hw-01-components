import styled from 'styled-components';
    

export const FriendListContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
background-color: #f2f2f2;
  list-style: none;
  margin: 0 auto 20px;
  width: 250px;
  padding: 20px;
`;

export const FriendListItemContainer = styled.li`
  display: flex;
  padding: 15px;
  align-items: center;
  order: ${({ $isOnline }) => ($isOnline ? 1 : 2)}; 
  background-color: #ffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;


export const StatusIndicator = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;