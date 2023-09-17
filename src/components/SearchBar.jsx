import { Input, Divider } from 'antd';

function SearchBar(props) {
  const { searchTerm, onSearchChange } = props;
  return (
    <form>
      <Divider>Search</Divider>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
        className="Input"
      />
    </form>
  );
}

export default SearchBar;
