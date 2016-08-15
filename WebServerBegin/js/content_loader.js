$(function(){
    
   $(document).on('click','.about-links',function(e){
       var pageLoad = $(this).data('page') + '.htm';
       $.ajax({
            url:pageLoad,
            type:'get',
            dataType:'html',
            complete:function(data){
                $('.about-main-content').html(data.responseText);   
           }
       })
       
   });
    
});