import styled from 'styled-components';

export const Container = styled.div`
  width: 272px;
  height: 160px;
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  margin: 0 15px 15px 0;
  cursor: pointer;
`;

export const BookContent = styled.div`
  display: flex; 
  gap: 12px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Image = styled.img`
  width: 81px;
  height: 122px;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  margin: 15px;
`;

export const Title = styled.p`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  margin-bottom: 0;
`;

export const Author = styled.p`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #AB2680;
  margin-top: 0;
`;

export const Info = styled.div`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
  margin-top: auto;
`;

export const InfoData = styled.div`
  margin: 0;
`;