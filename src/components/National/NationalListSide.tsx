"use client";
import React, { useEffect, useState } from "react";
import DisasterList from "../DisasterList";

const NationalListSide: React.FC = ({ setDisaster }: { setDisaster: any }) => {
  const [disasterData, setDisasterData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "/api/nationalDisasterCommittee/declaredDisasters"
      );
      const data = await res.json();
      // console.log(data.declaredDisasters);
      setDisasterData(data.declaredDisasters);
    }

    fetchData();
  }, []);

  const handleOpenModal = () => {
    alert("Modal would open here");
  };

  return (
    <div>
      <DisasterList
        title="Countrywide Disasters"
        disasters={disasterData}
        onOpenModal={handleOpenModal}
        // onClick={() =>
        //   setMapView({ lat: 20.5937, lng: 78.9629, zoom: 5 }) // India
        // }
        lat={39}
        lng={260.5348}
        zoom={4}
        setDisaster={setDisaster}
      />
    </div>
  );
};

export default NationalListSide;
