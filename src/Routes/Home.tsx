import { useQuery } from "@tanstack/react-query"
import { getMovies, IGetMoviesResult } from "../api"
import { Banner, Box, Loader, OverView, Row, Slider, Title, Wrapper,Info, Overlay, BigMovie, BigCover, BigTitle, BigOverview } from "../style";
import { makeImagePath } from "../utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import useWindowDimensions from "../useWindowDimensions";
import { useMatch, useNavigate } from "react-router-dom";
const BoxVar = {
    start:{
        scale:1
    },
    hover:{
        scale:1.3,
        y:-30,
        transition:{
            delay:0.5,
            duration:0.3,
            type:"tween"
        }
    }
}
const InfoVar = {
    hover:{
        opacity:1,
        transition:{
            delay:0.5,
            duration:0.3,
            type:"tween"
        }
    }
}
export default function Home(){
    const navigate = useNavigate() 
    const bitMovieMath = useMatch("/movie/:id")
//슬라이드가 겹쳐서 정확한 width값 얻기 위해 Custom Hook사용
const width = useWindowDimensions();
const rowVar = {
    start:{
        //첫번째 슬라이드와 넘겨지는 마지막 슬라이드가 너무 붙어 있어 flex gap의 값만큼 더하고 밑에는 빼준다
        x:width + 5 
    },
    end:{
        x:0
    },
    exit:{
        x:- width - 5
    }
}
const offset = 6;
    const { data, isLoading } = useQuery<IGetMoviesResult>({
        queryKey: ["movies", "nowPlaying"],
        queryFn: getMovies,
    });
    const [index,setIndex] = useState(0)
    const [leaving,setLeaving] = useState(false)
    const toggleLeaving = () => setLeaving(pre => !pre)
    const onBoxClick = (movieId:string) => {
        navigate(`/movie/${movieId}`)
    }
    const onOverlayClick = () => navigate(-1)
    const onClickMovie = bitMovieMath?.params.id && data?.results.find(i => ""+i.id === bitMovieMath.params.id!)

    const goNext = () => {
        if (data) {
            if(leaving) return;
            toggleLeaving()
            const totalMovies = data?.results.length -1
            const mawIdx = Math.ceil(totalMovies / offset) - 1
            setIndex(pre => pre === mawIdx ? 0 : pre + 1)
        }
    };

    return (
        <>
        <Wrapper>
            {isLoading ? <Loader>"Loading..."</Loader> : 
                <>
                    <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
                        <Title>{data?.results[0].title}</Title>
                        <OverView>{`${data?.results[0].overview.slice(0,100)}...`}</OverView>
                    </Banner>
                    <Slider>
                        {/* onExitComplete animation이 끝났을때 실행되는것  
                            initial={false}는 Home처음 들어갔을때 슬라이드가 오른쪽에서 왼쪽으로 나오는것을 방지
                        */}
                        <AnimatePresence initial={false} onExitComplete={toggleLeaving} custom={leaving}>
                        <Row 
                        variants={rowVar} 
                        initial="start" 
                        animate="end" 
                        exit="exit" 
                        key={index}
                        transition={{type:"tween",duration:0.8}}
                        >
                           {data?.results.slice(1)
                           .slice(offset*index,offset*index+offset).map(i => (
                             <Box 
                            layoutId={i.id+""}
                             key={i.id} 
                             variants={BoxVar} 
                             initial="start" 
                             whileHover="hover" 
                             transition={{ type: "tween" }} 
                             bgPhoto={makeImagePath(i.backdrop_path,"w500")}
                             onClick={() => onBoxClick(i.id+"")}
                             custom={leaving}
                             >
                                {/* 부모에게 variants가 있다면 자식에거 자동적으로 whileHover같은것들이 상속된다.*/}
                                <Info variants={InfoVar}>
                                    <h4>{i.title}</h4>
                                </Info>
                             </Box>
                             ))}
                        </Row>
                        </AnimatePresence>
                    </Slider>
          <button onClick={goNext}>Next</button>
                    <AnimatePresence>
                        {bitMovieMath ? 
                        <>
                            <Overlay onClick={onOverlayClick} exit={{opacity:0}} animate={{opacity:1}}/>
                            <BigMovie layoutId={bitMovieMath?.params.id}>
                                {onClickMovie && (
                                    <>
                                    <BigCover style={{backgroundImage:`linear-gradient(to top, black,transparent),url(${makeImagePath(onClickMovie.backdrop_path,'w500')})`}}>
                                        <BigTitle>{onClickMovie.title}</BigTitle>
                                        <BigOverview>{onClickMovie.overview}</BigOverview>
                                    </BigCover>
                                    </>
                                )
                                }
                            </BigMovie>
                        </>
                        : null}
                    </AnimatePresence>
                </>
            }
        </Wrapper>
        </>
    )
}