import styled from 'styled-components';



const ComparaisonModal = styled.div`
  display:  ${(props) => props.displayModal ? 'block' : 'none'};
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  paddding: 50em;
  width: 35%;

`;

// const Div = styled.div`
//   background: whitesmoke;
//   margin: 0.25em;
//   padding: 0.25em;
//   border: 2px solid black;
// `;

const ImageRelatedProduct = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  z-index: 1;
  position: relative;
`;

const RelatedProductContainer = styled.section`
  display: flex
`;

const CloseModalButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 2em;
  font-weight: bold;
`;

const Table = styled.table`
border-collapse: collapse;
border-spacing: 0;
width: 100%;
border: 1px solid #ddd;
`;

const TableText = styled.td`
text-align: center;
`;

const ButtonAddItem = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export {
  ButtonAddItem,
  CloseModalButton,
  ComparaisonModal,
  ImageRelatedProduct,
  RelatedProductContainer,
  ModalContent,
  Table,
  TableText,
};