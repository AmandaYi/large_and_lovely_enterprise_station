!function(e,t,o,i){e.setMenuCursor=function(){if(e("#topMenuBar").length>0){var t=location.href,o="",i=t.lastIndexOf("/");if(i>-1){var s=t.substr(i);("/"==s||s.indexOf("../index.jsp.htm")>-1||s.indexOf("../index.html")>-1)&&(o="/")}(t.indexOf("/courseinfo/")>-1||t.indexOf("http://www.spiiker.com/js/course.jsp")>-1||t.indexOf("http://www.spiiker.com/js/course.html")>-1||t.indexOf("/course/")>-1)&&(o="../course.html"),(t.indexOf("../method.jsp.htm")>-1||t.indexOf("../method.html")>-1)&&(o="../method.html"),(t.indexOf("../customize.jsp.htm")>-1||t.indexOf("../customize.html")>-1)&&(o="../customize.html"),(t.indexOf("../flow.jsp.htm")>-1||t.indexOf("../flow.html")>-1)&&(o="../flow.html"),(t.indexOf("../teachers.jsp.htm")>-1||t.indexOf("../teachers.html")>-1||t.indexOf("../teachers_list.jsp.htm")>-1||t.indexOf("/teachers_list/")>-1||t.indexOf("../teachers_details.jsp.htm")>-1||t.indexOf("/teachers_details/")>-1||t.indexOf("../sm_list.jsp.htm")>-1||t.indexOf("../sm_list.html")>-1||t.indexOf("../sm_details.jsp.htm")>-1||t.indexOf("/sm_details/")>-1)&&(o="../teachers.html"),(t.indexOf("../students.jsp.htm")>-1||t.indexOf("../students.html")>-1||t.indexOf("../students_details.jsp.htm")>-1||t.indexOf("/students_details/")>-1||t.indexOf("../students_share.jsp.htm")>-1||t.indexOf("../students_share.html")>-1||t.indexOf("../students_share2.html")>-1)&&(o="../students.html");var n=e("#topMenuBar a[href='"+o+"']");n.length,n.length>0&&n.parent().addClass("cursor")}};var s=!1;e(o).ready(function(){e(".sider li").each(function(t){var o=e(this);o.find(".child_sider").length>0&&o.hover(function(){o.addClass("active")},function(){o.removeClass("active")})}),e(".go_top").click(function(){e("html,body").animate({scrollTop:"0px"},300)});var o=!0;checkLogin(function(t,i){if(t){var s=i.length>0?i:"";e("#login-info").html('<a href="../login.html-refer=-myroom-personal_data.jsp.htm"/*tpa=http://www.spiiker.com/myroom/personal_data.jsp*/ class="name">'+s+'同学，欢迎回来</a> <a rel="nofollow" href="../login.jsp-refer=-myroom-index.jsp.htm"/*tpa=http://www.spiiker.com/myroom/*/>我的课室</a><a rel="nofollow" href="plugin.js"/*tpa=http://www.spiiker.com/logout.jsp*/>退出</a>'),e(".footFormWrap").remove();var n=e("#flowContainer");n.length>0&&n.remove();var r=e("#youth_login");r.length>0&&r.html('<a class="btn_white" href="../login.jsp-refer=-myroom-index.jsp.htm"/*tpa=http://www.spiiker.com/myroom/*/>进入我的课室</a>')}else{e(".regbtn").css({display:"inline-block"}),e(".regbtn").click(function(){return winReg(),!1}),e("#login-info").html('<a href="../login.html"/*tpa=http://www.spiiker.com/login.html*/  rel="nofollow">登录/注册</a>');var l=e(1==e("#foot_links_bg").length?"#foot_links_bg":"#foot_bg");l.length>0&&l.before('<div id="footFormWrap" class="footFormWrap"/>')}var a=e("#indexForm");(a.length>0||!t)&&e.get("/include/form.jsp?seq="+e.getSeq(),function(i){var s=e.trim(i);if(a.length>0&&a.html(s),!t){e("BODY").append('<div id="scrollForm" class="scrollForm"/>');var n=e("#scrollForm");if(1==n.length){n.find("#reg_close").click(function(){n.removeClass("active"),o=!1}),n.find("#form_head,#loginForm").remove(),n.find("#regForm").css({display:"block"});var r=e("#footFormWrap");1==r.length&&r.append(n)}}})}),e.isIE6()||e(t).scroll(function(){var i=e(t).scrollTop(),n=e(t).height(),r=e(".go_top"),l=r.attr("class");i>n?s||-1!=l.indexOf("active")||(s=!0,r.fadeIn(300,function(){r.addClass("active"),s=!1})):!s&&l.indexOf("active")>-1&&(s=!0,e(".go_top").fadeOut(300,function(){r.removeClass("active"),s=!1}));var a=e("#scrollForm"),m=e("#footFormWrap");if(a.length>0&&m.length>0&&o){var h=m.offset().top||0,f=a.outerHeight(!0);i>n&&i<h-n+f?a.addClass("active"):a.removeClass("active")}}),e.setMenuCursor()})}(jQuery,window,document);