import { Carousel, Pagination } from "antd";
import { useEffect, useState } from "react";

import { ProductCard } from "../../common/product/cards";
import { products_iphone_ov, products_ov, subdivisions } from "../../common/dummy/dummy";
import Random1 from "../../common/asset/img/dummy/random1.jpg";
import Random2 from "../../common/asset/img/dummy/random2.jpg";

export default function Home() {
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

    useEffect(() => {
        if (selectedSub !== subdivisions[0])
            setProducts(products_iphone_ov);
        else
            setProducts(products_ov);
    }, [selectedSub])

    return (
        <div className="flex flex-col justify-center items-center font-sans">
            <div className="w-full">
                <Carousel autoplay style={{height: "300px"}}>
                    <div className="w-full flex justify-center items-center">
                        <img className="w-full h-[300px] object-cover" src={Random2} alt="" />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <img className="w-full h-[300px] object-cover" src={Random1} alt="" />
                    </div>
                </Carousel>
            </div>
            <div className="w-10/12 h-[80px] flex justify-between items-center border-b border-neutral-300">
                <p className="text-4xl font-handwritten text-primary-700 font-bold mb-0 mr-[40px]">{cat} Day!</p>
                <div className="max-w-[600px] overflow-x-auto scrollbar-hide flex justify-start items-center">
                    {
                        subs.map((sub, key) => {
                            const selectedStyle = sub === selectedSub ? "text-primary-700 font-bold" : "text-neutral-400 hover:text-primary-700"

                            return (
                                <p 
                                    className={`text-xl font-['Open_Sans'] whitespace-nowrap cursor-pointer mb-0 mr-[20px] ${selectedStyle}`} 
                                    key={key}
                                    onClick={(e) => setSelectedSub(e.currentTarget.textContent)}
                                >
                                    {sub}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-10/12 flex flex-wrap items-center mt-[30px]">
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
            <div className="w-10/12 flex justify-center items-center mb-[30px]">
                <Pagination defaultCurrent={1} total={50} current={current} onChange={(page, _) => setCurrent(page)} />
            </div>
        </div>
    )
}