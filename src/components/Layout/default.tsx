import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
