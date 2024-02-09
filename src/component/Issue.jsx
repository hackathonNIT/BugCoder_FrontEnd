import React from "react";
import CodeViewer from "./CodeViewer";
import GrayBox from "./GrayBox";
import { Grid,TextField,Button,MenuItem, } from "@mui/material";
import {Textarea} from "@mui/joy";
import{useForm,Controller}from "react-hook-form";

const Issue = (props) => {
  const title="タイトルです";
  const explane=`ここに説明を表示します。ここに説明を表示します。ここに説明を表示します。ここに説明を表示します。
  ここに説明を表示してくれ。`;
  const code=`
  function greet(name) {
    return 'Hello, ' + name + '!';
  }

  const person = 'World';
  console.log(greet(person));
  `;
  const input=`string:s
int:i`;
  const output=`int:out`;

  const language="cpp";
  const{control,handleSubmit}=useForm({
    defaultValue:{
      program:"",
    },
  });
  const onSubmit=(data,e)=>{
    console.log(data.titleBox);
  };

  return (
    <div style={{paddingTop:"30px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 10px #5f5f5f",}}>
      <Grid container>
        <Grid sm={1}/>
          <Grid xs={10} spacing={2}>
            <h1 style={{marginBottom:"0px",fontSize:"28px",fontWeight:"600"}}>{title}</h1>
            <hr style={{marginTop:"10px",marginBottom:"20px",border:"0",borderTop:"1px solid #eee"}}/>
            <h2>想定動作・バグ説明</h2>
            <pre style={{whiteSpace:"pre-wrap", fontFamily:"メイリオ"}}>{explane}</pre>
            <h2>プログラム</h2>
            <p>使用言語:{language}</p>
            <CodeViewer codeString={code} language={language}/>
            <hr style={{marginTop:"10px",marginBottom:"20px",border:"0",borderTop:"1px solid #eee"}}/>
            <h2>入力</h2>
            <GrayBox contentString={input}/>
            <h2>出力</h2>
            <GrayBox contentString={output}/>

            <hr style={{marginTop:"10px",marginBottom:"20px",border:"0",borderTop:"1px solid #eee"}}/>
            <p>言語:{language}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="program"
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
              <Button
                varient="contained"
                color="secondary"
                type="submit"
                style={{backgroundColor:"#36c"}}
              >
                提出する
              </Button>
            </form>
          </Grid>
        </Grid>
    </div>
  );
};

export default Issue;