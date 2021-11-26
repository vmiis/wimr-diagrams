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
    m[p+"dynamics-contact-permission"]={url:H+"/business/dynamics-contact-permission/page.html",prefix:p,router:1};
})();
