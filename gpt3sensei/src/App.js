import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import Responses from "./components/Responses";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [answers, setAnswers] = useState([]);

  const submit = async (e) => {
    const url = process.env.REACT_APP_URL;
    const data = {
      prompt: question,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    if (question.length !== 0) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: ` Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const payload = await response.json();
      setResponse(payload);
      setAnswers([
        {
          question: question,
          response: payload.choices[0].text,
          id: payload.id,
        },
        ...answers,
      ]);
    }
  };

  useEffect(() => {
    if (answers.length > 0) {
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, [answers]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("answers"));
    if (items) {
      setAnswers(items);
    }
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Grid
        container={true}
        columns={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        sx={{ margin: "auto", padding: "5px", paddingTop: 1 }}
      >
        <Typography
          variant="h3"
          mt={4}
          mb={2}
          sx={{
            fontFamily: "PT Sans Caption",
          }}
          component="h1"
          aria-label="Web Sensei"
        >
          Web Sensei
        </Typography>
        <Header animationPath="/86558-in-peace.json" />
        <Typography
          variant="h4"
          mt={2}
          mb={4}
          sx={{
            fontFamily: "PT Sans Caption",
          }}
          component="h2"
          aria-label="Type Your Question and You Will Receive Enlightenment"
        >
          Type Your Question and You Will Receive Enlightenment
        </Typography>
        <SearchField
          question={question}
          setQuestion={setQuestion}
          submit={submit}
        />
        <Responses question={question} response={response} answers={answers} />
      </Grid>
    </Box>
  );
}

export default App;
