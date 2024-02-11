import React from "react";
import CodeViewer from "./CodeViewer";
import GrayBox from "./GrayBox";
import { Grid,TextField,Button,MenuItem, AppBar, } from "@mui/material";
import {Textarea} from "@mui/joy";
import{useForm,Controller}from "react-hook-form";
import IssueAppbar from "./IssueAppbar";

const Issue = ({title,explane,code,input,output,id,language}) => {
  if(input===null||input==="")input="特になし";
  if(output===null||output==="")output="特になし";
  console.log(input)
  let explane2='';
  explane.split(/(\\n)/).map((item, index) => {
    explane2+=item.match(/\\n/) ? `
` : item
  })
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
            <IssueAppbar page="0" id={id}/>
            <h1 style={{marginBottom:"0px",paddingTop:"20px",fontSize:"28px",fontWeight:"600"}}>{title}</h1>
            <hr style={{marginTop:"10px",marginBottom:"20px",border:"0",borderTop:"1px solid #eee"}}/>
            <h2>想定動作・バグ説明</h2>
            <pre style={{whiteSpace:"pre-wrap", fontFamily:"メイリオ"}}>{explane2}</pre>
            <h2>プログラム</h2>
            <p>使用言語:{language}</p>
            <CodeViewer codeString={code} language="cpp"/>
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