import { Input } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import "./custom.css"

const { Search } = Input;

export default function SearchBar() {
    const navigate = useNavigate();

    const handleRecord = () => {
        console.log("recording...")
    }

    const handleSearch = (value, _) => {
        if (value)
            navigate(`/marketplace?query=${value}`)
    }

    const suffix = (
        <AudioOutlined
            className="fill-svg"
            onClick={handleRecord}
        />
      );

    return (
        <Search 
            placeholder="Search" 
            allowClear
            size="large"
            suffix={suffix}
            onSearch={handleSearch}
        />
    )
}