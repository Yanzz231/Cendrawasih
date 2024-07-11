import Swal from "sweetalert2";

export const textPopUp = async (title, text, icon) => {
    const result = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
    });

    return result
}