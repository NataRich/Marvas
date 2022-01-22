import { Input } from "antd";
import { AudioOutlined } from '@ant-design/icons';

import "./custom.css"

const { Search } = Input;

export default function SearchBar() {
    const handleRecord = () => {
        console.log("recording...")
    }

    const handleSearch = (value) => {
        console.log(value)
    }

    const suffix = (
        <AudioOutlined
            className="fill-svg"
            onClick={handleRecord}
        />
      );

    return (
        <Search 
            className="w-[375px] group" 
            placeholder="Search" 
            allowClear
            size="large"
            suffix={suffix}
            onSearch={handleSearch}
        />
    )
}