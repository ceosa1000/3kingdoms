
$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val();
        $("#user-table > tbody > tr").hide();
        var temp = $("#user-table > tbody > tr > th:nth-child(n):contains('" + k + "')");

        $(temp).parent().show();
    })
})
