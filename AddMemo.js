(function(){

  var dbid = "bpc9nnmer";
  var dbidSupplierInPriceRequest = "bpharuz65";
  var apptoken = "fdy5wtcct2kebd422weibre2egp";
  $.ajaxSetup({data: {apptoken: apptoken}});

//var memo = "";


var markup = "<h2>Please enter your memo:</h2>";
    //markup += "<textarea id= 'memo_content' rows='4' cols='40'/>";
      markup += "<input id= 'memo_content' type='text'/>";
    var $mydialog = $("<div>").html(markup).dialog({
      title: "Memo",
      modal: true,
      autoOpen: false,
      width: 310,
      resizable: false,
      buttons: {
        OK: function() {
      //    var note = $("#QBU_Ready").datepicker("getDate");
          $.post(dbidSupplierInPriceRequest, {
            act: "API_EditRecord",
	     rid: QBU_rid,
            _fid_29: $("#memo_content").val(),
          }).then(function(xml) {
            document.location.reload(true);
          });          
        },
        CANCEL: function() {
          $(this).dialog("close");
        }
      },
      open: function(event, ui) {
        $mydialog.html(markup);
        $("#QBU_Ready").datepicker();
        $("#QBU_Ready").datepicker("option", "dateFormat", "mm-dd-yy");
        $("#QBU_Ready").datepicker("setDate", ready);
      },
      close: function(event, ui) {
        //do something
      }
    });
    $mydialog.dialog("open");

//  });

})();
