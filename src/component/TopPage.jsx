import React from "react";
import { Grid,TextField,Button,MenuItem, } from "@mui/material";
import logo from"../image/logo2.png"
import IssueCard from "./IssueCard";
import { useAuth,AuthProvider } from "./AuthProvider";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";



const TopPage = (props) => {
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
            <IssueCard title={'Title'} language={'Cpp'} username={'username'} id={1}></IssueCard>
            <br/>
            <IssueCard title={'Title'} language={'Cpp'} username={'username'}></IssueCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TopPage;