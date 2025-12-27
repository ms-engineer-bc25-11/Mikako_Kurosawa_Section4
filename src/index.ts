import app from "./app";

const port = 4000;

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})