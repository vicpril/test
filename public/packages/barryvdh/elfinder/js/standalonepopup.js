$(document).on("click", ".popup_selector", function(event) {
   event.preventDefault();
   var updateID = $(this).attr("data-inputid"); // Btn id clicked
   var mime = $(this).attr("data-mime");

   var elfinderUrl = "/elfinder/popup/";

   // if isset value will open current directory
   var target = $("#" + updateID).val();
   if (target !== "") {
      // for Windows
      target = target.replace(/\\/gi, "/");
      //   console.log(target);
      target = target.substring(
         target.indexOf("/") + 1,
         target.lastIndexOf("/")
      );
      target =
         "&target=l1_" +
         btoa(unescape(encodeURIComponent(target)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, ".")
            .replace(/\.+$/, "");
   }
   if (mime !== "") {
      mime = "&mime=" + mime;
   }
   // trigger the reveal modal with elfinder inside
   var triggerUrl = elfinderUrl + updateID + "?" + target + mime;
   $.colorbox({
      href: triggerUrl,
      fastIframe: true,
      iframe: true,
      width: "70%",
      height: "60%"
   });
   //     var elfinder = $('#elfinder').elfinder(options).elfinder('instance');

   //     elfinder.bind('upload', function(event) { alert('upload') });
});
// function to update the file selected by elfinder
function processSelectedFile(filePath, requestingField) {
   // for Windows
   filePath = filePath.replace(/\\/gi, "/");
   $("#" + requestingField)
      .val(filePath)
      .trigger("change");
   $("#" + requestingField)[0].dispatchEvent(
      new Event("input", { bubbles: true })
   );
}
