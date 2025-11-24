import Head from 'next/head'

function General() {
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="language" content="pt-BR"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <script crossOrigin="anonymous" type="text/javascript" src="https://api.josivalpenha.com/nyxel/video"/>
            <script dangerouslySetInnerHTML={{
                __html: `var _paq = window._paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                    var u="//matomo.nyxel.tech/";
                    _paq.push(['setTrackerUrl', u+'matomo.php']);
                    _paq.push(['setSiteId', '1']);
                    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();`
            }}/>
        </Head>
    )
}

export default General
