import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./New.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function New(props) {
  const [dataNew, setDataNew] = useState([]);
  const [FirstData, setFirstDate] = useState([]);
  const [dataNewFive, setDataNewFive] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:5117/api/Post`)
    .then(result => {
      console.log(result.data.data);
      const datapost = result.data.data;
      setDataPost(datapost.slice(0,10));
    })
    .catch(err => console.log(err));
  })
  useEffect(() =>{
    axios.get(`http://localhost:5288/api/New`)
    .then(result => {
      console.log(result.data.data);
      setDataNew(result.data.data);
      setFirstDate(result.data.data[0]);
      const fivedata = result.data.data;
      setDataNewFive(fivedata.slice(0, 5));
    }).catch(err => console.log(err));
  }, [])
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("header-new")}>
          <h1>Tin tức bất động sản mới nhất</h1>
          <div className={cx("header-span")}>
            <span>
            New, comprehensive, and engaging information about the Vietnamese 
            real estate market through big data on prices, transactions, supply
             and demand, and real-world surveys conducted by the team of reporters
              and editors at Batdongsan.com.vn.
            </span>
          </div>
        </div>
        {/* trang duoi */}
        <div className={cx("list-content")}>
          <div className={cx("header-list-conent")}>
            <div className={cx("img-conent")}>
              <img
                src={FirstData.image}
                alt="Căn Hộ Vừa Túi Tiền Thanh Khoản Tốt Nhưng Thiếu Cung"
              />
              <div className={cx("textOverLay")}>
                <div className={cx("Artcle-content")}>
                  <span>{FirstData.createdAt} • Tin tức</span>
                  <h3>{FirstData.title}</h3>
                  <p>
                  In Q2, affordable apartments are currently the segment with good 
                  liquidity in the market, but the supply is limited and does not meet the demand.
                  </p>
                </div>
              </div>
              <div className={cx("backgroundOverLay")}></div>
            </div>
            {/* ban phai */}
            <div className={cx("text-conent")}>
              {dataNewFive.map((item,index) => (
                <div className={cx("articleRightContent")}>
                <span>{item.createdAt} • News</span>
                <h3>
                  <a href="fac.com" target="blank">
                    {item.title}
                  </a>
                </h3>
              </div>
              ))}
            </div>
          </div>
          {/* ============ */}
          <div className={cx("row-layout")}>
            <div className={cx("row-layout-right")}>
             {dataNewFive.map((item,index ) => (
              <Link to={`/infonew/${item.id}`}>
               <div className={cx("ArticleFeed_wrapper")}>
               <div className={cx("ArticleCardLarge_articleWrapper")}>
                 <div className={cx("ArticleCardLarge_articleCards")}>
                   <div className={cx("ArticleCardLarge_mediaImage")}>

                       <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          News
                       </span>
                       <img
                         src={item.image}
                         alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                       />
                   </div>
                   <div className={cx("ArticleCardLarge_articleContent")}>
                     <div className={cx("ArticleCardLarge_articleDate")}>
                       <p>
                         <span className="ArticleCardLarge_articleDate">
                          {item.createdAt} • Content Department
                         </span>
                       </p>
                     </div>
                     <h3>
                        {item.title}
                     </h3>
                     <div className={cx("ArticleCardLarge_articleInfo")}>
                       <p className={cx("ArticleCardLarge_articleExcerpt")}>
                         {item.content}
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
               

             </div>
              </Link>
             ))}
              
              <div className={cx("xemthem")}>
                <button className={cx("ArticleFeed_showMoreButton")}>
                 See more
                </button>
              </div>
            </div>

            <div className={cx("row-layout-left")}>
              <div className={cx("PopularArticles_popularArticlesWrapper")}>
                <h2>Top viewed article</h2>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>1</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Update on Bank Loan Interest Rates for July 2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>2</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Update on Bank Loan Interest Rates for July 2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>3</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Update on Bank Loan Interest Rates for July 2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>4</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Update on Bank Loan Interest Rates for July 2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>5</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                  Update on Bank Loan Interest Rates for July 2024
                  </a>
                </div>
              </div>
              <div className={cx("NewsPageTemplate_stickySection")}>
                <div className={cx("HotLocations_wrapper")}>
                  <h2>Real estate markets in the most dynamic provinces/cities</h2>
                  <div className={cx("HotLocations_container")}>
                    <a href="/tin-tuc/bat-dong-san-ha-noi">
                      <div className={cx("HotLocations_cell", "imgHN")}>
                        <div className={cx("HotLocations_overlay")}>
                          <span className={cx("HotLocations_title")}>
                            Ha Noi
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href="/tin-tuc/bat-dong-san-tp-hcm">
                      <div className={cx("HotLocations_cell", "imgHCM")}>
                        <div className={cx("HotLocations_overlay")}>
                          <span className={cx("HotLocations_title")}>
                            Ho Chi Minh
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={cx("BigLocations_wrapper")}>
                    <h2>Real estate markets in 10 major provinces/cities</h2>
                    <div className={cx("BigLocations_container")}>
                      {dataPost.map((item,index) => (
                        <div className={cx("BigLocations_item")} key={index}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        >
                          <img src={item.postImages[0].imageUrl} alt="post" />
                        </div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          {item.address}
                        </a>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("seoFooterContainer")}>
          <div className={cx("seoFooterWrapper")}>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                Trending topics
                </a>
              </div>
              {/* ===== */}
              <div
                className={cx(
                  "SeoFooter_seoItemWrapper",
                  "SeoFooter_seoItemWrapperCollapes"
                )}
              >
                <a
                  href="/tin-tuc"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Real estates news
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates in Hanoi
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates in Ho Chi Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Market analysis
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Buy real estates
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Sell real estates
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Rent real estates
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Planning - Legal
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Finance
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video review
                </a>
              </div>
            </div>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                Trending topics
                </a>
              </div>
              {/* ===== */}
              <div
                className={cx(
                  "SeoFooter_seoItemWrapper",
                  "SeoFooter_seoItemWrapperCollapes"
                )}
              >
                <a
                  href="/tin-tuc"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates news
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estate in Ha Noi
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estate in Ho Chi Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Market analysis
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Buy real estates
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                   Sell real estates
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                   Rent real estates
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Planning - Legal
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Finance
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video review
                </a>
              </div>
            </div>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                  Trending topics
                </a>
              </div>
              {/* ===== */}
              <div
                className={cx(
                  "SeoFooter_seoItemWrapper",
                  "SeoFooter_seoItemWrapperCollapes"
                )}
              >
                <a
                  href="/tin-tuc"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates news
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates in Ha Noi
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates in Ho Chi Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                   Market analysis
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Buy real estates
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Sell real estates
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Rent real estates
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Planning- legal
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Finance
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video review
                </a>
              </div>
            </div>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                 Trending topics
                </a>
              </div>
              {/* ===== */}
              <div
                className={cx(
                  "SeoFooter_seoItemWrapper",
                  "SeoFooter_seoItemWrapperCollapes"
                )}
              >
                <a
                  href="/tin-tuc"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                   Real estate news
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estate in Ha Noi
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Real estates in Ho Chi Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Market analysis
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Buy real estates
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Sell real estates
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Rent real estates
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Planning - Legal
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                 Finance
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video review
                </a>
              </div>
            </div>
            <button className={cx("SeoFooter_loadMore")}>See more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
