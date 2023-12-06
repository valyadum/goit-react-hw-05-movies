import styled from '@emotion/styled';


export const Nav = styled.nav`
  background: linear-gradient(to right, #5367ff, #104d75);
  box-shadow: 0px 3px 9px #09081b7a;
`;
export const Ul = styled.ul`
margin: 0;
    text-align: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
`;


export const Li = styled.li`
     display: inline-block;
     padding: 18px;
     font-family: "Open Sans";
     text-transform:uppercase;
     color: rgba(0, 35, 122, 0.5);
     font-size: 18px;
     text-decoration: none;
     cursor: pointer;
    /* display: block;  */
    & :hover{
        padding: 18px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(0, 35, 122, 0.7);
    }
`;

// html {
//   height:100%;
//   background-image: linear-gradient(to right top, #8e44ad 0%, #3498db 100%);
// }
