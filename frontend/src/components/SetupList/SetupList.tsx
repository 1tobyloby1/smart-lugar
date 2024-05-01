import "./SetupList.css";
import Cabin from "shared/Models/Cabin";
import { useEffect, useState } from "react";
import api from "../../functions/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SetupList() {
  const [cabins, setcabins] = useState<Cabin[] | null>(null);
  const navigate = useNavigate();

  const fetchAllCabins = async () => {
    const response = await api({
      method: "GET",
      url: "/cabin/all",
    });

    if (response.successful) {
      setcabins(response.data as Cabin[]);
    } else {
      toast.error(response.data);
    }
  };

  useEffect(() => {
    fetchAllCabins();
  }, []);

  const assignCabin = async (nodeId: string) => {
    try {
      const response = await api({
        method: "POST",
        url: "/cabin/assign",
        params: {
          nodeId: nodeId,
        }
      });

      if (response.successful) {
        navigate("/");
      }
    }
    catch (error) {
      console.error("Error assigning cabin:", error);
    }
  };

  return <div>
    {cabins?.map((cabin) => {
      return <div key={cabin.nodeId} className="list-item" onClick={() => assignCabin(cabin.nodeId)}>
        <span>{cabin.displayName}</span>
        <img src="/assets/icons/right-arrow.png" alt="right-arrow" />
      </div>
    })}
  </div>;
}

export default SetupList;