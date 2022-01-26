import React from 'react';
import {
  NewsContainer,
  NewsCardTitle,
  NewsCard,
  NewsCardImg,
  Img,
  NewsCardContent,
} from './components/Container';
import img_first from '../../assets/img/Homepage__NewsCard-first.jpeg';
import img_second from '../../assets/img/Homepage__NewsCard-second.png';
import img_third from '../../assets/img/Homepage__NewsCard-third.jpeg';

const News = () => {
  return (
    <React.Fragment>
      <NewsContainer>
        <NewsCardTitle>
          <h2>Latest Property News</h2>
        </NewsCardTitle>
        <NewsCard>
          <NewsCardImg>
            <Img src={img_first}></Img>
          </NewsCardImg>
          <NewsCardContent>
            <h3>
              Sydney auctions: Records smashed as inner west house sells for nearly $1m over reserve
            </h3>
            <span>by Aidan Devine</span>
            <p>
              Inner west suburb Strathfield has a new record house price after a competitive auction
              where a dozen registered bidde...
            </p>
          </NewsCardContent>
          <a href="https://www.realestate.com.au/news/sydney-auctions-records-smashed-as-inner-west-house-sells-for-nearly-1m-over-reserve/?pid=ref-buy-homepage-feature-1">
            Sydney auctions: Records smashed as inner west house sells for nearly $1m over reserve
          </a>
        </NewsCard>
        <NewsCard>
          <NewsCardImg>
            <Img src={img_second}></Img>
          </NewsCardImg>
          <NewsCardContent>
            <h3>
              Sydney auctions: cheaper homes get strong response as fear of missing out gets
              replaced by fear of overpaying
            </h3>
            <span>by Aidan Devine</span>
            <p>
              The fear of missing out defined the mood of buyers at auctions earlier this year, but
              it’s been replaced by a new fea...
            </p>
          </NewsCardContent>
          <a href="https://www.realestate.com.au/news/sydney-auctions-cheaper-homes-get-strong-response-as-fear-of-missing-out-gets-replaced-by-fear-of-overpaying/?pid=ref-buy-homepage-feature-2">
            Sydney auctions: cheaper homes get strong response as fear of missing out gets replaced
            by fear of overpaying
          </a>
        </NewsCard>
        <NewsCard>
          <NewsCardImg>
            <Img src={img_third}></Img>
          </NewsCardImg>
          <NewsCardContent>
            <h3>Netflix series sheds light on major hurdle facing women fleeing violence</h3>
            <span>by Emily Hutchinson</span>
            <p>
              Netflix series Maid shed light on growing issue of housing for women fleeing domestic
              violence.
            </p>
          </NewsCardContent>
          <a href="https://www.realestate.com.au/news/more-spots-in-first-homebuyer-deposit-guarantee-scheme-reissued-by-the-federal-government/?pid=ref-buy-homepage-feature-1">
            Netflix series sheds light on major hurdle facing women fleeing violence
          </a>
        </NewsCard>
      </NewsContainer>
    </React.Fragment>
  );
};

export default News;
