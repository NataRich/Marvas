
import { useNavigate } from 'react-router-dom'

import { Breadcrumb, Divider } from 'antd';
import Product_Placeholder from '../asset/img/dummy/product.jpeg';

const Product = () =>{
    const navigate = useNavigate();

return (
    <div className='w[957px] h-[567px]] flex justify-center items-center font-sans mb-[100px]'>
        <div className='flex-wrap'>
            <div className='m-5 text-xl'>
            
            <Breadcrumb>
            <Breadcrumb.Item>
            <a onClick={() => {navigate('/')}}>Electronics</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a onClick={() => {navigate('/')}}>House</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a onClick={() => {navigate('/')}}>Humidifiers</a>
            </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            
            <div className='w-[374px] h-full flex flex-col mt-[50px]'>
                <div className='w-[314px] h-[370px] object-cover items-center -mb-[40px]'> 
                <img src={Product_Placeholder} alt="" />
                </div>

                <div className='w-full h-fit flex space-x-4'>
                <div className='w-[60px] h-[60px] object-cover items-center'>
                <img src={Product_Placeholder} alt="" />
                </div>
                <div className='w-[60px] h-[60px] object-cover items-center'>
                <img src={Product_Placeholder} alt="" />
                </div>
                <div className='w-[60px] h-[60px] object-cover items-center'>
                <img src={Product_Placeholder} alt="" />
                </div>
                <div className='w-[60px] h-[60px] object-cover items-center'>
                <img src={Product_Placeholder} alt="" />
                </div>
                </div>
                
            </div>
            

            </div>
                
            <div className='flex-wrap w-[516px]'>
                <p className='text-3xl font-bold'>Pure Enrichment® MistAire™ Ultrasonic Cool Mist Humidifier</p>
                <p className='text-3xl font-bold -mt-[20px]'>$39.99</p>
                <p className=''><Divider /></p>
                <div className='w-[363px]'>
                <p>Premium Unit Lasts Up to 25 Hours with Whisper-Quiet Operation, Automatic Shut-Off, Night Light Function, and BPA-Free.</p>
                <p> <span className='font-bold'>Seller: </span>Frank</p>
                <p> <span className='font-bold'>Post Date: </span>Jan 22 2022</p>
                <p> <span className='font-bold'>Condition: </span>90% New</p>
                <p> <span className='font-bold'>Delivery: </span>Self-Pickup</p>
                </div>
                
            </div>


  </div>
    );
}

export default Product;