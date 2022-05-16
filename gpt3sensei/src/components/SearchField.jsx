import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const SearchField = ({ ...props }) => {
  const { question, setQuestion, submit } = props;

  return (
    <Box
      bgcolor="#FFFFFF"
      sx={{
        margin: "auto",
        marginTop: "15px",
        width: 650,
        maxWidth: "100%",
      }}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          label="Ask your question here and you will receive"
          variant="outlined"
          value={question}
          fullWidth
          aria-label="Ask your ansewer and you will recieve an ansewer"
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />
        <Button onClick={submit} variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchField;
