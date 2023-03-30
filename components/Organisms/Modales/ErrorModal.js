import React, { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";

const ErrorModal = (props) => {
  const message = props.message;
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "UPDATE_ERROR_MODAL",
        payload: { show: false, message: "" },
      });
    }, 5000);
  }, []);
  return (
    <div className="rounded-md bg-red-50 p-4 fixed bottom-5 right-5">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Une erreur est survenue
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              <li>{message ? message : "Une erreur est survenue."}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
