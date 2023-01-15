import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function SweetAlertValidation(statut, message) {

    const MySwal = withReactContent(Swal)
    if(statut === true)
    {
        MySwal.fire({
            title: message,
            icon: 'success',
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true
        })
    }
    else {
        MySwal.fire({
            title: message,
            icon: 'error',
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true
        })
    }
        
    return (
        null
    );
}

export default SweetAlertValidation;