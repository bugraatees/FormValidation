
const form1 = document.getElementById ('form1');

//elemanların doğruluğunu izle
form1.watchValidate()

form1.addEventListener('submit', function(e){
    e.preventDefault();

    //tüm elemanları kontrol et
    this.validate();


    //formu gönder

    this.sendIfIsValid('ajax.php')

       // if (this.isFormValid()){
          //  new FormData(form1)
        //}
    });

    form1.getResult(function(response){
        console.log(response.currentTarget.response);
    });

    const form2 = document.getElementById('form2')
    form2.watchValidate()
    form2.addEventListener('submit', function(e){
        e.preventDefault()
        this.validate()
        this.sendIfIsValid('ajax2.php')
    })
    form2.getResult( function(response){

    })