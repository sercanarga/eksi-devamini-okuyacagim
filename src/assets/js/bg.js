chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.get(tabId, function(tab) {
        var setup = {
            clickNiceAll: '$(".nice-mode-toggler a:first:not(.nice-on)")[0].click();',
            clickAll: 'var op=setInterval(function(){if($(".read-more-link-wrapper a").length>0){$(".read-more-link-wrapper a")[0].click();}else{clearInterval(op);}});'
        };
        var u = tab.url.split('/');
        if (u[2] == 'eksisozluk.com') {
            
            /*
            * Şükela bugün butonuna otomatik tıklatma için sukela değerini 1 yapın.
            * Default: 0
            */
            var sukela = 1;

            chrome.tabs.executeScript(tab.id, {file: 'assets/js/jquery-3.3.1.min.js'}, function() {
                if (sukela == 1) {
                    chrome.tabs.executeScript(tab.id, {code: setup.clickAll + setup.clickNiceAll});
                } else {
                    chrome.tabs.executeScript(tab.id, {code: setup.clickNiceAll});
                }
            });
        }
    });
});