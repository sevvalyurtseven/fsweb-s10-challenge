import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSilAPI } from "../actions";
import Swal from "sweetalert2";

export default function Post({ item }) {
  const dispatch = useDispatch();

  function handleSil() {
    Swal.fire({
      title: "Bu notu silmek istediğinize emin misiniz?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      denyButtonColor: "#d33",
      confirmButtonText: "Evet, Sil!",
      denyButtonText: `Hayır, Silme`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Notunuz silindi.", "", "success");
        dispatch(notSilAPI(item.id));
      } else if (result.isDenied) {
        Swal.fire("Notunuz silinmedi.", "", "info");
      }
    });

    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="text-xs text-amber-600 mt-4 underline"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  );
}
