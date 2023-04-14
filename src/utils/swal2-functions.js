import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const alertSwal = (title, text, icon) => {
    withReactContent(Swal).fire({
        title: title,
        text: text,
        icon: icon,
        timer: icon === "success" && 3000,
        color: "#050816",
        confirmButtonColor: '#050816',
        confirmButtonText: "I understand...",
        showConfirmButton: icon === "error",
        backdrop: true,
    })
};