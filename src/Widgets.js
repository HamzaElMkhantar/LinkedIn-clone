import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading , subtitle) => {
            return(
                <div className='widgets-article'>
                    <div className='widgets-articleLeft'>
                        <FiberManualRecordIcon />
                    </div>
                    <div className='widgets-articleRight'>
                        <h4>{heading}</h4>
                        <p>{subtitle}</p>
                    </div>
                </div>
            )

        }

  return (
    <div className='widgets'>
        <div className='widgets-header'>
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>

        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}
        {newsArticle("this is heading test" , "subtitle test")}

    </div>
  )
}

export default Widgets