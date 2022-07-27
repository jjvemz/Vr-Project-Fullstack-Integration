import './LayoutAdmin.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';

function LayoutAdmin() {
  return (
    <div className="LayoutAdmin">
      <div className="LayoutAdminGlass">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
  );
}

export default LayoutAdmin;