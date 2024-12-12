export default function Head(props){
    return(
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content="" />

            <meta name="robots" content="all" />

            <meta property="og:site_name" content={props.siteName} />
            <meta property="og:title" content={props.pageName} />
            <meta property="og:description" content= {props.description} />
            <meta property="og:image" content={props.image} />
            <meta property="og:type" content={props.type} />
            <meta property="og:url" content={props.url} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={props.pageName} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image:src" content={props.image} />

            {/* <meta name="google-site-verification" content="0jtfyVgU-T82r9lNVcpP3fPgj_6CEOm1DH3tjIi1J8Q" /> */}
        </>
    )
}