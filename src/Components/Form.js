import { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    Manufacturer: '',
    Model: '',
    Year: '',
    Milleage: 0,
    Condition: '',
    Features: [],
    Transmission: '',
    Price: 0,
    Contacts: ''
  });

  const [err, setErr] = useState('');

  const onChangeHandler = (event) => {
    if (event.target.name === 'Features') {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.Features.push(event.target.value);
      } else {
        copy.Features = copy.Features.filter((el) => el !== event.target.value);
      }

      setFormData(copy);
      setErr('');
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Object.values(formData).some((value) => value === '')) {
      setErr('All fields are required');
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <h4>Sell Now</h4>

        <div className="form-group">
          <label htmlFor="maker" className="form-label">
            Car Manufacturer:
          </label>
          <input type="text" id="maker" className="form-control" name="Manufacturer" onChange={onChangeHandler} value={formData.Manufacturer} />
        </div>

        <div className="form-group">
          <label htmlFor="model" className="form-label">
            Car Model:
          </label>
          <input type="text" id="model" className="form-control" name="Model" onChange={onChangeHandler} value={formData.Model} />
        </div>

        <div className="form-group">
          <label htmlFor="year" className="form-label">
            Year:
          </label>
          <input type="date" id="year" className="form-control" name="Year" onChange={onChangeHandler} value={formData.Year} />
        </div>

        <div className="form-group">
          <label htmlFor="mileage" className="form-label">
            Mileage:
          </label>
          <input type="number" id="mileage" className="form-control" name="Milleage" onChange={onChangeHandler} value={formData.Milleage} />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input type="range" id="price" className="form-control" name="Price" onChange={onChangeHandler} value={formData.Price} />
        </div>

        <div className="form-group">
          <label htmlFor="contacts" className="form-label">
            Contacts:
          </label>
          <input type="number" id="contacts" className="form-control" name="Contacts" onChange={onChangeHandler} value={formData.Contacts} />
        </div>

        <div className="form-group">
          <label htmlFor="transmission" className="form-label">
            Transmission:
          </label>
          <select id="transmission" className="form-select" name="Transmission" onChange={onChangeHandler} value={formData.Transmission}>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Condition:</label>
          <div>
            <input type="radio" className="radios" name="Condition" value="Excellent" onChange={onChangeHandler} checked={formData.Condition === 'Excellent'} />
            <label htmlFor="excellent">Excellent</label>

            <input type="radio" className="radios" name="Condition" value="Good" onChange={onChangeHandler} checked={formData.Condition === 'Good'} />
            <label htmlFor="good">Good</label>

            <input type="radio" className="radios" name="Condition" value="Fair" onChange={onChangeHandler} checked={formData.Condition === 'Fair'} />
            <label htmlFor="fair">Fair</label>

            <input type="radio" className="radios" name="Condition" value="Poor" onChange={onChangeHandler} checked={formData.Condition === 'Poor'} />
            <label htmlFor="poor">Poor</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="features" className="form-label">
            Features:
          </label>
          <div>
            <div>
              <input type="checkbox" className="checks" name="Features" value="Air Conditioning" onChange={onChangeHandler} checked={formData.Features.includes('Air Conditioning')} />
              <label htmlFor="air-conditioning">Air Conditioning</label>
            </div>
            <div>
              <input type="checkbox" className="checks" name="Features" value="Power Steering" onChange={onChangeHandler} checked={formData.Features.includes('Power Steering')} />
              <label htmlFor="power-steering">Power Steering</label>
            </div>
            <div>
              <input type="checkbox" className="checks" name="Features" value="Power Windows" onChange={onChangeHandler} checked={formData.Features.includes('Power Windows')} />
              <label htmlFor="power-windows">Power Windows</label>
            </div>
            <div>
              <input type="checkbox" className="checks" name="Features" value="ABS" onChange={onChangeHandler} checked={formData.Features.includes('ABS')} />
              <label htmlFor="abs">ABS</label>
            </div>
            <div>
              <input type="checkbox" className="checks" name="Features" value="Navigation System" onChange={onChangeHandler} checked={formData.Features.includes('Navigation System')} />
              <label htmlFor="navigation-system">Navigation System</label>
            </div>
          </div>
        </div>

        <span className="error">{err}</span>

        <div className="form-group">
          <button className="btn" type="submit">
            Buy
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
