import React from 'react';
import "./Widgets.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';

function Widgets() {

    const newsArticles = (heading, subtitle) => {
        return (
            <div className="widgets_article">
                <div className="widgets_articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon /> 
        </div>
        {newsArticles("LinkedIn Clone", "Top news - 5467 readers")}
        {newsArticles("Recruitment Drive", "Top news - 3811 posts")}
        {newsArticles("Bitcoin Breaks $45k", "Top news - 5467 readers")}
        {newsArticles("NFT & Metaverse", "Top news - 8976 readers")}
        {newsArticles("React Redux", "Top news - 132 readers")}
        {newsArticles("Redux vs ContextAPI", "Top news - 3318 readers")}
        {newsArticles("Russia Ukrain War", "Top news - 2896 died")}
    </div>
  )
}

export default Widgets;