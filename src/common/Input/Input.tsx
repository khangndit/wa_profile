import './Input.css';
import keysIcon from '../../assets/img/keys.png';

const Input = (props: any) => {
  return (
    <div
      className="input"
      style={{ background: props.bgColor || 'rgba(159, 216, 255, 0.24)' }}
    >
      <div className="input__title">
        <label htmlFor="">{props.title}</label>
        <label htmlFor="">:</label>
      </div>
      <div className="input__body">
        <input type="text" placeholder={props.placeholder} />
        <img width="25" height="25" src={keysIcon} alt="keys-icon" />
      </div>
    </div>
  );
};

export default Input;
