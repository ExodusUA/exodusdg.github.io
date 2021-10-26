$('.portfolio__card').hover(function() {
    $(this).find('.portfolio__card_mask').css('opacity', '1')
}, function() {
    $(this).find('.portfolio__card_mask').css('opacity', '0')
})

/* PORTFOLIO SLIDER */

var containerWidth = $('.portfolio__cards').width();

/* BLOG SLIDER */

var blogWrapper = $('.portfolio__cards');
var blogScrollWidth = Number($('.portfolio__card').width() + Number($('.portfolio__card').css('margin-right').replace('px', '')));
$('.porfolio_button').click(function() {
    var currentBlogButton = $(this).attr('id').replace('button__', '');
    var blogCurrentTranslate = $('.portfolio__cards').attr('style').replace('transform:translateX(', '').replace('px)', '');

    /* MAX SCROLL WIDTH*/
    var blogPostsCount = $('.portfolio__cards > div').length;
    var blogMaxWidth = (blogPostsCount - 5) * blogScrollWidth;
    if (currentBlogButton == 'left') {
        console.log(blogCurrentTranslate)
        if (blogCurrentTranslate == 0) {
            console.log(blogCurrentTranslate)
            return false;
        }
        var blogTranslateWidth = Number(blogCurrentTranslate) + Number(blogScrollWidth);
        console.log(blogTranslateWidth)
        blogWrapper.attr('style', 'transform:translateX(' + blogTranslateWidth + 'px)')

    } else if (currentBlogButton == 'right') {
        var blogPostsCount = $('.portfolio__cards > div').length;
        if ((blogCurrentTranslate * -1) > blogMaxWidth) {
            console.log(blogCurrentTranslate)
            return false;
        }
        var blogTranslateWidth = Number(blogCurrentTranslate) - Number(blogScrollWidth);
        blogWrapper.attr('style', 'transform:translateX(' + blogTranslateWidth + 'px)')
    }
});

/*END*/

var currentSlide = 0;
var isActive = true;

window.addEventListener("mousewheel", function(e) {
    wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    if (isActive == true) {
        if (wDelta == 'down') {
            scrollRight()
        } else {
            scrollLeft()
        }
    } else {
        return false;
    }
}, { passive: false });


var bodyWidth = $('body').width()

if (bodyWidth < 1024) {
    window.addEventListener("scroll", function(e) {
        wDelta = e.wheelDelta < 0 ? 'down' : 'up';
        if (isActive == true) {
            if (wDelta == 'down') {
                scrollRight()
            } else {
                scrollLeft()
            }
        } else {
            return false;
        }
    }, { passive: false });
}

function scrollRight() {
    currentSlide = currentSlide + 1;

    if (currentSlide < 0) {
        currentSlide = 0;
        return false;
    } else if (currentSlide > 3) {
        currentSlide = 3;
        return false;
    } else {
        var currentTranslate = Number($('.main__wrapper').attr('style').replace('transform: translateX(', '').replace('vw);', ''));
        var finalTranslate = currentTranslate - 100;
        $('.main__wrapper').attr('style', 'transform: translateX(' + finalTranslate + 'vw);')
    }

    $('.menu__nav_container').attr('style', 'transform: translateX(100%);');

    console.log(currentSlide)

    if (currentSlide == 1) {
        $('.menu__nav_container').attr('style', 'transform: translateX(100%);');
        $('.menu__nav_container p').text('My Projects')
    } else if (currentSlide == 2) {
        $('.menu__nav_container').attr('style', 'transform: translateX(200%);');
        $('.menu__nav_container p').text('My Skills')
    } else if (currentSlide == 3) {
        $('.menu__nav_container').attr('style', 'transform: translateX(300%);');
        $('.menu__nav_container p').text('My Contacts')
    } else if (currentSlide == 4) {
        $('.menu__nav_container').attr('style', 'transform: translateX(0%);');
        $('.menu__nav_container p').text('Home')
        currentSlide = 0;

    }

    isActive = false;
    setTimeout(() => {
        isActive = true;
    }, 1000);
}

function scrollLeft() {
    currentSlide = currentSlide - 1;

    console.log(currentSlide)

    if (currentSlide < 0) {
        currentSlide = 0;
        return false;
    } else if (currentSlide == 3) {
        currentSlide = 3;
        return false;
    } else {
        var currentTranslate = Number($('.main__wrapper').attr('style').replace('transform: translateX(', '').replace('vw);', ''));
        var finalTranslate = currentTranslate + 100;
        $('.main__wrapper').attr('style', 'transform: translateX(' + finalTranslate + 'vw);')
    }

    if (currentSlide == 0) {
        $('.menu__nav_container').attr('style', 'transform: translateX(0%);');
        $('.menu__nav_container p').text('Home')
        return false;
    } else if (currentSlide == 1) {
        $('.menu__nav_container').attr('style', 'transform: translateX(100%);');
        $('.menu__nav_container p').text('My Projects')
    } else if (currentSlide == 2) {
        $('.menu__nav_container').attr('style', 'transform: translateX(200%);');
        $('.menu__nav_container p').text('My Skills')
    } else if (currentSlide == 3) {
        $('.menu__nav_container').attr('style', 'transform: translateX(300%);');
        $('.menu__nav_container p').text('My Contacts')
    } else if (currentSlide == -1) {
        $('.menu__nav_container').attr('style', 'transform: translateX(300%);');
        $('.menu__nav_container p').text('My Contacts')

        currentSlide = 3;
    }

    isActive = false;
    setTimeout(() => {
        isActive = true;
    }, 1000);
}

/* SKILLS */


$('.menu__skills_button').click(function() {
    var clickedCategory = $(this).attr('id');
    $('.menu__skills_button').removeClass('skills_active')
    $(this).addClass('skills_active')
    var categoryHeight = $('.' + clickedCategory).find('.menu__skils_list').height();
    $('.' + clickedCategory).find('.menu__skills_block').attr('style', 'transform: translateY(' + categoryHeight + 'px); height:' + categoryHeight + 'px')

    $('.menu__skils_list').not($('.' + clickedCategory).find('.menu__skils_list')).find('.menu__skills_block').attr('style', 'transform: translateY(0px)')
})

$('.contact__links_item').hover(function() {
    $(this).find('img').css('display', 'none')
    $(this).find('.contact__item_title').css('display', 'block')
    $(this).find('.contact__items_circle').css('display', 'block')
}, function() {
    $(this).find('img').css('display', 'initial')
    $(this).find('.contact__item_title').css('display', 'none')
    $(this).find('.contact__items_circle').css('display', 'none')
})