import React from "react";
import{useForm,Controller}from "react-hook-form";
import { Grid,TextField,Button,MenuItem,FormControlLabel } from "@mui/material";

const SendIssue = (props) => {
  const{control,handleSubmit}=useForm({
    defaultValue:{
      titleBox:"",
      pullDown:"",
      explaneBox:"",
      programBox:"",
    },
  });
  const onSubmit=(data,e)=>{
    console.log(data.titleBox);
  };
  return (
    <div style={{paddingTop:"20px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 20px #5f5f5f",}}>
      <Grid container >
        <Grid sm={1}/>
          <Grid  xs={10} >
          <h1 style={{marginBottom:"0px",}}>投稿</h1>
          <hr style={{marginTop:"0px",marginBottom:"10px",border:"0",borderTop:"1px solid #eee"}}/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 style={{marginBottom:"0px",}}>タイトル</h3>
              <Controller
                control={control}
                name="titleBox"
                render={({field})=>(
                  <TextField
                    {...field}
                    label="Title"
                    fullWidth
                    margin="normal"
                    placeholder="タイトル"
                  />
                )}
              />
              <h3 style={{marginBottom:"0px",}}>使用言語</h3>
              <Controller
                control={control}
                name="pullDown"
                render={({field})=>(
                  <TextField
                    {...field}
                    label="language"
                    fullWidth
                    margin="normal"
                    id="select"
                    select
                  >
                    <MenuItem value="cpp">C++</MenuItem>
                    <MenuItem value="python">Python</MenuItem>
                    <MenuItem value="java">Java</MenuItem>
                  </TextField>
                )}
              />
              <h3 style={{marginBottom:"0px",}}>想定動作及びバグの説明</h3>
              <Controller
                control={control}
                name="explaneBox"
                render={({field})=>(
                  <TextField
                    {...field}
                    multiline="true"
                    label="Explane"
                    rows="10"
                    fullWidth
                    margin="normal"
                    placeholder="想定動作及びバグの説明"
                  />
                )}
              />
              <hr style={{marginTop:"10px",marginBottom:"10px",border:"0",borderTop:"1px solid #eee"}}/>
              <h3 style={{marginBottom:"0px",}}>プログラム</h3>
              <Controller
                control={control}
                name="programBox"
                render={({field})=>(
                  <TextField
                    {...field}
                    multiline="true"
                    label="Program"
                    rows="15"
                    fullWidth
                    margin="normal"
                    placeholder="プログラム"
                  />
                )}
              />
              <h3 style={{marginBottom:"0px",}}>入出力形式</h3>
              <Controller
                control={control}
                name="inputBox"
                render={({field})=>(
                  <TextField
                    {...field}
                    multiline="true"
                    label="input"
                    rows="2"
                    fullWidth
                    margin="normal"
                    placeholder="int:a"
                  />
                )}
              />
              <Controller
                control={control}
                name="outputBox"
                render={({field})=>(
                  <TextField
                    {...field}
                    multiline="true"
                    label="output"
                    rows="2"
                    fullWidth
                    margin="normal"
                    placeholder="string:s"
                  />
                )}
              />
              <Button
                varient="contained"
                color="secondary"
                type="submit"
                style={{backgroundColor:"#36c", marginTop:"10px"}}
              >
                投稿する
              </Button>
            </form>
          </Grid>
      </Grid>
    </div>
  );
};

export default SendIssue;