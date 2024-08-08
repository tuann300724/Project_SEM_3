import React, { useEffect, useState } from "react";
import styles from "./toolpage.module.scss";
import classNames from "classnames/bind";
import { banks } from "./bankslist";
const months = [
  { month: 1 },
  { month: 2 },
  { month: 3 },
  { month: 6 },
  { month: 9 },
  { month: 12 },
  { month: 14 },
  { month: 28 },
  { month: 36 },
];

function Toolspage(props) {
  const [bankinterestRate, setBankinterestRate] = useState(null);
  const [Money, setMoney] = useState(0);
  const [Borrowtime, setBorrowtime] = useState(0);
  const [InterestRate, setInterestrate] = useState(0);
  const [Type, setType] = useState("");
  const [Datevay, setDatevay] = useState("month");
  const [Dateinterest, setDateinterest] = useState("month");
  const [calculatedResults, setCalculatedResults] = useState([]);



  useEffect(() => {
    console.log(Money);
    console.log(Borrowtime);
    console.log(InterestRate);
    console.log(Type);
    console.log(Datevay);
  }, [Money, Borrowtime, InterestRate, Type, Datevay]);

  const calculateInterest = () => {
    let results = [];
    let principal = Money;
    let annualInterestRate = InterestRate / 100;
    let numberOfPayments = Borrowtime;
    let monthlyInterestRate = annualInterestRate / 12;

    for (let i = 1; i <= numberOfPayments; i++) {
        let interestPayment = principal * monthlyInterestRate;
        let principalPayment = Money / numberOfPayments;
        let totalPayment = principalPayment + interestPayment;

        results.push({
            period: i,
            principal: principal.toFixed(2),
            principalPayment: principalPayment.toFixed(2),
            interestPayment: interestPayment.toFixed(2),
            totalPayment: totalPayment.toFixed(2)
        });

        principal -= principalPayment;
    }

    setCalculatedResults(results);
};

  const cx = classNames.bind(styles);

  return (
    <div className={cx("container-xl", "abc")}>
      <div className={cx("row")}>
        <div className={cx("col-lg-3 d-lg-block d-none")}>
          <div className={cx("box-right")}>
            <div className={cx("box-tools")}>
              <div className={cx("tools-title")}>Support utilities</div>
              <li>See house direction</li>
              <li>See the age when the house was built</li>
              <li>Office feng shui</li>
              <li>Choose paint color</li>
              <li>Detailed estimate</li>
              <li>Brief calculation</li>
              <li>Materials planning</li>
              <li>Calculate interest</li>
            </div>
          </div>
        </div>
        <div className={cx("col-lg-6 col-12")}>
          <div className={cx("box-center")}>
            <span className={cx("title")}>Calculate interest rate</span>
            <div className={cx("box-caculator")}>
              <div className={cx("caculator-title")}>
              Find bank interest rates
              </div>
              {/* <div className={cx("caculator-ult-money")}>
                <div className={cx("first-radio")}>
                  <input type="radio" name="money" id="vnd" />
                  <label htmlFor="vnd">VND</label>
                </div>
                <div className={cx("first-radio")}>
                  <input type="radio" name="money" id="usd" />
                  <label htmlFor="usd">USD</label>
                </div>
              </div> */}
              <div className={cx("bank-info")}>
                <span className={cx("detail")}>Bank</span>
                <div className={cx("select-bank")}>
                  <select name="bank" onChange={(e) => setBankinterestRate(e.target.value)}>
                    <option>Choose Bank</option>
                    {banks.map((item, index) => (
                      <option value={item.interestRate}  key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={cx("fl-info")}>
                <span className={cx("detail")}>Period</span>
                <div className={cx("select-bank")}>
                  <select name="bank">
                    {months.map((item, index) => (
                      <option value={item.month} key={index}>
                        {item.month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={cx("percent-info")}>
                <span className={cx("detail")}>Interest rate</span>
                <div className={cx("select-bank")}>{bankinterestRate ? `${bankinterestRate} %` : "Không có"}</div>
              </div>
            </div>
            <div className={cx("box-seconds-caculator")}>
              <div className={cx("seconds-title")}>
              This table helps you calculate the amount you need to pay when borrowing from the bank
              Buy a house in installments
              </div>
              <div className={cx("ultils-row")}>
                <label htmlFor="price">Loan</label>
                <div className={cx("input-row")}>
                  <input
                    type="text"
                    id="price"
                    placeholder="0"
                    value={Money}
                    onChange={(e) =>
                      setMoney(Number(e.target.value.replace(/\./g, "")))
                    }
                  />
                </div>
              </div>
              <div className={cx("ultils-row")}>
                <label htmlFor="interest">Borrowed time</label>
                <div className={cx("input-row")}>
                  <input
                    type="text"
                    id="timevay"
                    placeholder="0"
                    className={cx("input-one")}
                    value={Borrowtime}
                    onChange={(e) => setBorrowtime(Number(e.target.value))}
                  />
                  %
                  <select
                    name="daytime"
                    className={cx("input-two")}
                    value={Datevay}
                    onChange={(e) => setDatevay(e.target.value)}
                  >
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
              <div className={cx("ultils-row")}>
                <label htmlFor="interest">Interest rate</label>
                <div className={cx("input-row")}>
                  <input
                    type="text"
                    id="interest"
                    placeholder="0"
                    className={cx("input-one")}
                    value={bankinterestRate}
                    onChange={(e) => setInterestrate(Number(e.target.value))}
                  />
                  %
                  <select
                    name="daytime"
                    className={cx("input-two")}
                    value={Dateinterest}
                    onChange={(e) => setDateinterest(e.target.value)}
                  >
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
              <div className={cx("ultils-row")}>
                <label htmlFor="type">Type</label>
                <div className={cx("input-row")}>
                  <select
                    name="daytime"
                    className={cx("select-button")}
                    value={Type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="1">Outstanding debt gradually decreases</option>
                    <option value="2">Pay interest equally</option>
                    <option value="3">
                    Pay interest gradually (monthly capital)
                    </option>
                    <option value="4">Paying interest gradually (quarterly capital)</option>
                  </select>
                </div>
              </div>
              <div className={cx("btn-caculator")}>
                <button onClick={calculateInterest}>Calculate</button>
              </div>
            </div>
          </div>
          <div className={cx("total-table")}>
            <table className={cx("table table-hover")}>
              <thead>
                <tr>
                <th>Number of payment periods</th>
                  <th>Balance at the beginning of the period</th>
                  <th>Payable capital</th>
                  <th>Interest payable</th>
                  <th>Capital + Interest</th>
                </tr>
              </thead>
              <tbody>
                {calculatedResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.period}</td>
                    <td>{Number(result.principal).toLocaleString("vi-VN")}</td>
                    <td>
                      {Number(result.principalPayment).toLocaleString("vi-VN")}
                    </td>
                    <td>
                      {Number(result.interestPayment).toLocaleString("vi-VN")}
                    </td>
                    <td>
                      {Number(result.totalPayment).toLocaleString("vi-VN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={cx("col-lg-3 d-lg-block d-none")}>
          <div className={cx("box-left")}>
            <div className={cx("box-news")}>
              <div className={cx("news-title")}>Latest news</div>
              <div className={cx("list-news")}>
                <div className={cx("box-wraper")}>
                  <div className={cx("news-img")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
                      alt="news"
                    />
                  </div>
                  <span className={cx("news-context")}>
                    Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh
                    Biết Đón Thời Cơ
                  </span>
                </div>
                <div className={cx("box-wraper")}>
                  <div className={cx("news-img")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
                      alt="news"
                    />
                  </div>
                  <span className={cx("news-context")}>
                    Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh
                    Biết Đón Thời Cơ
                  </span>
                </div>
                <div className={cx("box-wraper")}>
                  <div className={cx("news-img")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
                      alt="news"
                    />
                  </div>
                  <span className={cx("news-context")}>
                    Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh
                    Biết Đón Thời Cơ
                  </span>
                </div>
                <div className={cx("box-wraper")}>
                  <div className={cx("news-img")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
                      alt="news"
                    />
                  </div>
                  <span className={cx("news-context")}>
                    Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh
                    Biết Đón Thời Cơ
                  </span>
                </div>
                <div className={cx("box-wraper")}>
                  <div className={cx("news-img")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
                      alt="news"
                    />
                  </div>
                  <span className={cx("news-context")}>
                    Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh
                    Biết Đón Thời Cơ
                  </span>
                </div>
                <div className={cx("box-wraper")}>
                  <div className={cx("news-img")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1716025524809-048d12b087d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
                      alt="news"
                    />
                  </div>
                  <span className={cx("news-context")}>
                    Tấn Đức Central Park – Điểm Đến Của Những Nhà Kinh Doanh
                    Biết Đón Thời Cơ
                  </span>
                </div>
              </div>
            </div>
            <div className={cx("like-fanpge")}>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=100030728356283"
                data-tabs="timeline"
                data-width="261"
                data-height="100"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=100030728356283"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/profile.php?id=100030728356283">
                  Nguyen Anh Tuan Brokerage Expert, 
                  Tuan Dat Valuation of All Types of Land
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolspage;
