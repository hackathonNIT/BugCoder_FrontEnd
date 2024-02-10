import React from "react";
import{useForm,Controller}from "react-hook-form";
import { Grid,TextField,Button,MenuItem,FormControlLabel } from "@mui/material";

function ColorfulTextField({ datas }) {

  // 各行の文字色
  const colors = ['#880000', '#111111', '#476B43']; // 例として3つの色を使用
  const bgcolors=['#FFD7D5', '#FFFFFF', '#CCFFD8'];
  //#CCFFD8 #E6FFEC
  return (
    <div>
      {datas.map((data, index) => (
        data.code.split(/(\n )/).map((d,i)=>(
          <span style={{ background:bgcolors[data.status+1], color: colors[data.status+1] }}>
          {d}
          {console.log(d)}
          <br/>
          </span>
        ))
        // 各行のspan要素に適用するスタイルを設定する
      ))}
    </div>
  );
}

const SubmitCode = (props) => {
  const submitedcode=[
    {code: "#include<iostream>\n int main(){\n", status: 0 },
    {code: "cout<<hello<<endl;\n", status: -1 },
    {code: "std::cout<<hello<<std::endl;\n", status: 1 },
    {code: "}", status: 0 }
  ]
  return (
    <div style={{paddingTop:"20px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 20px #5f5f5f",}}>
      <Grid container >
        <Grid sm={1}/>
          <Grid  xs={10} >
          <h1 style={{marginBottom:"0px",}}>提出コード</h1>
          <hr style={{marginTop:"0px",marginBottom:"10px",border:"0",borderTop:"1px solid #eee"}}/>
          
          <div style={{outlineColor:"#ddd",outlineStyle:"solid",padding:"20px"}}>
            <ColorfulTextField datas={submitedcode}/>
          </div>
          </Grid>
      </Grid>
    </div>
  );
};

export default SubmitCode;