import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Nav = styled(motion.nav)`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width: 100%;
top: 0;
font-size: 14px;
padding: 20px 60px;
color: white;
`
export const Col = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled(motion.svg)`
margin-right: 50px;
width: 95px;
height: 25px;
fill: ${(props) => props.theme.red};
path {
  stroke-width: 6px;
  stroke: white;
}
`
export const Items = styled.ul`
  display: flex;
  align-items: center;
`
export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`
export const Search = styled.form`
  color: white;
  display:flex;
  align-items:center;
  position:relative;
  svg {
    height: 25px;
  }
`
export const Input = styled(motion.input)`
//transform-origin는 anitation 변화가 시작하는 위치
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`
export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`
export const Wrapper = styled.div`
    overflow-x: hidden;
    background:#000;
`
export const Loader = styled.div`
    height:20vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Banner = styled.div<{bgPhoto:string}>`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:60px;
    background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url(${props => props.bgPhoto});
    background-size:cover;
`
export const Title = styled.h2`
    font-size:68px;
`
export const OverView = styled.p`
    font-size:30px;
    width:50%;
    margin-top:20px;
`
export const Slider = styled.div`
  position: relative;
  top: -100px;
`;
export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;
export const Box = styled(motion.div)<{bgPhoto:string}>`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
  background-image:url(${props => props.bgPhoto});
  background-size:cover;
  background-position:center center;
  &:first-child{
    transform-origin: center left;
  }
  &:last-child{
    transform-origin: center right;
  }
`;
export const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
    color:#fff;
  }
`;
export const Overlay = styled(motion.div)`
position: fixed;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
opacity: 0;
`;
export const BigMovie = styled(motion.div)`
position: fixed;
width: 40vw;
height: 80vh;
top:5%;
left: 0;
right: 0;
margin: 0 auto;
background-color:#fff;
border-radius: 15px;
overflow: hidden;
background-color: ${(props) => props.theme.black.lighter};
`;
export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;
export const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 350px 0 0 20px;
  font-size: 46px;
`;
export const BigOverview = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
`;
export const SearchListWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: flex-start;
  gap: 40px 20px;
  margin-top: 100px;
  width: 100%;
  overflow-x: hidden;
  padding: 0 60px;
`
export const SearchListBox = styled.div`
  width:calc(25% - 15px);
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: space-between;
  align-items: flex-start;
  img{
    width:100%;
    object-fit: cover;
  }
`