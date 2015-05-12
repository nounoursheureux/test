$('#btn').click(function(e){
    console.log('sending');
    $.get('https://github.com',function(data){
        console.log(data);
    });
});
