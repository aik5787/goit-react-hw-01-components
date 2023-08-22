import styled from 'styled-components';



export const StatisticsContainer = styled.section`
  padding: 20px;
  margin: 0 auto 20px;
  width: 700px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
 padding: 20px;
  font-size: 24px;
  text-align: center;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-bottom: 0;
`;

export const StatList = styled.ul`
display: flex;
justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
`;


export const StatItem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  align-items: center;
   border: 1px solid #ccc;
`;


export const Label = styled.span`
font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;