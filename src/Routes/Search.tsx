import { useQuery } from "@tanstack/react-query"
import {useSearchParams } from "react-router-dom"
import { getSearchMovie, IGetSearch } from "../api"
import { makeImagePath } from "../utils"
import { SearchListBox, SearchListWrapper } from "../style"

export default function Search(){
    const [searchParams,_] = useSearchParams()
    const keyword = searchParams.get("keyword")
    const {data,isLoading} = useQuery<IGetSearch>({
        //queryKey에 keyword를 추가하면 keyword가 변경될때마다 queryKey가 달라지므로 재실행됨
        queryKey:["search","movie",keyword],
        queryFn:() => getSearchMovie(keyword),
        //keyword가 있을때만 쿼리를 활성화(keyword가 변경될때마다 쿼리 재실행)
        enabled: !!keyword
    })
    return (
        <>
        <SearchListWrapper>
            {data?.results.map(i => 
                <SearchListBox key={i.id}>
                    <img src={makeImagePath(i.backdrop_path)} alt="" />
                    <h3>{i.original_title}</h3>
                </SearchListBox>
            )}
        </SearchListWrapper>
        </>
    )
}