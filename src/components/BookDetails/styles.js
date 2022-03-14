import styled from 'styled-components';

export const BookContent = styled.div`
  display: flex; 
  gap: 52px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const InfoBox = styled.div`
  display: inline-block;
  max-height: 100%; 
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 6px;
  }
`;

export const Image = styled.img`
  height: 430px;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  margin: 15px;

  @media (max-width: 800px) {
    height: 350px;
    width: 240px;
  }
`;

export const Title = styled.p`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: #333333;
  margin-bottom: 0;
  
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Author = styled.p`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #AB2680;
  margin-top: 0;
`;

export const Info = styled.div`

`;

export const ItemSubtitle = styled.div`
  margin: 0;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
`;

export const ItemTitle = styled.div`
  margin: 0;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  text-transform: uppercase;
  color: #333333;
`;

export const Item = styled.span`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const TitleDescription = styled.div`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  margin: 35px 0 15px 0;
`;

export const Description = styled.div`
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const InformationItem = styled.span`
  display: flex;
  justify-content: space-between;
`;