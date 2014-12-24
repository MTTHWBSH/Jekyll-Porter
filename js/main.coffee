---
# Front Matter comment for Jekyll
---

$(document).ready ->
  heroSize()
  return
$(window).load ->
  showContent()
  return

$(window).scroll (e) ->
  parallax()
  return

parallax = ->
  scrolled = $(window).scrollTop()
  $(".hero").css "top", -(scrolled * 0.0315) + "rem"
  $(".hero .content").css "top", -(scrolled * -0.005) + "rem"
  $(".hero .content").css "opacity", 1 - (scrolled * .00175)
  $(".hero .bounce").css "opacity", 1 - (scrolled * .00175)
  return

heroSize = ->
	$(".hero").css height: ($(window).height()) + "px"
	$(window).resize ->
	$(".hero").css height: ($(window).height()) + "px"
	return

showContent = ->
	$(".page-content").addClass "load"
	return

