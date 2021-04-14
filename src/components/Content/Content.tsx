import './Content.css';
import userIcon from '../../assets/img/user.png';
import bankIcon from '../../assets/img/bank-icon.png';
import emailIcon from '../../assets/img/email-icon.png';
import Input from '../../common/Input/Input';
import Dropdown from '../../common/Dropdown/Dropdown';
import { useState } from 'react';
import wealthImg from '../../assets/img/wealth.png';

const Content = () => {
  const [optionGender, setOptionGender] = useState(['Male', 'Female', 'Other']);
  const [optionLanguage, setOptionLanguage] = useState([
    'Singapore',
    'Vietnames',
    'USA',
    'China',
  ]);

  return (
    <section id="content">
      <div className="content">
        <header id="content__header">
          <div className="header-list content__header-account">
            <img width="26" height="26" src={userIcon} alt="user-icon" />
            <h2>Account Profile</h2>
          </div>
          <div className="header-list content__header-bank">
            <img width="24" height="24" src={bankIcon} alt="user-icon" />
            <h2>Update Bank Detail</h2>
          </div>
          <div className="header-list content__header-inbox">
            <img width="29" height="29" src={emailIcon} alt="user-icon" />
            <h2>Inbox</h2>
          </div>
        </header>
        <div className="main__content">
          <div className="main__content-top">
            <div className="content__top-left">
              <div className="content__howdy">
                <img src={wealthImg} alt="wealthImg" />
                <h1>Howdycandidate</h1>
                <h2>THB 565.000</h2>
              </div>
              <div className="content__communication">
                <div className="content__communication-content">
                  <div className="content-title title__top-left">
                    <h1>Communication Details</h1>
                  </div>
                  <div className="form-group form__group-comunication">
                    <label className="control-label">Mobile Number</label>
                    <Input title="Username" placeholder="howdycandidate" />
                  </div>
                  <div className="form-group form__group-comunication">
                    <label className="control-label">Language</label>
                    <div className="dropdown">
                      <select>
                        {optionLanguage.map((element: any, index: number) => {
                          return (
                            <option key={index} value={element}>
                              {element}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content__top-right">
              <div className="content-title title__top-right">
                <h1>Account Details</h1>
              </div>
              <div className="form-group">
                <Input title="Username" placeholder="howdycandidate" />
              </div>
              <div className="form-group">
                <Input
                  title="First Name"
                  placeholder="howdycandidate"
                  bgColor="transparent"
                />
              </div>
              <div className="form-group">
                <Input title="Date or Birth" placeholder="12/10/1999" />
              </div>
              <div className="form-group">
                <Input
                  title="Password"
                  placeholder="Change Password"
                  bgColor="transparent"
                />
              </div>
              <div className="form-group">
                <Input title="Country" placeholder="Chile" />
              </div>
              <div className="form-group">
                <Input
                  title="Currency"
                  placeholder="THB"
                  bgColor="transparent"
                />
              </div>
              <div className="form-group">
                <Input title="Last Name" placeholder="Pew Pew" />
              </div>
              <div className="form-group">
                <Input
                  title="E-Mail"
                  placeholder="khangndit@gmail.com"
                  bgColor="transparent"
                />
              </div>
              <div className="form-group">
                <Dropdown
                  title="Gender"
                  placeholder="Male"
                  options={optionGender}
                />
              </div>
            </div>
          </div>
          <div className="main__content-body">
            <div className="content__body-padding">
              <div className="content-title title__body">
                <h1>Communication Details</h1>
              </div>
              <div className="content__body-homeaddress">
                <label className="control-label">Address</label>
                <textarea placeholder="Address"></textarea>
              </div>
              <div className="content__body-left">
                <div className="form-group">
                  <label className="control-label">Mobile Number</label>
                  <input type="text" placeholder="Town/City" />
                </div>
                <div className="form-group">
                  <label className="control-label">Postal Code</label>
                  <input type="text" placeholder="700000" />
                </div>
              </div>
            </div>
          </div>
          <div className="main__content-bottom">
            <h1>Would you like to get the latest promos, update, and offer?</h1>
            <div className="content__bottom-checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Yes, Send me the latest promotion, update and offers.
              </label>
            </div>
            <div className="content__bottom-execute">
              <button className="btn btn-change">Save Change</button>
              <button className="btn btn-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
