import React from "react"
import PropTypes from "prop-types"
import logo from "./../content/assets/yowai-logo.png"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script src="https://cdn.jsdelivr.net/npm/ie-buster@1.1.0/dist/ie-buster.min.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <section
          id="___loader"
          key={`loading`}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 100,
            fontSize: "3rem",
            lineHeight: 1,
            backgroundColor: "#e6e7ee",
            transition: "opacity 1.6s, visibility 1.6s",
            opacity: 1,
            visibility: "visible",
          }}
        >
          <div
            id="___transition"
            style={{
              transition: "opacity 1.6s, visibility 1.6s",
              opacity: 0,
              visibility: "hidden",
            }}
          >
            <img
              width={256}
              height={256}
              src={logo}
              alt="yowai-logo"
              style={{
                width: "16rem",
                height: "16rem",
                marginBottom: "1rem",
                marginTop: "-6rem",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1.5rem",
                fontFamily: "'Noto Sans JP', Jost, sans-serif",
              }}
            >
              <h3
                style={{
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                  fontStyle: "italic",
                  fontWeight: 800,
                  color: "#519fed",
                  marginBottom: "0.5rem",
                }}
              >
                Don't kill.
              </h3>
              <h3
                style={{
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                  fontStyle: "italic",
                  fontWeight: 800,
                  color: "#519fed",
                  marginBottom: "0.5rem",
                }}
              >
                Protect your
              </h3>
              <h3
                style={{
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                  fontStyle: "italic",
                  fontWeight: 800,
                  color: "#519fed",
                }}
              >
                weakness.
              </h3>
            </div>
            <h1
              style={{
                fontSize: "3.75rem",
                lineHeight: 1,
                fontStyle: "italic",
                fontWeight: 900,
                display: "flex",
                justifyContent: "center",
                color: "#f0f0f0",
                textShadow: "-4px -4px 8px rgba(255,255,255,0.5), 4px 4px 8px rgba(0,0,0,0.08)",
              }}
            >
              弱いzine
            </h1>
          </div>
        </section>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
