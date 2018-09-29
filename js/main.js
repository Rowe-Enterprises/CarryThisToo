document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    autosize(document.querySelectorAll('textarea'));

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

    var elems = document.querySelectorAll('.scrollspy');
    var options = {
        scrollOffset: 100
    };
    var instances = M.ScrollSpy.init(elems, options);

    var mobile_form = document.getElementById('phone-form')
    var mobile_no = document.getElementById('mobile_no')
    var verify_btn = document.getElementById('verify') 
    var password_form = document.getElementById('password-form')
    var password = document.getElementById('password')
    var login_btn = document.getElementById('login')
    var contact_form = document.getElementById('contact-form')
    var subject = document.getElementById('subject')
    var reason = document.getElementById('reason')
    var cancellation_box = document.querySelector('#cancellation_box')
    var reason_box = document.querySelector('#reason_box')
    var send_btn = document.getElementById('send')

    mobile_form.addEventListener('submit', function(e){
        e.preventDefault()
    })

    password_form.addEventListener('submit', function(e){
        e.preventDefault()
    })

    contact_form.addEventListener('submit', function(e){
        e.preventDefault()
    })

    password_form.style.display = 'none';
    contact_form.style.display = 'none';

    verify_btn.addEventListener('click', function(){
        if(mobile_no.value == '1234567890'){
            password_form.style.display = 'block';
            mobile_form.style.display = 'none';
            contact_form.style.display = 'none';
        }
    })

    password_form.addEventListener('click', function(){
        if(password.value == '12345'){
            contact_form.style.display = 'block';
            mobile_form.style.display = 'none';
            password_form.style.display = 'none';
        }
    })

    var len_text = document.getElementById("len_text");

    function maxLength(el) {
        if (!('maxLength' in el)) {
            var max = el.attributes.maxLength.value;

        }
    }

    document.getElementById('message').onkeyup = function () {
        var max = 1000;
        if (this.value.length >= max) return false;
        console.log((max - this.value.length));
        len_text.innerHTML = (max - this.value.length) + "/" + max;
    };

    subject.addEventListener('change', function(){
        if (subject.value == 'cancellation'){
            cancellation_box.style.display = "block"
        }else{
            cancellation_box.style.display = "none"
        }
    })

    reason.addEventListener('change', function(){
        if (reason.value == 'resource'){
            reason_box.style.display = "block"
        }else{
            reason_box.style.display = "none"
        }
    })

});