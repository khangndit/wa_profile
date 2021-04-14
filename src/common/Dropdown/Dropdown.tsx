import './Dropdown.css';

const Dropdown = (props: any) => {
  return (
    <div
      className="dropdown"
      style={{ background: props.bgColor || 'rgba(159, 216, 255, 0.24)' }}
    >
      <div className="dropdown__title">
        <label htmlFor="">{props.title}</label>
        <label htmlFor="">:</label>
      </div>
      <div className="dropdown__body">
        <select name="cars" id="cars">
          {props.options.map((element: any, index: number) => {
            return (
              <option key={index} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
