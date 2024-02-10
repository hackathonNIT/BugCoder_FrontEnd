import React from "react";
import CodeViewer from "./CodeViewer";
import GrayBox from "./GrayBox";
import { Grid,TextField,Button,MenuItem, AppBar, } from "@mui/material";
import {Textarea} from "@mui/joy";
import{useForm,Controller}from "react-hook-form";
import IssueAppbar from "./IssueAppbar";
import { useParams } from "react-router-dom";
import { DataGrid,GridColDef,GridRowsProp } from "@mui/x-data-grid";

const colums =[
  {field:'id',headername:'id',type:'number',flex:1},
  {
    field: 'name',
    headerName: 'ユーザー名',
    type: 'string',
    flex: 2,
  },
  {
    field: 'result',
    headerName: '結果',
    type: 'string',
    flex: 1,
  },
  {
    field: 'date',
    headerName: '提出日時',
    type: 'string',
    flex: 1.5,
  },
];

const rows=[
  { id: 1, name: 'JIN', result: 'WA', date: '1992年12月4日' },
  { id: 2, name: 'JUNG KOOK', result: 'AC', date: '1997年9月1日' }
]

const IssueSubmission = (props) => {
  const { issueId,submission } = useParams();
  console.log(issueId)
  console.log(submission)
  return (
    <div style={{paddingTop:"30px",paddingBottom:"20px",background:"#fff", width:"70%",minWidth:"700px",minHeight:"800px",marginRight:"auto",marginLeft:"auto",boxShadow: "0px 5px 10px #5f5f5f",}}>
      <Grid container>
        <Grid sm={1}/>
          <Grid xs={10} spacing={2}>
            <IssueAppbar page="1" id={issueId}/>
            <h1 style={{marginBottom:"0px",paddingTop:"20px",fontSize:"28px",fontWeight:"600"}}>提出結果</h1>
            <hr style={{marginTop:"10px",marginBottom:"20px",border:"0",borderTop:"1px solid #eee"}}/>
            <DataGrid rows={rows} columns={colums}/>
          </Grid>
        </Grid>
    </div>
  );
};

export default IssueSubmission;