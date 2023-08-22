import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto 20px;
  border: solid 2px #d9d9d9;
  width: 280px;
  padding: 50px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  padding: 20px;
  background-color: white;
  border: solid 2px #d9d9d9;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DescriptionItem = styled.p`
  margin: 10px 0 0;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #808080;
`;

export const Name = styled(DescriptionItem)`
  font-weight: bold;
  color: black;
`; 

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  border: solid 2px #d9d9d9;
  border-radius: 0 0 4px 4px;
  background-color: #b0e0e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  border-left: solid 2px #d9d9d9;
  padding: 10px 0;
`;

export const Label = styled.span`
 color: #808080;
 font-size: 16px;
 font-weight: 500;
 `;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
`;