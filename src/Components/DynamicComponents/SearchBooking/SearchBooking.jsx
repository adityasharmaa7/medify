import React,{useState,useMemo} from 'react'
import { Stack, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function SearchBooking({ list, filterList }) {
    const [inputText, setInputText] = useState("");

    const filteredList = useMemo(() => {
        if (!inputText.trim()) return list;
        return list.filter((item) =>
          item["Hospital Name"]
            .toLowerCase()
            .includes(inputText.trim().toLowerCase())
        );
      }, [inputText, list]);

      const handleSubmit = (e) => {
        e.preventDefault();
        filterList(filteredList);
      };
  return (
    <form onSubmit={handleSubmit}>
      <Stack 
        display="flex"
        flexDirection={{sx:"column",md:"row"}}
        gap={3}
        >
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8,flexShrink: 0,mt:{xs:"20px",md:0} }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  )
}

export default SearchBooking
