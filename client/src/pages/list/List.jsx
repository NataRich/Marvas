import { Button, Divider } from "antd";
import { useEffect, useState } from "react";
import { products_ov } from "../../common/dummy/dummy";
import { OrderItemCard } from "../../common/product/cards";

export default function List() {
    const [products, setProducts] = useState([])
    const [totalPrices, setTotalPrices] = useState(0)

    useEffect(() => {
        setProducts(products_ov)
        setTotalPrices(products_ov.map(item => item.price).reduce((prev, curr) => prev + curr, 0))
    }, [])

    const handleRemove = () => {
        // TODO
    }

    const handleCheckout = () => {
        // TODO
    }

    return (
        <div className="w-full font-sans flex flex-col justify-center items-center">
            <div className="w-10/12 mt-[40px] flex justify-between items-center">
                <p className="text-4xl font-bold text-neutral-900 m-0">Order Summary</p>
                <p className="text-4xl text-neutral-900 m-0 flex justify-center items-end">
                    <span className="text-2xl font-['Open_Sans'] text-neutral-900 mr-[10px]">TOTAL: </span>
                    ${totalPrices}
                </p>
            </div>
            <div className="w-10/12">
                <Divider />
            </div>
            <div className="w-10/12 flex flex-col justify-center items-center">
                {
                    products.map((p, key) => {
                        return (
                            <div className="w-full flex justify-around items-center divide-x" key={key}>
                                <p className="text-5xl font-['Open_Sans'] font-bold m-0">{key}</p>
                                <div className="w-fit h-fit flex justify-center items-center mb-[40px]">
                                    <OrderItemCard {...p} onRemove={handleRemove} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-10/12">
                <Divider />
            </div>
            <div className="w-10/12 flex justify-end items-center mb-[50px]">
                <p className="text-4xl text-red-700 m-0 flex justify-center items-end mr-[30px]">
                    <span className="text-2xl font-['Open_Sans'] text-red-700 mr-[10px]">TOTAL: </span>
                    ${totalPrices}
                </p>
                <Button className="w-[150px]" size="large" type="primary" danger onClick={handleCheckout}>Checkout</Button>
            </div>
        </div>
    )
}