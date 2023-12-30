import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";
import Searchbar from "../components/SearchBar";
import CountryList from "../components/CountryList";
import style from "./Search.module.css";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    const [countries, setCountries] = useState([]);

    const setInitData = async () => {
        const data = await fetchSearchResults(q);
        setCountries(data);
    };
    useEffect(() => {
        setInitData();
    }, [q]);

    return (
        <div className={style.container}>
            <Searchbar q={q} />
            <div>
                <b>{q}</b> 검색결과
            </div>
            <CountryList countries={countries} />
        </div>
    );
}
