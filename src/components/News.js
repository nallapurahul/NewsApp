import React, {useEffect,useState} from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";
 
const News = (props) =>{
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalresults, settotalresults] = useState(0);

  const updateNews=async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${'cac09bfb1bcd44349de3d0f0b6f6181c'}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data= await fetch(url);
    let parsedData=await data.json();
    setarticles(parsedData.articles);
    setpage(page+1);
    setloading(false);
    settotalresults(parsedData.totalResults);
  }

  useEffect(() => {
    updateNews();
  }, [])
  

  const fetchMoreData = async ()=>{
    setpage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(false);
    let data= await fetch(url);
    let parsedData=await data.json();
    setarticles(articles.concat(parsedData.articles));
    setloading(false);
    settotalresults(parsedData.totalResults);
  }

    return (
      <>
        <h2 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey -{props.category} Headlines</h2>
 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalresults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
                  <Newsitems title={element.title ? element.title : " "}
                   description={element.description ? element.description : " "}
                    imageUrl={element.urlToImage} newsUrl={element.url}
                    author={element.author} date={element.publishedAt}
                    source={element.source.name} 
                  />
                  </div>;
        })}
        </div>
        </div>
        <ScrollToTop smooth component={<p style={{fontSize:"10px",padding:"2px"}}>Goto Top</p>} />
        </InfiniteScroll>



      </>
    );
}

export default News;
