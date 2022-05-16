import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const Responses = ({ ...props }) => {
  const { answers } = props;

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "15px",
        maxWidth: "100%",
      }}
    >
      {answers.length > 0 ? (
        <>
          <Typography
            variant="h4"
            mt={3}
            mb={6}
            sx={{ textAlign: "center", fontFamily: "PT Sans Caption" }}
          >
            My Answers
          </Typography>
          <Grid
            component={Paper}
            elevation={3}
            bgcolor="#FFFFFF"
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            sx={{ paddingBottom: 1 }}
          >
            {answers ? (
              answers.map((item) => {
                return (
                  <>
                    <Grid item xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Typography variant="subtitle2" mb={1}>
                          Question:
                        </Typography>
                        <Typography variant="subtitle2" mb={1}>
                          {item.question}
                        </Typography>
                      </Stack>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Typography variant="subtitle2" mb={1}>
                          Response:
                        </Typography>
                        <Typography variant="subtitle2" mb={1}>
                          {item.response}
                        </Typography>
                      </Stack>
                      <Divider />
                    </Grid>
                  </>
                );
              })
            ) : (
              <Typography>You have yet to ask me something </Typography>
            )}
          </Grid>
        </>
      ) : null}
    </Box>
  );
};

export default Responses;
