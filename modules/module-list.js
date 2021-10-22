(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var E="https://vmiis.github.io/wimr-email-templates"
    //var E="http://localhost:8000/vmiis/wimr-email-templates"
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"email-to-patient"]={url:H+"/business/email-to-patient/page.html",prefix:p,router:1};
    m[p+"clinic-email-automation"]={url:H+"/business/clinic-email-automation/page.html",prefix:p,router:1};
    /*
    m[p+"preview-appointment-confirmation"]={url:H+"/business/preview-email/appointment-confirmation.html",prefix:p};
    m[p+"preview-consult-registration"]={url:H+"/business/preview-email/consult-registration.html",prefix:p};
    m[p+"preview-sleep-registration"]={url:H+"/business/preview-email/sleep-registration.html",prefix:p};
    m[p+"preview-email-template"]={url:H+"/business/preview-email/template.html",prefix:p,router:1};

    m[p+"preview-and-send-email"]={url:H+"/business/preview-and-send-email/form.html",api:api,Table:'email_log',prefix:p};



    m[p+"history"]={url:H+"/business/history/data.html",Table:'email_log',prefix:p,router:1};
    
    m[p+"template-appointment-confirmation"]={url:E+"/appointment-confirmation.html"};
    m[p+"template-consult-registration"]={url:E+"/consult-registration.html"};
    m[p+"template-sleep-registration"]={url:E+"/sleep-registration.html"};
    */
    //m[p+"about_the_woolcock_pdf"]={url:E+"/about_the_woolcock.pdf"};
    //m[p+"our_billing_explained_pdf"]={url:E+"/our_billing_explained.pdf"};
    //m[p+"history"]={url:H+"/business/history/data.html",api:"wimr",Table:'email-log',router:1};
    
})();
