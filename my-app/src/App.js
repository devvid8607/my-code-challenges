import "./App.css";
import React, { createContext, useState } from "react";
import Parent from "./components/Parent";
import Toggle from "./components/Toggle";
import Slides from "./components/Slides";
import Articles from "./components/Articles";

//const title = "Sorting Articles";
function App() {
  // const articles = [
  //   {
  //     title: "Workout Plan",
  //     upvotes: 10,
  //     date: "2003-08-23",
  //   },
  //   {
  //     title: "Push ups",
  //     upvotes: 20,
  //     date: "2000-08-23",
  //   },
  //   {
  //     title: "Push ups 2",
  //     upvotes: 5,
  //     date: "2002-08-23",
  //   },
  // ];
  // const [articleList, setArticleList] = useState(articles);
  // const sortByVotes = () => {
  //   console.log("sorting by votes");
  //   var newArticleList = [];
  //   Object.assign(newArticleList, articleList);
  //   newArticleList.sort((a, b) => {
  //     if (a.upvotes > b.upvotes) return -1;
  //     if (a.upvotes < b.upvotes) return 1;
  //     else return 0;
  //   });
  //   setArticleList(newArticleList);
  //   console.log(newArticleList);
  // };
  // const sortByDate = () => {
  //   var newArticleList = [];
  //   Object.assign(newArticleList, articleList);
  //   newArticleList.sort((a, b) => {
  //     const aDate = new Date(a.date);
  //     const bDate = new Date(b.date);
  //     if (aDate > bDate) return -1;
  //     if (aDate < bDate) return 1;
  //     else return 0;
  //   });
  //   setArticleList(newArticleList);
  //   console.log(newArticleList);
  // };
  // return (
  //   <div className="App">
  //     <h8k-navbar header={title}></h8k-navbar>
  //     <div className="layout-row align-items-center justify-content-center my-20 navigation">
  //       <label className="form-hint mb-0 text-uppercase font-weight-light">
  //         Sort By
  //       </label>
  //       <button
  //         data-testid="most-upvoted-link"
  //         className="small"
  //         onClick={() => sortByVotes()}
  //       >
  //         Most Upvoted
  //       </button>
  //       <button
  //         data-testid="most-recent-link"
  //         className="small"
  //         onClick={() => sortByDate()}
  //       >
  //         Most Recent
  //       </button>
  //     </div>
  //     <Articles articles={articleList} />
  //   </div>
  // );
  ///////////////////////////////////////////////////////////////////////////////////////
  // const slides = [
  //   {
  //     title: "Workout Plan",
  //     text: "Fundamental Exercise",
  //   },
  //   {
  //     title: "Push ups",
  //     text: "10 reps",
  //   },
  //   {
  //     title: "Push ups 2",
  //     text: "20 reps",
  //   },
  // ];
  // const [on, setOn] = useState(true);
  // return <Slides slides={slides} />;
  // return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
}

export default App;
