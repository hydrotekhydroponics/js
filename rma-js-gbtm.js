function showInput() {
    for (var e, t = "", r = document.getElementById("rma_hydrotek"), a = (document.getElementById("display"), r.querySelectorAll("input:not([type=submit]), select, textarea")), i = document.getElementById("smallTxt").innerHTML, o = document.getElementById("smallTxtA").innerHTML, n = document.getElementsByName("read_RMA_Terms_Conditions"), d = document.getElementById("printArea"), s = 0, l = n.length; s < l; s++)
        if (n[s].checked) {
            e = n[s].value;
            break
        } for (s = 0; s < a.length; s++) "RMA_number" == a[s].name && (t += '<tr><th style="padding: 10px; width: 50%">Hydrotek\'s ' + a[s].value + "</th>"), "RMA_date" == a[s].name ? t += '<th style="padding: 10px">' + a[s].value + "</th></tr>" : "" == a[s].name || (0 <= a[s].name.indexOf("rma_Product_Qty") ? t += '<tr><td colspan="2" style="border: 1px solid silver; background: #cdcdcd; padding: 5px 10px;">&nbsp;</td></tr><tr><td style="border: 1px solid silver; padding: 5px 10px;">' + a[s].placeholder.replace("* ", "") + '&nbsp;:&nbsp;</td><td style="border: 1px solid silver; padding: 5px 10px;">' + a[s].value + "</td></tr>" : a[s].placeholder && a[s].name.indexOf("rma_Product_returnCode") < 0 ? t += '<tr><td style="border: 1px solid silver; padding: 5px 10px;">' + a[s].placeholder.replace("* ", "").replace(" (123-123-1234)", "") + '&nbsp;:&nbsp;</td><td style="border: 1px solid silver; padding: 5px 10px;">' + a[s].value + "</td></tr>" : 0 <= a[s].name.indexOf("rma_Product_returnCode") && (t += '<tr><td style="border: 1px solid silver; padding: 5px 10px;">Problem&nbsp;:&nbsp;</td><td style="border: 1px solid silver; padding: 5px 10px;">' + a[s].value + "</td></tr>"));
    document.body.style.cssText = "visibility: hidden", d.innerHTML = '<table style="border: 0; text-align: left; border-collapse: collapse; background: #ffffff; width: 90%; height: auto; margin: 2rem auto;">' + t + '<tr><td colspan="2" style="border: 1px solid silver; padding: 5px;">I have read and understood all RMA Terms & Conditions: <strong>' + e + '</strong></td></tr><tr><td colspan="2" style="border: 0; padding: 2rem;">' + o + "<div>" + i + "</div></td></tr></table>", d.style.cssText = "visibility: visible; width: 100vw; min-height: 100vh; text-align: center; position: absolute; top: 0; left: 0; background: rgba(0,0,0,1)", window.scrollTo(0, 0), window.document.close(), window.focus(), window.print(d), d.style.cssText = "visibility: hidden; position: absolute; top: 0; left: 0;", document.body.style.cssText = "visibility: visible"
}
$(document).ready(function() {
    (new Date).toISOString().substring(0, 10);
    var e = new Date,
        t = e.getDate(),
        r = e.getMonth() + 1,
        a = e.getFullYear(),
        i = e.getHours(),
        o = e.getMinutes(),
        n = e.getMilliseconds();
    rmaNumber = Math.floor(Math.abs(16777215 * Math.sin(e)) % 16777215).toString(16) + (t + r + a + i + o + n).toString(8), $("input#RMA_date").val("Date: " + t + " / " + r + " / " + a), $("input#RMA_number").val("RMA # " + rmaNumber.toUpperCase());
    var d = 1,
        s = 1,
        l = ($(".add_button"), $("#RMAproductList")),
        u = $("#leftToAdd");
    $(l).on("click", ".add_button", function(e) {
        if ($(u).html("(" + (12 - d) + " row left)"), d < 12) {
            var t = "",
                r = "";
            d + 1 == 12 && (t = "fr" === rma_lang ? '<span id="maxedOut" style="margin-right: 10px; color: #c00;"><small>(Nombre maximum de produits atteint!)</small></span>' : '<span id="maxedOut" style="margin-right: 10px; color: #c00;"><small>(Maximum number of products reached!)</small></span>'), r = "fr" === rma_lang ? '<div class="row-fluid rmanoborder"><div class="span12"><input type="number" id="rma_Product_' + s + '_Qty" name="rma_Product_Qty_' + s + '" placeholder="* Quantité"> <input type="text" id="rma_Product_' + s + '_number" name="rma_Product_number_' + s + '" placeholder="* Product #"> <textarea id="rma_Product_' + s + '_description" name="rma_Product_description_' + s + '" placeholder="* Description du produit" class="prodDescription"></textarea> <input type="text" id="rma_Product_' + s + '_Serial" name="rma_Product_Serial_' + s + '" placeholder="# de série"> <input type="text" id="rma_Product_' + s + '_invoiceNumber" name="rma_Product_invoiceNumber_' + s + '" placeholder="# de facture"> <select id="rma_Product_' + s + '_returnCode" name="rma_Product_returnCode_' + s + '"><option value="" selected="selected">* Sélectionner un problème</option><option value="Cassé">Cassé</option><option value="Défectueux">Défectueux</option><option value="Nécessite une réparation">Nécessite une réparation</option><option value="Retour pour réapprovisionnement">Retour pour réapprovisionnement</option><option value="Client a annulé">Client a annulé</option></select> </div><div class="clearfix"></div><div class="row-fluid" style="border:0"><div class="span8"><textarea id="rma_Product_' + s + '_problem" name="rma_Product_problem_' + s + '" placeholder="* Description du problème"></textarea></div><div class="span4"><span class="rmaAddBtn">' + t + '<a href="javascript:void(0);" class="remove_button btn" title="Supprimer ce produit"><i class="fa fa-minus-square" aria-hidden="true"></i> Produit</a> <a href="javascript:void(0);" class="add_button btn" title="Ajouter un autre produit"><i class="fa fa-plus-square" aria-hidden="true"></i> Produit</a></span> </div> </div></div>' : '<div class="row-fluid rmanoborder"><div class="span12"><input type="number" id="rma_Product_' + s + '_Qty" name="rma_Product_Qty_' + s + '" placeholder="* Quantity"> <input type="text" id="rma_Product_' + s + '_number" name="rma_Product_number_' + s + '" placeholder="* Product #"> <textarea id="rma_Product_' + s + '_description" name="rma_Product_description_' + s + '" placeholder="* Product description" class="prodDescription"></textarea> <input type="text" id="rma_Product_' + s + '_Serial" name="rma_Product_Serial_' + s + '" placeholder="Serial #"> <input type="text" id="rma_Product_' + s + '_invoiceNumber" name="rma_Product_invoiceNumber_' + s + '" placeholder="Invoice #"> <select id="rma_Product_' + s + '_returnCode" name="rma_Product_returnCode_' + s + '"><option value="" selected="selected">* Select problem</option><option value="Broken">Broken</option><option value="Defective">Defective</option><option value="Requires Repair">Requires Repair</option><option value="Return for Restocking">Return for Restocking</option><option value="Customer Cancelled">Customer Cancelled</option></select> </div>...<div class="clearfix"></div><div class="row-fluid" style="border:0"><div class="span8"><textarea id="rma_Product_' + s + '_problem" name="rma_Product_problem_' + s + '" placeholder="* Problem description"></textarea></div><div class="span4"><span class="rmaAddBtn">' + t + '<a href="javascript:void(0);" class="remove_button btn" title="Remove this product"><i class="fa fa-minus-square" aria-hidden="true"></i> Product</a> <a href="javascript:void(0);" class="add_button btn" title="Add an other product"><i class="fa fa-plus-square" aria-hidden="true"></i> Product</a></span> </div> </div></div>', s += 1, d++, $(l).append(r)
        }
    }), $(l).on("click", ".remove_button", function(e) {
        e.preventDefault(), $(this).closest("div.row-fluid.rmanoborder").remove(), d--, document.contains(document.getElementById("maxedOut")) && document.getElementById("maxedOut").remove()
    });
    var m = "";

    function c(e) {
        var t = $(e);
        return p(t), !!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(t.val()) || (v(t), !1)
    }

    function _(e) {
        var t, r, a = (e = $(e)).attr("name"),
            i = e.attr("type");
        if (p(e), "radio" === i) {
            if (0 !== $('[name="' + a + '"]:checked').length) return !0;
            if ("Pallet_Lift_gate" === e.attr("name"));
            else if ("Other_shipper" !== e.attr("name")) return v(e), !1
        }
        return "Store_Fax" === e.attr("name") && "" === $("[name=" + a + "]").val() || ("Ship_from_customer_name" === e.attr("name") || ("Pallet_weight" === e.attr("name") || "Pallet_date" === e.attr("name") || "Pallet_business_hours" === e.attr("name") || ("UPS_num_box" === e.attr("name") || ("UPS_faxORemail" === e.attr("name") || ("Other_shipper_num_box" === e.attr("name") || "Unlisted_delevery_service" === e.attr("name") || ("Unlisted_delevery_service" === e.attr("name") || "Unlisted_delevery_service" === e.attr("name") || (~e.attr("name").indexOf("rma_Product_Qty") ? f(+$("[name=" + a + "]").val(), e) : !(!~e.attr("name").indexOf("rma_Product_Serial") && !~e.attr("name").indexOf("rma_Product_invoiceNumber")) || ("Ship_unit" === e.attr("id") || ("Store_Phone" === e.attr("id") || "Store_Fax" === e.attr("id") ? (t = e, r = $(t).val(), !!/^[0-9-+ ().]+$/.test(r) || (v(t), !1)) : 0 !== $.trim(e.val()).length || (v(e), !1))))))))))
    }

    function p(e) {
        $(e).next("span").remove()
    }

    function v(e) {
        p(e), p($('div[rel-group="radio"]'));
        var t = e.attr("name"),
            r = e.selector.substr(1),
            a = rma_error_messages[rma_lang][r];
        if (~t.indexOf("rma_Product_")) {
            var i = e.attr("name").slice(0, -2);
            a = rma_error_messages[rma_lang][i]
        }
        void 0 === a ? (a = rma_error_messages[rma_lang][t], e.closest('div[rel-group="radio"]').after('<span style="color: red; display: block; clear: both">' + a + "</span>")) : $(e).after('<span style="color: red; display: block; clear: both">' + a + "</span>"), h(e)
    }

    function h(e) {
        $(window).scrollTop($(e).offset().top - 80), $(e).focus().select()
    }

    function f(e, t) {
        if (e <= 0) return v(t), !1
    }
    rma_lang = $("html").attr("lang"), rma_error_messages = {
        en: {
            Store_contact_first_name: "What is your first name",
            Store_contact_last_name: "What is your last name",
            Store_name: "What is your store name",
            Store_Phone: "What is your phone number",
            Store_Fax: "We need a valid fax number",
            Store_Email: "We need a valid store email",
            Ship_from_customer: "Will it be shipped from your customer?",
            Ship_from_customer_name: "What is your customer name?",
            Ship_from_customer_email: "What is your customer email?",
            Ship_street: "We need your shipping address",
            Ship_unit: "We need your unit",
            Ship_city: "We need your city",
            Ship_zip: "We need your zip or postal code",
            Ship_province: "What province or state?",
            Warranty: "Please validate this field",
            Tested: "Please validate this field",
            read_RMA_Terms_Conditions: "Please validate this field",
            Ship_Next_order: "Please validate this field",
            Pallet: "Please validate this field",
            Pallet_Lift_gate: "Please validate this field",
            Pallet_weight: "We need to know the weight",
            Pallet_date: "We need to know the date",
            Pallet_business_hours: "What are your business hours?",
            UPS_labels: "Please validate this field",
            UPS_num_box: "Must be greater than zero",
            UPS_faxORemail: "We need a valid email!",
            Other_delevery_service: "Please validate this field",
            Other_shipper: "What is your delevery service?",
            Unlisted_delevery_service: "What is the service name?",
            Other_shipper_num_box: "Must be greater than zero",
            rma_Product_number: "What is the product number?",
            rma_Product_invoiceNumber: "What is the product invoice number?",
            rma_Product_Qty: "Must be greater than zero",
            rma_Product_Serial: "What is the serial number?",
            rma_Product_returnCode: "Why are you returning this product?",
            rma_Product_description: "Please discribe this product",
            rma_Product_problem: "What is the problem?",
            sendMessage: "Press Cancel to print your RMA form first!\n\nElse, press OK to send form."
        },
        fr: {
            Store_contact_first_name: "Quel est votre prénom",
            Store_contact_last_name: "Quel est votre nom de famille",
            Store_name: "Quel est le nom de votre magasin",
            Store_Phone: "Votre numéro de téléphone SVP",
            Store_Fax: "Votre numéro de télécopieur n'est pas valide",
            Store_Email: "Ce courriel de magasin n'est pas valide",
            Ship_from_customer: "Sera-t-il expédié par votre client?",
            Ship_from_customer_name: "Quel est le nom de votre client?",
            Ship_from_customer_email: "Quel est l'adresse courriel de votre client?",
            Ship_street: "Votre adresse de livraison SVP",
            Ship_unit: "Votre unité SVP",
            Ship_city: "Votre ville SVP",
            Ship_zip: "Votre code postal SVP",
            Ship_province: "Votre province SVP",
            Warranty: "Merci de valider ce champ",
            Tested: "Merci de valider ce champ",
            read_RMA_Terms_Conditions: "Merci de valider ce champ",
            Ship_Next_order: "Merci de valider ce champ",
            Pallet: "Merci de valider ce champ",
            Pallet_Lift_gate: "Merci de valider ce champ",
            Pallet_weight: "Nous devons connaître le poids",
            Pallet_date: "Nous devons connaître la date",
            Pallet_business_hours: "Vos heures d'ouverture SVP?",
            UPS_labels: "Merci de valider ce champ",
            UPS_num_box: "Doit être supérieur à zéro",
            UPS_faxORemail: "Ce courriel n'est pas valide",
            Other_delevery_service: "Merci de valider ce champ",
            Other_shipper: "Quel est votre service de livraison?",
            Unlisted_delevery_service: "Quel est le nom du service?",
            Other_shipper_num_box: "Doit être supérieur à zéro",
            rma_Product_number: "Quel est le numéro de produit?",
            rma_Product_invoiceNumber: "Quel est le numéro de facture?",
            rma_Product_Qty: "Doit être supérieur à zéro",
            rma_Product_Serial: "Quel est le numéro de série?",
            rma_Product_returnCode: "Pourquoi retournez-vous ce produit?",
            rma_Product_description: "Merci de décrire ce produit",
            rma_Product_problem: "Quel est le problème?",
            sendMessage: "Appuyez sur Annuler pour imprimer votre formulaire RMA en premier!\n\nSinon, appuyez sur OK pour envoyer votre formulaire."
        }
    }, $("#rma_form #rma_submit").click(function() {
        var a = [],
            r = !0;
        return $("#rma_form :input").each(function(e) {
            var t = $(this).attr("name"),
                r = ($("[name=" + t + "]").attr("type"), $(this).attr("id"));
            if ("rma_message" === t || "rma_submit" === t || "rma_print" === t);
            else if ("rma_monotype" === t) {
                m = $("[name=" + t + "]").val()
            } else "_gotcha" === t || a.push({
                name: t,
                id: "#" + r
            })
        }), $.each(a, function(e, t) {
            return $.each(t, function(e, t) {
                "id" === e && (r = "#Ship_from_customer_email" === t || (~t.toLowerCase().indexOf("_email") ? c(t) : _(t)))
            }), r
        }), !0 === r && "" === m && confirm(rma_error_messages[rma_lang].sendMessage)
    }), $("#rma_form #rma_print").click(function() {
        var a = [],
            r = !0;
        return $("#rma_form :input").each(function(e) {
            var t = $(this).attr("name"),
                r = ($("[name=" + t + "]").attr("type"), $(this).attr("id"));
            if ("rma_message" === t || "rma_submit" === t || "rma_print" === t);
            else if ("rma_monotype" === t) {
                m = $("[name=" + t + "]").val()
            } else "_gotcha" === t || a.push({
                name: t,
                id: "#" + r
            })
        }), $.each(a, function(e, t) {
            return $.each(t, function(e, t) {
                "id" === e && (r = "#Ship_from_customer_email" === t || (~t.toLowerCase().indexOf("_email") ? c(t) : _(t)))
            }), r
        }), !0 === r && "" === m && (showInput(), !0)
    })
});