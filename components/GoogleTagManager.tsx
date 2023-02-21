import Script from 'next/script'

function GoogleTagManager() {
    return <>
        <Script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TKWBQ2K');`}}/>
        <noscript>
            <iframe
                width="0"
                height="0"
                style={{display: 'none', visibility: 'hidden'}}
                src="https://www.googletagmanager.com/ns.html?id=GTM-TKWBQ2K"
            />
        </noscript>
    </>
}

export default GoogleTagManager