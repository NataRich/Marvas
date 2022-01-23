import { Pagination } from "antd";
import { useEffect, useState } from "react";

import Filter from "./Filter";
import { ProductCard } from "../../common/product/cards";
import { products_ov, subdivisions } from "../../common/dummy/dummy";
export default function Marketplace(){
    const [cat, setCat] = useState("");
    const [subs, setSubs] = useState([]);
    const [selectedSub, setSelectedSub] = useState("")
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        // use api here
        setCat("Electronics")
        setSubs(subdivisions)
        setSelectedSub(subdivisions[0]);
        setProducts(products_ov);
    }, [])

    return (
        <div className="w-full h-full flex flex-col justify-center items-center font-sans">
            <div className="w-10/12 h-full flex items-start justify-center">
            <div className="w-3/12 h-[100px] flex items-center justify-center">
                <Filter />
            </div>
            <div className="w-9/12 flex flex-wrap justify-center items-center mt-[30px]">
                {
                    products.map((p, key) => {
                        return (
                            <div className="flex justify-center items-center basis-1/3" key={key}>
                                <ProductCard {...p} />
                            </div>
                        )
                    })
                }
            </div>
            </div>
            

            <div className="w-9/12 h-full flex justify-center items-end mb-9">
                <Pagination defaultCurrent={1} total={50} current={current} onChange={(page, _) => setCurrent(page)} />
            </div>
        </div>
    )
}