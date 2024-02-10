import React from "react";
import { Grid,TextField,Button,MenuItem, } from "@mui/material";
import logo from"../image/logo2.png"
import IssueCard from "./IssueCard";
import { useAuth,AuthProvider } from "./AuthProvider";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";



const TopPage = (props) => {
  const [data, setData] = useState(0);
  const issueDataLink='http://localhost:5050/api/v1/code';
  console.log(String(issueDataLink));
  useEffect(() => {
      fetch(issueDataLink)
          .then(response => response.json())
          .then(data=> setData(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(data.length);
  const latestIssue=data.length-1;

  return (
    <div>
      <div style={{paddingTop:"40px",paddingBottom:"0px",backgroundColor:"#444", width:"100%",minWidth:"700px",marginRight:"auto",marginLeft:"auto",}}>
        <Grid container spacing={1}>
        <Grid item xs={0.3}></Grid>
        <Grid item>
          <img src={logo} style={{width:"150px", padding:"10px"}}/>
        </Grid>
        <Grid item xs={0.3} style={{background:"#fff"}}></Grid>
        <Grid item xs={8.5}>
          <div style={{paddingLeft:"10px",paddingBottom:"10px"}}>
            <h1  style={{color:"#fff",marginBottom:"0px",fontSize:"28px",fontWeight:"600",paddingLeft:"0px",fontFamily:"sans-serif"}}>BagCoder</h1>
            <p style={{color:"#fff",marginBottom:"0px",fontSize:"15px",paddingLeft:"0px",fontFamily:"sans-serif"}}>プログラミングにおけるバグ解決の場を提供するSNSプラットフォームです。</p>
            <p style={{color:"#fff",marginBottom:"0px",fontSize:"15px",paddingLeft:"0px",fontFamily:"sans-serif"}}>ユーザーはバグの詳細な説明やプログラムのサンプルセットを投稿し、他のユーザーはその問題を解決するプログラムを提供します。</p>
          </div>
        </Grid>
        </Grid>
      </div>
      <div style={{paddingTop:"40px",paddingBottom:"0px", width:"80%",minWidth:"700px",marginRight:"auto",marginLeft:"auto",}}>
        <Grid container>
          <Grid sm={1}/>
          <Grid xs={10} spacing={2}>
            {data &&<IssueCard title={data[latestIssue].title} language={'Cpp'} username={data[latestIssue].user_id} id={data[latestIssue].code_id}/>
            }
            <br/>
            {data &&<IssueCard title={data[latestIssue-1].title} language={'Cpp'} username={data[latestIssue-1].user_id} id={data[latestIssue-1].code_id}/>
            }
            <br/>
            {data &&<IssueCard title={data[latestIssue-2].title} language={'Cpp'} username={data[latestIssue-2].user_id} id={data[latestIssue-2].code_id}/>
            }
            <br/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TopPage;