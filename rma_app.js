$(document).ready(function(){

    // Add new element
    $(".add").click(function(){

        // Finding total number of elements added
        var total_element = $(".element").length;

        // last <div> with element class id
        var lastid = $(".element:last").attr("id");
        var split_id = lastid.split("_");
        var nextindex = Number(split_id[1]) + 1;
        var max = 12;
        // Check total number elements
        if(total_element < max ){
            // Adding new div container after last occurance of element class
            $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");

            var newDiv = $('<div id="txt_' + nextindex + '" class="row-fluid rmanoborder">\n' +
                '                     <div class="span12">\n' +
                '                        <input id="rma_Product_0_Qty" name="Product_Quantity_'+ nextindex +'" placeholder="Quantity" type="number" />\n' +
                '                        <input id="rma_Product_0_number" name="Product_Number_'+ nextindex +'" placeholder="Product #" type="text" />\n' +
                '                        <textarea class="prodDescription" id="rma_Product_0_description" name="Product_Description_'+ nextindex +'" placeholder="Product description"></textarea>\n' +
                '                        <input id="rma_Product_0_Serial" name="Product_Serial_'+ nextindex +'" placeholder="Serial #" type="text" />\n' +
                '                        <input id="rma_Product_0_invoiceNumber" name="Invoice_Number_'+ nextindex +'" placeholder="Invoice #" type="text" />\n' +
                '                        <select id="rma_Product_0_returnCode" name="Product_problem_'+ nextindex +'">\n' +
                '                           <option selected="selected" value="">* Select problem</option>\n' +
                '                           <option value="Broken">Broken</option>\n' +
                '                           <option value="Defective">Defective</option>\n' +
                '                           <option value="Requires Repair">Requires Repair</option>\n' +
                '                           <option value="Return for Restocking">Return for Restocking</option>\n' +
                '                           <option value="Customer Cancelled">Customer Cancelled</option>\n' +
                '                        </select>\n' +
                '                     </div>\n' +
                '                     * Product photo: <input type="file" name="file">\n' +
                '                     <div class="clearfix"></div>\n' +
                '                     <div class="row-fluid" style="border:0;">\n' +
                '                        <div class="span8"><textarea id="rma_Product_0_problem" name="Problem_Description_'+ nextindex +'" placeholder="Problem description"></textarea></div>\n' +
                '                        <div class="span4"><span class="rmaAddBtn"><a id="remove_' + nextindex + '" class="rm_button btn remove" href="javascript:void(0);" title="Add an other product"><em aria-hidden="true" class="fa fa-plus-square"></em>Remove</a></span>\n' +
                '                        </div>\n' +
                '                     </div>\n' +
                '                  </div>');

            // Adding element to <div>
            $("#div_" + nextindex).append(newDiv);
        }
    });

    // Remove element
    $('.container').on('click','.remove',function(){

        var id = this.id;
        var split_id = id.split("_");
        var deleteindex = split_id[1];

        // Remove <div> with id
        $("#div_" + deleteindex).remove();
    });
});

// Set RMA to Today's Date

GetTodayDate();

function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate= dd + " / " +( MM+1) + " / " + yyyy;
    $("#RMA_date").val("Date: " + currentDate);
}

// Generate RMA Number

setRmaNumber();

function setRmaNumber() {
    var rmaNumber = Math.random().toString(36).substr(2, 10).toUpperCase();
    $("#RMA_number").val("RMA: " + rmaNumber);
}

// Send Form

function send_form() {

    if (document.getElementById("read_RMA_Terms_Conditions0").checked && $('#Store_contact_first_name').val() && $('#Store_contact_last_name').val() && $('#Store_name').val() && $('#Store_Phone').val() && $('#_replyto').val())
    {
        $("#rma_form_en").submit();
    }
    else
    {
        var isValid = true;

        $('.req').each(function () {
            if ($.trim($(this).val()) === '') {
                isValid = false;
                $(this).addClass('empty');
            } else {
                $(this).removeClass('empty');
            }
        });
    }
}