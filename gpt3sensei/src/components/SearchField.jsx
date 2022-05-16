// import TextField from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";

const SearchField = ({ ...props }) => {
  const { question, setQuestion, submit } = props;

  const topPicks = [
    {
      label: "Why should I not be the first to strike?",
      value: "Why should I not be the first to strike?",
    },
    {
      label: "What does the wiseman say to the ignorant",
      value: "What does the wiseman say to the ignorant",
    },
  ];

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "15px",
        width: 650,
        maxWidth: "100%",
      }}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          label="Ask and you will receive"
          variant="outlined"
          value={question}
          fullWidth
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
