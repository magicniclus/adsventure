import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const ValideModale = (props) => {
  const message = props.message;
  const dispatch = useDispatch();
  const router = useRouter();
  const handleModal = (value) => {
    if (value === "recommencer") {
      dispatch({
        type: "UPDATE_VALID_MODAL",
        payload: { show: false, message: "" },
      });
    } else {
      dispatch({
        type: "UPDATE_VALID_MODAL",
        payload: { show: false, message: "" },
      });
      router.push("/");
    }
  };
  return (
    <div className="rounded-md bg-green-50 p-4 fixed bottom-5 right-5">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Erreur</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>{message ? message : "Bien reçu !"}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                onClick={() => handleModal("recommencer")}
              >
                Rester sur cette page
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                onClick={() => handleModal("retour")}
              >
                Retour à la page d'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValideModale;
