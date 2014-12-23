---
# Front Matter comment for Jekyll
---

$(document).ready ->
  $(".hero").css height: ($(window).height()) + "px"
  $(window).resize ->
    $(".hero").css height: ($(window).height()) + "px"
    return
  return
$(window).load ->
  $(".page-content").addClass "load"
  return
