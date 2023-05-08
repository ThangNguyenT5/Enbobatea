export default function Select2Module(){
    console.log("object");
    $(document).ready(function() {
        $('.select-custom-main').select2();
    });
    $(document).ready(function() {
    });
    $('.contact-select2-js').select2({
      selectOnClose: true
    });
}