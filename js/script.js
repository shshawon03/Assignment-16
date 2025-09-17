/* jQuery Example*/
$(document).ready(function(){
	// example_1
	$('#sa').on('click', function(){
		alert("Hello World!");
	});
	// example_2
	$('#dc').on('dblclick', function(){
		alert("Mouse double click!");
	});
	// example_3
	$('#hov').hover(function(){
		alert("Mouse hover over!");
	});
	// example_4
	$('#md').on('mousedown', function(){
		alert("Mouse down over!");
	});
	// example_5
	$('#me').on('mouseenter', function(){
		alert("Mouse enter over!");
	});
	// example_6
	$('#mle').on('mouseleave', function(){
		alert("Mouse leave over!");
	});
	// example_7
	$('#mm').on('mousemove', function(){
		alert("Mouse move over!");
	});
	// example_8
	$('#mo').on('mouseout', function(){
		alert("Mouse out over!");
	});
	// example_9
	$('#mu').on('mouseup', function(){
		alert("Mouse up over!");
	});
	// example_10
	$('#th').on('click', function(){
		$('#h3_hide').hide('slow');
	});
	// example_11
	$('#ts').on('click', function(){
		$('#h3_show').show('fast');
	});
	// example_12
	$('#tt').on('click', function(){
		$('#h3_tog').toggle(1000);
	});
	// example_13
	$('#fi').on('click', function(){
		$('#h3_fi').fadeIn();
	});
	// example_14
	$('#fo').on('click', function(){
		$('#h3_fo').fadeOut();
	});	
	// example_15
	$('#fto').on('click', function(){
		$('#d_fto').fadeTo("fast", 0.15);
	});
	// example_16
	$('#ft').on('click', function(){
		$('#h3_ft').fadeToggle();
	});
	// example_17
	$('#ani').on('click', function (){
		$('#di_ani').animate({
			width: "70%",
			opacity: 0.4,
			marginLeft: "40px",
			fontSize: "42px",
			borderWidth: "10px"
		}, 1500 );
	});
	// example_18
	$('#an_le').on('click', function (){
		$( "#ani_1" ).animate({ "left": "-=40px" }, "slow" );
	});
	$('#an_ri').on('click', function (){
		$( "#ani_1" ).animate({ "left": "+=40px" }, "slow" );
	});
	// example_19
	$('#an_r').on('click', function(){
		$('#ani_2').animate({ left: "+=400px" }, 2000 );
	});
	$('#an_s').on('click', function(){
		$('#ani_2').stop();
	});
	// example_20
	$('#s_in').on('click', function(){
		$('#d_in').slideUp( "slow" );
	});
	// example_21
	$('#s_do').on('click', function(){
		$('#d_do').slideDown( "slow" );
	});
	// example_22
	$('#s_to').on('click', function(){
		$('#d_to').slideToggle( "slow" );
	});
	// example_23
	$('#ad_c').on('click', function(){
		$('#h3_ad').addClass( "a_class" );
	});
	// example_24
	$('#ad_f').on('click', function(){
		$('#h3_af').after("<h2>Hello!</h2>");
	});
	// example_25
	$('#ad_ap').on('click', function(){
		$('.h3_ap').append("<h2>Hello!</h2>");
	});
	// example_26
	$('#ad_at').on('click', function(){
		$('#h3_at').appendTo(".h2_at");
	});
	// example_27
	$('#ad_be').on('click', function(){
		$('#h3_be').before("<h2>Hello!</h2>");
	});
	// example_28
	$('#ad_cl').on('click', function(){
		$('#h3_cl').clone().appendTo(".ad_p");
	});
	// example_29
	$('#ad_cs').on('click', function(){
		$('#h3_cs').css({
			'color':'white',
			'background-color':'red',
			'font-size': '40px'
		});
	});
	// example_30
	$('#ad_de').on('click', function(){
		$('#h3_de').detach();
	});
	// example_31
	$('#ad_em').on('click', function(){
		$('.h3_em').empty();
	});
	// example_32
	$('#ad_hei').on('click', function(){
		$('.di_hei').height(150);
	});
	// example_33
	$('#ad_ht').on('click', function(){
		$('#h3_ht').html("<h2>New content added!</h2>");
	});
	// example_34
	$('#ad_ih').on('click', function(){
		$('.di_ih').innerHeight(150);
	});
	// example_35
	$("#ad_iw").click(function() {
    let width = $(".di_iw").innerWidth();
    $("#re_1").text("Div innerWidth is: " + width + "px");
  });
  // example_36
	$("#ad_ia").click(function() {
    $( "#h3_ia" ).insertAfter( ".p_ia" );   
  });
  // example_37
	$("#ad_ib").click(function() {
    $( "#h3_ib" ).insertBefore( ".p_ib" );   
  });
	// example_38
	$("#ad_of").click(function() {
	  let pos = $(".di_of").offset();
	  $("#re_2").text("Top: " + pos.top + "px, Left: " + pos.left + "px");
	});
	// example_39
	$("#ad_ot").click(function() {
	  let hei = $(".di_ot").outerHeight();
	  $("#re_3").text("Box outerHeight is: " + hei + "px");
	});
	// example_40
	$("#ad_ow").click(function() {
	  let wid = $(".di_ow").outerWidth();
	  $("#re_4").text("Box outerWidth is: " + wid + "px");
	});
	// example_41
	$("#ad_po").click(function() {
	  let pos = $(".p_po").position();
	  $("#re_5").text("Top: " + pos.top + "px, Left: " + pos.left + "px");
	});
	// example_42
	$("#ad_pr").click(function() {
	  $("#h3_pr").prepend("👉 Start: ");
	});
	// example_43
	$("#ad_pt").click(function() {
	  $("#h3_pt").prependTo("#h3_pt1");
	});
	// example_44
	$("#ad_re").click(function() {
	  $( "#h3_re" ).remove();
	});
	// example_45
	$("#ad_rc").click(function() {
	  $( "p" ).even().removeClass( "p_rec" );
	});
	// example_46
	$("#ad_ra").click(function() {
	  $("<h3>Replaced!</h3>").replaceAll(".p_rea");
	});
	// example_47
	$("#ad_rw").click(function() {
	  $(".p_rw").replaceWith("<h3>Hello, Guest!</h3>");
	});
	// example_48
	$("#ad_te").click(function() {
	  $(".p_te").text("Hello, Guest!");
	});
	// example_49
	$("#ad_tc").click(function() {
    $(".p_tc").toggleClass("p_togc");
	});
	// example_50
	$("#ad_wid").click(function() {
    $("#di_wid").animate({ width: "250px" }, 1500);
	});
});





















