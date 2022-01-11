function formValidation(){
    let formVal = document.getElementById('form');

    formVal.addEventListener('submit', (event) => {
        event.preventDefault();

        let errors = {}; 

        let form = event.target;


        // //Email
        let email = document.getElementById('email').value;

        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

        if(!email.match(pattern)){
            errors.email = 'Please Enter Correct Email'
            document.querySelector('.input-email').style.border = '1px solid #E24429';
        }else{
            document.querySelector('.input-email').style.border = '1px solid #C4C4C4';
            document.querySelector('.email-checker').style.display = 'block';
        }
        //password

        let password = document.getElementById('password').value;
        let confirm_password = document.getElementById('password2').value;

        if(password.length < 8){
            errors.password = 'Please Enter Password'
            document.querySelector('.input-password').style.border = '1px solid #E24429'
        }else{
            document.querySelector('.input-password').style.border = '1px solid #C4C4C4'
            document.querySelector('.password-checker').style.display = 'block';
        }


        if(password != confirm_password){
            errors.password = 'Passwords do not match'
            document.querySelector('.input-second-password').style.border = '1px solid #E24429'
        }
        console.log(errors);

        if(confirm_password.length < 8){
            document.querySelector('.input-second-password').style.border = '1px solid #E24429'
        }else{
            document.querySelector('.input-second-password').style.border = '1px solid #C4C4C4'
            document.querySelector('.password-checker-second').style.display = 'block';
            document.querySelector('.password-checker').style.bottom = '12px';
        }

        //username

        let username = document.getElementById('username').value;

        if(username.length < 6 || username.charAt(0) === username.charAt(0).toLowerCase()){
            errors.username = 'Please Write minimum 6 letter and first with uppercase'
            document.querySelector('.input-username').style.border = '1px solid #E24429'
        }else{
            document.querySelector('.input-username').style.border = '1px solid #C4C4C4'
            document.querySelector('.username-checker').style.display = 'block';
        }


        //checkbox

        let agree = document.getElementById('agree').checked;
        if(agree == false){
            errors.agree = 'You must agree terms and conditions'
        }

        document.querySelectorAll('.error-text').forEach(item => {
            item.textContent = ' ';
        })


        for(let name in errors){
            let errorPlaceholder = document.getElementById('error_' + name);

            if(errorPlaceholder){
                errorPlaceholder.textContent = errors[name];
            }
        }


        if(Object.keys(errors).length === 0){
            form.submit();
        }

    })


} 

formValidation();