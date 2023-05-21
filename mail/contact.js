$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

            location.href = "mailto:aubrie@executiveway.com?subject="+ encodeURI(subject) +"&body=" + encodeURI(body);
            var name = $("input#name").val('');
            var email = $("input#email").val('');
            var subject = $("input#subject").val('');
            var message = $("textarea#message").val('');
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
