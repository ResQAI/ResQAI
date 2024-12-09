export default function page() {
  return (
    <div className="flex">
      <div className="sidebar border border-black bg-blue-200 w-[20vw]"></div>
      <div className="main-content border border-black w-full h-[100vh]">
        <div className="header border border-black bg-green-300 h-[8vh]"></div>
        <div className="content border border-black h-[92vh] flex">
          <div className="filter-map-div border bg-red-300 border-black w-[50%]"></div>
          <div className="toggle-area border bg-yellow-200 border-black w-[50%]"></div>
        </div>
      </div>
    </div>
  );
}
