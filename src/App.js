import './App.css';
import TodayCard from './components/TodayCard';
import OtherDays from './components/OtherDays';

export default function App() {

  return (
    <div className="App">
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row justify-content-center">
          <div className="col-lg-12 stretch-card">

            <div className="card card-weather">

              <TodayCard />
              <OtherDays />
              
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
}