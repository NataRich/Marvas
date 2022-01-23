import { Select,Slider,Radio,Rate,DatePicker, Space } from 'antd';

const { Option } = Select;
function onChange(date, dateString) {
    console.log(date, dateString);
  }
function selectVal(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}

export default function Filter(){
    return (
    <div className='mt-[300px] m-[50px]'>
        <div><Select
        showSearch
        placeholder="Select a Catagory"
        optionFilterProp="Catagory"
        selectVal={selectVal}
        onSearch={onSearch}
        filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="Electronics">Electronics</Option>
        <Option value="Sports">Sports</Option>
        <Option value="Books">Books</Option>
        <Option value="Health">Health</Option>
        <Option value="Toys">Toys</Option>
        <Option value="Handmade">Handmade</Option>
        </Select></div>
        <div className='mt-[10px] text-xxl font-sans'>
        <div>Price Range<Slider range={{ draggableTrack: true }} defaultValue={[0, 100]} /></div>
        <Radio>Deliverable</Radio>
        <div className='mr-[20px]'>Condition<Rate allowHalf defaultValue={2.5} /></div>
        <div className='mr-[20px]'>Post After<Space direction="vertical">
        <DatePicker onChange={onChange} />
        </Space></div>
        </div>
        
    </div>);

};