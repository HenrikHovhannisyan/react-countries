import React, { useState, useEffect } from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { postsList } from "../api/postsList";

import { Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Effect = () => {
  const [list, setList] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [isExample, setisExample] = useState(false);

  useEffect(() => {
    console.log("Effect");
    if (isFetch) {
      postsList().then((res) => setList(res));
    }
  }, [isFetch]);

  return (
    <div>
      <Header />
      <Container maxWidth="xl" sx={{ height: "100vh" }}>
        <button onClick={() => setIsFetch((pre) => !pre)}> fetch Posts</button>
        <button onClick={() => setisExample((pre) => !pre)}>
          {" "}
          Example Click
        </button>
        <p>{isExample ? "True" : "False"}</p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isFetch &&
                list.map((post) => (
                  <TableRow
                    key={post.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {post.title}
                    </TableCell>
                    <TableCell>{post.body}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Effect;
