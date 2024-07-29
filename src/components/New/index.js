import React from "react";
import classNames from "classnames/bind";
import styles from "./New.module.scss";

const cx = classNames.bind(styles);
function New(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("header-new")}>
          <h1>Tin tức bất động sản mới nhất</h1>
          <div className={cx("header-span")}>
            <span>
              Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam
              thông qua dữ liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo
              sát thực tế của đội ngũ phóng viên, biên tập của
              Batdongsan.com.vn.
            </span>
          </div>
        </div>
        {/* trang duoi */}
        <div className={cx("list-content")}>
          <div className={cx("header-list-conent")}>
            <div className={cx("img-conent")}>
              <img
                src="https://img.iproperty.com.my/angel/1110x400-fit/wp-content/uploads/sites/7/2023/09/ttbds.png"
                alt="Căn Hộ Vừa Túi Tiền Thanh Khoản Tốt Nhưng Thiếu Cung"
              />
              <div className={cx("textOverLay")}>
                <div className={cx("Artcle-content")}>
                  <span>15/07/2024 15:02 • Tin tức</span>
                  <h3>Căn Hộ Vừa Túi Tiền Thanh Khoản Tốt Nhưng Thiếu Cung</h3>
                  <p>
                    Quý 2, căn hộ vừa túi tiền đang là phân khúc có thanh khoản
                    tốt trên thị trường hiện tại nhưng nguồn cung lại ít ỏi,
                    không đáp ứng được nhu cầu mua.
                  </p>
                </div>
              </div>
              <div className={cx("backgroundOverLay")}></div>
            </div>
            {/* ban phai */}
            <div className={cx("text-conent")}>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
              <div className={cx("articleRightContent")}>
                <span>15/07/2024 09:13 • Tin tức</span>
                <h3>
                  <a href="fac.com" target="blank">
                    Thị Trường Chung Cư Mini Hà Nội: Giới Đầu Tư Lại Chao Đảo
                  </a>
                </h3>
              </div>
            </div>
          </div>
          {/* ============ */}
          <div className={cx("row-layout")}>
            <div className={cx("row-layout-right")}>
              <div className={cx("ArticleFeed_wrapper")}>
                <div className={cx("ArticleCardLarge_articleWrapper")}>
                  <div className={cx("ArticleCardLarge_articleCards")}>
                    <div className={cx("ArticleCardLarge_mediaImage")}>
                      <a
                        href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180"
                        title="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                      >
                        <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          Tin tức
                        </span>
                        <img
                          src="https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2024/07/z5623715829248_5f0796232e858513374f60e9df2c5593.jpg"
                          alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                        />
                      </a>
                    </div>
                    <div className={cx("ArticleCardLarge_articleContent")}>
                      <div className={cx("ArticleCardLarge_articleDate")}>
                        <p>
                          <span className="ArticleCardLarge_articleDate">
                            12/07/2024 08:27 • Ban nội dung
                          </span>
                        </p>
                      </div>
                      <h3>
                        <a href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180">
                          Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công
                        </a>
                      </h3>
                      <div className={cx("ArticleCardLarge_articleInfo")}>
                        <p className={cx("ArticleCardLarge_articleExcerpt")}>
                          Dự án nghỉ dưỡng cao cấp Gran Meliá Nha Trang đang
                          tiếp tục đạt được những bước tiến đáng kể trong quá
                          trình xây dựng và hoàn thiện, hứa hẹn mang đến không
                          gian sống đẳng cấp và tiện nghi tối ưu cho cư dân
                          và...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("ArticleCardLarge_articleWrapper")}>
                  <div className={cx("ArticleCardLarge_articleCards")}>
                    <div className={cx("ArticleCardLarge_mediaImage")}>
                      <a
                        href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180"
                        title="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                      >
                        <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          Tin tức
                        </span>
                        <img
                          src="https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2024/07/z5623715829248_5f0796232e858513374f60e9df2c5593.jpg"
                          alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                        />
                      </a>
                    </div>
                    <div className={cx("ArticleCardLarge_articleContent")}>
                      <div className={cx("ArticleCardLarge_articleDate")}>
                        <p>
                          <span className="ArticleCardLarge_articleDate">
                            12/07/2024 08:27 • Ban nội dung
                          </span>
                        </p>
                      </div>
                      <h3>
                        <a href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180">
                          Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công
                        </a>
                      </h3>
                      <div className={cx("ArticleCardLarge_articleInfo")}>
                        <p className={cx("ArticleCardLarge_articleExcerpt")}>
                          Dự án nghỉ dưỡng cao cấp Gran Meliá Nha Trang đang
                          tiếp tục đạt được những bước tiến đáng kể trong quá
                          trình xây dựng và hoàn thiện, hứa hẹn mang đến không
                          gian sống đẳng cấp và tiện nghi tối ưu cho cư dân
                          và...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("ArticleFeed_wrapper")}>
                <div className={cx("ArticleCardLarge_articleWrapper")}>
                  <div className={cx("ArticleCardLarge_articleCards")}>
                    <div className={cx("ArticleCardLarge_mediaImage")}>
                      <a
                        href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180"
                        title="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                      >
                        <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          Tin tức
                        </span>
                        <img
                          src="https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2024/07/z5623715829248_5f0796232e858513374f60e9df2c5593.jpg"
                          alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                        />
                      </a>
                    </div>
                    <div className={cx("ArticleCardLarge_articleContent")}>
                      <div className={cx("ArticleCardLarge_articleDate")}>
                        <p>
                          <span className="ArticleCardLarge_articleDate">
                            12/07/2024 08:27 • Ban nội dung
                          </span>
                        </p>
                      </div>
                      <h3>
                        <a href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180">
                          Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công
                        </a>
                      </h3>
                      <div className={cx("ArticleCardLarge_articleInfo")}>
                        <p className={cx("ArticleCardLarge_articleExcerpt")}>
                          Dự án nghỉ dưỡng cao cấp Gran Meliá Nha Trang đang
                          tiếp tục đạt được những bước tiến đáng kể trong quá
                          trình xây dựng và hoàn thiện, hứa hẹn mang đến không
                          gian sống đẳng cấp và tiện nghi tối ưu cho cư dân
                          và...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("ProfileAndTagList_profileAndTagList")}>
                    <a
                      className={cx("Tag_tagsItem")}
                      href="/wiki/tag/thi-truong-bds-da-nang"
                    >
                      Thị trường BĐS Đà Nẵng
                    </a>
                  </div>
                </div>
              </div>

              <div className={cx("ArticleFeed_wrapper")}>
                <div className={cx("ArticleCardLarge_articleWrapper")}>
                  <div className={cx("ArticleCardLarge_articleCards")}>
                    <div className={cx("ArticleCardLarge_mediaImage")}>
                      <a
                        href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180"
                        title="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                      >
                        <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          Tin tức
                        </span>
                        <img
                          src="https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2024/07/z5623715829248_5f0796232e858513374f60e9df2c5593.jpg"
                          alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                        />
                      </a>
                    </div>
                    <div className={cx("ArticleCardLarge_articleContent")}>
                      <div className={cx("ArticleCardLarge_articleDate")}>
                        <p>
                          <span className="ArticleCardLarge_articleDate">
                            12/07/2024 08:27 • Ban nội dung
                          </span>
                        </p>
                      </div>
                      <h3>
                        <a href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180">
                          Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công
                        </a>
                      </h3>
                      <div className={cx("ArticleCardLarge_articleInfo")}>
                        <p className={cx("ArticleCardLarge_articleExcerpt")}>
                          Dự án nghỉ dưỡng cao cấp Gran Meliá Nha Trang đang
                          tiếp tục đạt được những bước tiến đáng kể trong quá
                          trình xây dựng và hoàn thiện, hứa hẹn mang đến không
                          gian sống đẳng cấp và tiện nghi tối ưu cho cư dân
                          và...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("ArticleCardLarge_articleWrapper")}>
                  <div className={cx("ArticleCardLarge_articleCards")}>
                    <div className={cx("ArticleCardLarge_mediaImage")}>
                      <a
                        href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180"
                        title="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                      >
                        <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          Tin tức
                        </span>
                        <img
                          src="https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2024/07/z5623715829248_5f0796232e858513374f60e9df2c5593.jpg"
                          alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                        />
                      </a>
                    </div>
                    <div className={cx("ArticleCardLarge_articleContent")}>
                      <div className={cx("ArticleCardLarge_articleDate")}>
                        <p>
                          <span className="ArticleCardLarge_articleDate">
                            12/07/2024 08:27 • Ban nội dung
                          </span>
                        </p>
                      </div>
                      <h3>
                        <a href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180">
                          Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công
                        </a>
                      </h3>
                      <div className={cx("ArticleCardLarge_articleInfo")}>
                        <p className={cx("ArticleCardLarge_articleExcerpt")}>
                          Dự án nghỉ dưỡng cao cấp Gran Meliá Nha Trang đang
                          tiếp tục đạt được những bước tiến đáng kể trong quá
                          trình xây dựng và hoàn thiện, hứa hẹn mang đến không
                          gian sống đẳng cấp và tiện nghi tối ưu cho cư dân
                          và...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("ArticleFeed_wrapper")}>
                <div className={cx("ArticleCardLarge_articleWrapper")}>
                  <div className={cx("ArticleCardLarge_articleCards")}>
                    <div className={cx("ArticleCardLarge_mediaImage")}>
                      <a
                        href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180"
                        title="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                      >
                        <span className="ArticleCardLarge_cardHighlight__LDW8t">
                          Tin tức
                        </span>
                        <img
                          src="https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2024/07/z5623715829248_5f0796232e858513374f60e9df2c5593.jpg"
                          alt="Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công"
                        />
                      </a>
                    </div>
                    <div className={cx("ArticleCardLarge_articleContent")}>
                      <div className={cx("ArticleCardLarge_articleDate")}>
                        <p>
                          <span className="ArticleCardLarge_articleDate">
                            12/07/2024 08:27 • Ban nội dung
                          </span>
                        </p>
                      </div>
                      <h3>
                        <a href="/tin-tuc/gran-melia-nha-trang-cap-nhat-tien-do-thi-cong-pr-808180">
                          Gran Meliá Nha Trang - Cập Nhật Tiến Độ Thi Công
                        </a>
                      </h3>
                      <div className={cx("ArticleCardLarge_articleInfo")}>
                        <p className={cx("ArticleCardLarge_articleExcerpt")}>
                          Dự án nghỉ dưỡng cao cấp Gran Meliá Nha Trang đang
                          tiếp tục đạt được những bước tiến đáng kể trong quá
                          trình xây dựng và hoàn thiện, hứa hẹn mang đến không
                          gian sống đẳng cấp và tiện nghi tối ưu cho cư dân
                          và...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("ProfileAndTagList_profileAndTagList")}>
                    <a
                      className={cx("Tag_tagsItem")}
                      href="/wiki/tag/thi-truong-bds-da-nang"
                    >
                      Thị trường BĐS Đà Nẵng
                    </a>
                  </div>
                </div>
              </div>
              <div className={cx("xemthem")}>
                <button className={cx("ArticleFeed_showMoreButton")}>
                  Xem Thêm
                </button>
              </div>
            </div>

            <div className={cx("row-layout-left")}>
              <div className={cx("PopularArticles_popularArticlesWrapper")}>
                <h2>Bài viết được xem nhiều nhất</h2>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>1</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                    Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>2</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                    Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>3</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                    Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>4</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                    Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                  </a>
                </div>
                <div
                  className={cx("PopularArticles_popularArticlesItemHeading")}
                >
                  <div className={cx("PopularArticles_sortedNumber")}>5</div>
                  <a href="/tin-tuc/lai-suat-vay-mua-nha-ngan-hang-nao-thap-nhat-103041">
                    Cập Nhật Lãi Suất Vay Ngân Hàng Tháng 7/2024
                  </a>
                </div>
              </div>
              <div className={cx("NewsPageTemplate_stickySection")}>
                <div className={cx("HotLocations_wrapper")}>
                  <h2>Thị trường BĐS tại các tỉnh / thành sôi động nhất</h2>
                  <div className={cx("HotLocations_container")}>
                    <a href="/tin-tuc/bat-dong-san-ha-noi">
                      <div className={cx("HotLocations_cell", "imgHN")}>
                        <div className={cx("HotLocations_overlay")}>
                          <span className={cx("HotLocations_title")}>
                            Hà Nội
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href="/tin-tuc/bat-dong-san-tp-hcm">
                      <div className={cx("HotLocations_cell", "imgHCM")}>
                        <div className={cx("HotLocations_overlay")}>
                          <span className={cx("HotLocations_title")}>
                            Hồ Chí Minh
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={cx("BigLocations_wrapper")}>
                    <h2>Thị trường BĐS tại 10 tỉnh / thành phố lớn</h2>
                    <div className={cx("BigLocations_container")}>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
                      <div className={cx("BigLocations_item")}>
                        <div
                          className={cx(
                            "BigLocations_image",
                            "BigLocations_image_baRiaVungTau"
                          )}
                        ></div>
                        <a
                          href="/tin-tuc/bat-dong-san-ba-ria-vung-tau"
                          className={cx("BigLocations_title")}
                        >
                          Bà Rịa - Vũng Tàu
                        </a>
                      </div>
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
                  Chủ đề nổi bật
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
                  Tin tức bất động sản
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hà Nội
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hồ Chí Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Báo cáo thị trường
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Mua bất động sản
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bán bất động sản
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Thuê bất động sản
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Quy hoạch - Pháp lý
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Tài chính
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video đánh giá
                </a>
              </div>
            </div>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                  Chủ đề nổi bật
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
                  Tin tức bất động sản
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hà Nội
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hồ Chí Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Báo cáo thị trường
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Mua bất động sản
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bán bất động sản
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Thuê bất động sản
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Quy hoạch - Pháp lý
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Tài chính
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video đánh giá
                </a>
              </div>
            </div>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                  Chủ đề nổi bật
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
                  Tin tức bất động sản
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hà Nội
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hồ Chí Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Báo cáo thị trường
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Mua bất động sản
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bán bất động sản
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Thuê bất động sản
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Quy hoạch - Pháp lý
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Tài chính
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video đánh giá
                </a>
              </div>
            </div>
            <div className={cx("seoCategoryWrapper")}>
              <div className={cx("seoCategoryTitleWrapper")}>
                <a href="/wiki" className={cx("seoCategoryTitle")}>
                  Chủ đề nổi bật
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
                  Tin tức bất động sản
                </a>
                <a
                  href="/bat-dong-san-ha-noi"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hà Nội
                </a>
                <a
                  href="/bat-dong-san-tp-hcm"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bất động sản Hồ Chí Minh
                </a>
                <a
                  href="/interaktivestory"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Báo cáo thị trường
                </a>
                <a
                  href="/wiki/mua-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Mua bất động sản
                </a>
                <a
                  href="/wiki/ban-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Bán bất động sản
                </a>
                <a
                  href="/wiki/thue-bds"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Thuê bất động sản
                </a>
                <a
                  href="/wiki/quy-hoach-phap-ly"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Quy hoạch - Pháp lý
                </a>
                <a
                  href="/wiki/tai-chinh"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Tài chính
                </a>
                <a
                  href="/phan-tich-danh-gia/video-danh-gia"
                  className={cx("SeoFooter_seoItem")}
                  aria-hidden="false"
                >
                  Video đánh giá
                </a>
              </div>
            </div>
            <button className={cx("SeoFooter_loadMore")}>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
