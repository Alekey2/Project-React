import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/ladding-page";
import Login from "../pages/login";
import Erro from "../pages/erro";
import CadProdutos from "../pages/cadProdutos";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadprodutos" element={<CadProdutos />} />
                <Route path="*" element={<Erro />} />

            </Routes>
        </BrowserRouter>
    )
}