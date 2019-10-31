$(function(){
    // Sidebar collapse
    $('.btn-toggle-sidebar').on('click', function(){
        $('.wrapper').toggleClass('sidebar-collapse');
    });
    $('.sb-item').on('click', function(){
        if ($(this).hasClass('btn-toggle-sidebar')) return;
        $(this).siblings().removeClass('active');
        $(this).siblings().find('.sb-item').removeClass('active');
        $(this).addClass('active');
    });

});