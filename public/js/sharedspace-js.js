jQuery(function($){

	//ADD LOCATION
	function addLocation(formData){
        //$('.add-location-form .sending').fadeIn(500);
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: '/add-location',
            data: formData,
            success: function(data) {
                console.log(data);
                if(data === false){
                	console.log("no")
                    $('.sending').hide();
                    $('.register-form .error').show();
                    setTimeout(function(){
                        $('.register-form .error').fadeOut(500);
                    }, 1500)
                }
                else{
                	console.log("yes")
                    // $('.sending .title h3').text('Congratulations, Your Account Has Been Created. You Will Now Be Redirected To Login.');
                    //$('.register-form .error').show();
                    setTimeout(function(){
                        //$('.register-form .error').fadeOut(500);
                        location.href = "/"
                    }, 1500)
                }
            }
        });
    }

    $('#add-location-form').on('submit', function(e){
    	e.preventDefault();
        var data = $(this).serialize();
        addLocation(data);        
    });

    //ADD LOCATION



    //CREATE USER
    function insertUser(formData){
        //$('.add-location-form .sending').fadeIn(500);
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: '/register',
            data: formData,
            success: function(data) {
                console.log(data);
                if(data === false){
                    console.log("no")
                    $('.sending').hide();
                    $('.register-form .error').show();
                    setTimeout(function(){
                        $('.register-form .error').fadeOut(500);
                    }, 1500)
                }
                else{
                    console.log("yes")
                    // $('.sending .title h3').text('Congratulations, Your Account Has Been Created. You Will Now Be Redirected To Login.');
                    //$('.register-form .error').show();
                    setTimeout(function(){
                        //$('.register-form .error').fadeOut(500);
                        location.href = "/"
                    }, 1500)
                }
            }
        });
    }

    $('#register-form').on('submit', function(e){
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data)
        insertUser(data);        
    });

    //CREATE USER


    //USER LOGIN
    function userLogin(formData){
        //$('.add-location-form .sending').fadeIn(500);
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: '/login',
            data: formData,
            success: function(data) {
                console.log(data);
                // if(data === false){
                //     console.log("no")
                //     $('.sending').hide();
                //     $('.register-form .error').show();
                //     setTimeout(function(){
                //         $('.register-form .error').fadeOut(500);
                //     }, 1500)
                // }
                // else{
                //     console.log("yes")
                //     // $('.sending .title h3').text('Congratulations, Your Account Has Been Created. You Will Now Be Redirected To Login.');
                //     //$('.register-form .error').show();
                //     setTimeout(function(){
                //         //$('.register-form .error').fadeOut(500);
                //         location.href = "/"
                //     }, 1500)
                // }
            }
        });
    }

    $('#login-form').on('submit', function(e){
        e.preventDefault();
        var data = $(this).serialize();
        userLogin(data);        
    });

    //USER LOGIN


})