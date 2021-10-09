        var apikey = "";
        var website = document.location.search ;
        website = website.substr(4);
        website = "https://www.sahrul.eu.org/1607200660027061/website/assets/1607200660027061/pages/webpages/"+website+"?alt=media&key="+apikey;

        //document.getElementById('website').innerHTML = ' Hii '  ;
        document.write("<iframe id='view' src="+website+"></iframe>");
    
