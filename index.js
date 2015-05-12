$('#btn').click(function(e){
    console.log('sending');
    $.get('https://api.github.com',function(data){
        console.log(data);
    });
});
