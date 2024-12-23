const usdPath = new Path2D("M39.0939 33.7978C39.092 35.4514 38.4343 37.0368 37.265 38.206C36.0957 39.3753 34.5104 40.0331 32.8568 40.035H31.4175V41.4743C31.4175 41.856 31.2658 42.2221 30.9959 42.4921C30.726 42.762 30.3598 42.9136 29.9781 42.9136C29.5964 42.9136 29.2303 42.762 28.9603 42.4921C28.6904 42.2221 28.5388 41.856 28.5388 41.4743V40.035H27.0994C25.4458 40.0331 23.8605 39.3753 22.6912 38.206C21.5219 37.0368 20.8642 35.4514 20.8623 33.7978C20.8623 33.4161 21.0139 33.05 21.2839 32.7801C21.5538 32.5101 21.9199 32.3585 22.3016 32.3585C22.6834 32.3585 23.0495 32.5101 23.3194 32.7801C23.5893 33.05 23.741 33.4161 23.741 33.7978C23.741 34.6885 24.0948 35.5428 24.7247 36.1726C25.3545 36.8024 26.2087 37.1563 27.0994 37.1563H32.8568C33.7475 37.1563 34.6017 36.8024 35.2316 36.1726C35.8614 35.5428 36.2152 34.6885 36.2152 33.7978C36.2152 32.9071 35.8614 32.0529 35.2316 31.423C34.6017 30.7932 33.7475 30.4394 32.8568 30.4394H28.059C26.4048 30.4394 24.8184 29.7822 23.6487 28.6126C22.479 27.4429 21.8219 25.8564 21.8219 24.2022C21.8219 22.548 22.479 20.9616 23.6487 19.7919C24.8184 18.6222 26.4048 17.9651 28.059 17.9651H28.5388V16.5258C28.5388 16.144 28.6904 15.7779 28.9603 15.508C29.2303 15.2381 29.5964 15.0864 29.9781 15.0864C30.3598 15.0864 30.726 15.2381 30.9959 15.508C31.2658 15.7779 31.4175 16.144 31.4175 16.5258V17.9651H31.8972C33.5508 17.967 35.1362 18.6247 36.3054 19.794C37.4747 20.9633 38.1325 22.5486 38.1344 24.2022C38.1344 24.584 37.9827 24.9501 37.7128 25.22C37.4429 25.4899 37.0768 25.6416 36.695 25.6416C36.3133 25.6416 35.9472 25.4899 35.6773 25.22C35.4073 24.9501 35.2557 24.584 35.2557 24.2022C35.2557 23.3115 34.9019 22.4573 34.272 21.8274C33.6422 21.1976 32.7879 20.8438 31.8972 20.8438H28.059C27.1683 20.8438 26.314 21.1976 25.6842 21.8274C25.0544 22.4573 24.7005 23.3115 24.7005 24.2022C24.7005 25.093 25.0544 25.9472 25.6842 26.577C26.314 27.2069 27.1683 27.5607 28.059 27.5607H32.8568C34.5104 27.5626 36.0957 28.2203 37.265 29.3896C38.4343 30.5589 39.092 32.1442 39.0939 33.7978Z");
const gbpPath = new Path2D("M38.134 38.5953C38.134 38.977 37.9823 39.3431 37.7124 39.6131C37.4425 39.883 37.0764 40.0346 36.6946 40.0346H21.3417C20.9599 40.0346 20.5938 39.883 20.3239 39.6131C20.054 39.3431 19.9023 38.977 19.9023 38.5953C19.9023 38.2136 20.054 37.8475 20.3239 37.5775C20.5938 37.3076 20.9599 37.156 21.3417 37.156H21.8215C22.5849 37.156 23.3171 36.8527 23.857 36.3128C24.3968 35.773 24.7001 35.0408 24.7001 34.2773V30.4391H21.3417C20.9599 30.4391 20.5938 30.2874 20.3239 30.0175C20.054 29.7476 19.9023 29.3815 19.9023 28.9997C19.9023 28.618 20.054 28.2519 20.3239 27.982C20.5938 27.712 20.9599 27.5604 21.3417 27.5604H24.7001V23.7221C24.7 22.4483 25.062 21.2007 25.7441 20.1249C26.4261 19.0491 27.4 18.1893 28.5521 17.646C29.7043 17.1027 30.9871 16.8982 32.2511 17.0564C33.515 17.2145 34.708 17.7289 35.6907 18.5393C35.9851 18.7824 36.1709 19.1324 36.2072 19.5124C36.2436 19.8925 36.1274 20.2714 35.8844 20.5658C35.6414 20.8602 35.2913 21.046 34.9113 21.0823C34.5312 21.1187 34.1523 21.0025 33.8579 20.7595C33.1722 20.1903 32.3082 19.8803 31.417 19.8839C30.3991 19.8839 29.4228 20.2883 28.703 21.0081C27.9832 21.7279 27.5788 22.7042 27.5788 23.7221V27.5604H30.9373C31.319 27.5604 31.6851 27.712 31.955 27.982C32.225 28.2519 32.3766 28.618 32.3766 28.9997C32.3766 29.3815 32.225 29.7476 31.955 30.0175C31.6851 30.2874 31.319 30.4391 30.9373 30.4391H27.5788V34.2773C27.58 35.2882 27.3134 36.2814 26.8064 37.156H36.6946C37.0764 37.156 37.4425 37.3076 37.7124 37.5775C37.9823 37.8475 38.134 38.2136 38.134 38.5953Z");
const eurPath = new Path2D("M37.7671 36.3955C37.8942 36.5365 37.9921 36.7013 38.0552 36.8803C38.1184 37.0593 38.1455 37.249 38.135 37.4385C38.1245 37.628 38.0766 37.8136 37.9942 37.9846C37.9117 38.1555 37.7962 38.3085 37.6544 38.4346C36.3265 39.6216 34.7077 40.4354 32.9629 40.793C31.2181 41.1507 29.4097 41.0394 27.7219 40.4706C26.0341 39.9018 24.5273 38.8957 23.3549 37.555C22.1825 36.2142 21.3865 34.5866 21.048 32.838H19.4227C19.041 32.838 18.6749 32.6863 18.405 32.4164C18.135 32.1465 17.9834 31.7804 17.9834 31.3986C17.9834 31.0169 18.135 30.6508 18.405 30.3809C18.6749 30.1109 19.041 29.9593 19.4227 29.9593H20.8621V28.0402H19.4227C19.041 28.0402 18.6749 27.8885 18.405 27.6186C18.135 27.3487 17.9834 26.9826 17.9834 26.6008C17.9834 26.2191 18.135 25.853 18.405 25.5831C18.6749 25.3131 19.041 25.1615 19.4227 25.1615H21.048C21.3874 23.4134 22.184 21.7865 23.3567 20.4464C24.5294 19.1064 26.0364 18.1011 27.724 17.5329C29.4117 16.9648 31.2198 16.8541 32.9642 17.212C34.7085 17.57 36.3269 18.3839 37.6544 19.5709C37.9389 19.8254 38.1107 20.1825 38.132 20.5636C38.1532 20.9448 38.0222 21.3188 37.7677 21.6033C37.5132 21.8879 37.1561 22.0597 36.7749 22.0809C36.3938 22.1022 36.0198 21.9712 35.7352 21.7167C34.8226 20.9006 33.717 20.3309 32.5228 20.0613C31.3286 19.7918 30.0854 19.8313 28.9107 20.1762C27.7361 20.521 26.6688 21.1599 25.8099 22.0322C24.951 22.9046 24.3288 23.9816 24.0022 25.1615H30.9374C31.3192 25.1615 31.6853 25.3131 31.9552 25.5831C32.2251 25.853 32.3768 26.2191 32.3768 26.6008C32.3768 26.9826 32.2251 27.3487 31.9552 27.6186C31.6853 27.8885 31.3192 28.0402 30.9374 28.0402H23.7408V29.9593H29.0183C29.4001 29.9593 29.7662 30.1109 30.0361 30.3809C30.306 30.6508 30.4577 31.0169 30.4577 31.3986C30.4577 31.7804 30.306 32.1465 30.0361 32.4164C29.7662 32.6863 29.4001 32.838 29.0183 32.838H24.0022C24.3288 34.0178 24.951 35.0949 25.8099 35.9672C26.6688 36.8396 27.7361 37.4784 28.9107 37.8233C30.0854 38.1682 31.3286 38.2077 32.5228 37.9381C33.717 37.6686 34.8226 37.0988 35.7352 36.2828C36.0197 36.0284 36.3935 35.8974 36.7745 35.9185C37.1555 35.9396 37.5126 36.1112 37.7671 36.3955Z");
const jpyPath = new Path2D("M39.7286 20.316L33.0117 28.5202H35.7356C36.1174 28.5202 36.4835 28.6719 36.7534 28.9418C37.0233 29.2117 37.175 29.5778 37.175 29.9596C37.175 30.3413 37.0233 30.7074 36.7534 30.9773C36.4835 31.2473 36.1174 31.3989 35.7356 31.3989H31.4176V33.318H35.7356C36.1174 33.318 36.4835 33.4697 36.7534 33.7396C37.0233 34.0095 37.175 34.3756 37.175 34.7574C37.175 35.1391 37.0233 35.5052 36.7534 35.7751C36.4835 36.0451 36.1174 36.1967 35.7356 36.1967H31.4176V39.5552C31.4176 39.9369 31.266 40.303 30.9961 40.5729C30.7261 40.8429 30.36 40.9945 29.9783 40.9945C29.5966 40.9945 29.2305 40.8429 28.9605 40.5729C28.6906 40.303 28.539 39.9369 28.539 39.5552V36.1967H24.2209C23.8392 36.1967 23.4731 36.0451 23.2032 35.7751C22.9332 35.5052 22.7816 35.1391 22.7816 34.7574C22.7816 34.3756 22.9332 34.0095 23.2032 33.7396C23.4731 33.4697 23.8392 33.318 24.2209 33.318H28.539V31.3989H24.2209C23.8392 31.3989 23.4731 31.2473 23.2032 30.9773C22.9332 30.7074 22.7816 30.3413 22.7816 29.9596C22.7816 29.5778 22.9332 29.2117 23.2032 28.9418C23.4731 28.6719 23.8392 28.5202 24.2209 28.5202H26.9413L20.2244 20.316C20.1047 20.1694 20.015 20.0007 19.9605 19.8195C19.906 19.6383 19.8877 19.4481 19.9067 19.2598C19.9257 19.0715 19.9816 18.8888 20.0712 18.7221C20.1608 18.5555 20.2823 18.4081 20.4289 18.2883C20.5755 18.1686 20.7442 18.079 20.9254 18.0245C21.1066 17.9699 21.2968 17.9517 21.4851 17.9707C21.6734 17.9896 21.8561 18.0455 22.0227 18.1351C22.1894 18.2247 22.3368 18.3463 22.4566 18.4928L29.9783 27.6866L37.5 18.4928C37.7418 18.1973 38.0911 18.0099 38.471 17.9719C38.8509 17.9339 39.2304 18.0484 39.5259 18.2901C39.8214 18.5319 40.0088 18.8812 40.0468 19.2611C40.0848 19.641 39.9704 20.0205 39.7286 20.316Z");
const inrPath = new Path2D("M40.0534 23.2425C40.0534 23.6242 39.9017 23.9903 39.6318 24.2603C39.3619 24.5302 38.9958 24.6818 38.614 24.6818H35.2556C35.2533 26.7171 34.4439 28.6683 33.0047 30.1075C31.5656 31.5466 29.6143 32.3561 27.5791 32.3583H26.9794L34.7758 39.4495C34.9183 39.5759 35.0343 39.7293 35.117 39.9008C35.1998 40.0724 35.2476 40.2587 35.2579 40.4488C35.2681 40.639 35.2405 40.8294 35.1766 41.0088C35.1127 41.1883 35.0139 41.3532 34.8858 41.4942C34.7577 41.6352 34.6029 41.7493 34.4304 41.83C34.2578 41.9107 34.071 41.9563 33.8807 41.9643C33.6904 41.9722 33.5004 41.9423 33.3217 41.8763C33.1431 41.8103 32.9793 41.7095 32.8399 41.5797L22.2847 31.9841C22.0692 31.7882 21.9182 31.5316 21.8516 31.248C21.785 30.9645 21.806 30.6675 21.9118 30.3962C22.0176 30.1248 22.2032 29.8919 22.4441 29.7283C22.685 29.5647 22.9699 29.478 23.2611 29.4796H27.5791C28.8516 29.4796 30.0719 28.9742 30.9717 28.0744C31.8714 27.1746 32.3769 25.9543 32.3769 24.6818H23.2611C22.8793 24.6818 22.5132 24.5302 22.2433 24.2603C21.9734 23.9903 21.8217 23.6242 21.8217 23.2425C21.8217 22.8608 21.9734 22.4947 22.2433 22.2247C22.5132 21.9548 22.8793 21.8032 23.2611 21.8032H31.4173C30.9704 21.2073 30.3909 20.7237 29.7247 20.3906C29.0585 20.0575 28.3239 19.884 27.5791 19.884H23.2611C22.8793 19.884 22.5132 19.7324 22.2433 19.4625C21.9734 19.1925 21.8217 18.8264 21.8217 18.4447C21.8217 18.063 21.9734 17.6969 22.2433 17.4269C22.5132 17.157 22.8793 17.0054 23.2611 17.0054H38.614C38.9958 17.0054 39.3619 17.157 39.6318 17.4269C39.9017 17.6969 40.0534 18.063 40.0534 18.4447C40.0534 18.8264 39.9017 19.1925 39.6318 19.4625C39.3619 19.7324 38.9958 19.884 38.614 19.884H33.5655C34.0326 20.4656 34.4124 21.1121 34.693 21.8032H38.614C38.9958 21.8032 39.3619 21.9548 39.6318 22.2247C39.9017 22.4947 40.0534 22.8608 40.0534 23.2425Z");

function _1(md) {
  return (
      md`<div style="color: grey; font: 13px/25.5px var(--sans-serif); text-transform: uppercase;"><h1 style="display: none;">World tour</h1><a href="https://d3js.org/">D3</a> › <a href="/@d3/gallery">Gallery</a></div>

# World tour

This animation uses [d3.geoInterpolate](https://d3js.org/d3-geo/math#geoInterpolate) to interpolate a path along great arcs, and [spherical linear interpolation](https://en.wikipedia.org/wiki/Slerp) to rotate the [orthographic](/@d3/orthographic) projection.`
  )
}

function _2(html, name) {
  return (
      html`<b style="display:block;text-align:center;line-height:33px;">${name}`
  )
}

async function* _canvas(width, d3, land, borders, countries, $0, Versor) {
  const height = Math.min(width, 1420);

  const dpr = window.devicePixelRatio ?? 1;
  const canvas = d3.create("canvas")
    .attr("width", dpr * width)
    .attr("height", dpr * height)
    .style("width", `${width}px`)
    .style("height", `${height}px`)
    .style("position", "absolute")
    .style("top", "5px");
  const context = canvas.node().getContext("2d");
  context.scale(dpr, dpr);

  const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, height - 10]], {type: "Sphere"});
  const path = d3.geoPath(projection, context);
  const tilt = width <= 470 ? 27 : width <= 630 ? 35 : width <= 970 ? 42 : 52; // Adjusted tilt to position focused country higher
  function render(country, arc) {
    context.clearRect(0, 0, width, height);
    context.save();

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // Draw shadow around the sphere
    context.save();
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    context.globalCompositeOperation = "destination-over";
    context.shadowColor = "#B0BAE5B2";
    context.shadowBlur = 112;
    context.beginPath();
    context.arc(width / 2, height / 2, height / 2, 0, 2 * Math.PI);
    context.fill();
    context.restore();

    context.save();
    context.shadowColor = "#8C95C24D";
    context.shadowBlur = 40;
    context.beginPath();
    context.arc((width / 2), height / 2, (height / 2)-11, 0, 2 * Math.PI);
    context.fill();
    context.restore();

    context.beginPath();
    context.arc(width / 2, height / 2, height / 2 - 10, 0, Math.PI, true);
    context.clip();

    const waterGradient = context.createRadialGradient(width / 2, height / 2, height / 2.35, width / 2, height / 2, height / 2);
    waterGradient.addColorStop(0, "#eafdfa90");
    waterGradient.addColorStop(1, "#d0deef");

    context.fillStyle = waterGradient;
    context.fillRect(0, 0, width, height);

    const radialGradient = context.createRadialGradient(width / 2, height / 2, height / 2 - 10, width / 2, height / 2, 0);
    radialGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    radialGradient.addColorStop(0.7737, "rgba(255, 255, 255, 1)");

    context.fillStyle = radialGradient;
    context.fillRect(0, 0, width, height);

    context.globalCompositeOperation = "source-atop";

    // context.beginPath();
    // path({type: "Sphere"});
    // context.clip();

    // const countryGradient = context.createLinearGradient(0, 0, width, 0);
    // countryGradient.addColorStop(0.3906, "#31fcfb");
    // countryGradient.addColorStop(1, "#82dff0");

    context.beginPath();
    path(land);
    context.fillStyle = "#31fcfb";
    context.fill();

    context.beginPath();
    path(borders);
    context.strokeStyle = "#AFB7DC70"; // Updated color for borders
    context.lineWidth = 0.5;
    context.stroke();

    context.beginPath();
    path({type: "Sphere"});
    context.strokeStyle = "#E2FCFC";
    context.lineWidth = 1.5;
    context.stroke();

    context.beginPath();
    path(country);
    context.fillStyle = "#475385"; // Updated color for focused country
    context.fill();

    context.beginPath();
    path(arc);
    context.strokeStyle = "#475385"; // Updated color for moving line
    context.stroke();

    const [centroidX, centroidY] = projection(d3.geoCentroid(country));
      drawCurrencyIcon(centroidX, centroidY - 76, getCurrencyPath(country));

    context.restore();
    return context.canvas;
  }

  const iconRadius = width <= 550 ? 23 : 28;
  const innerCircleRadius = iconRadius * 0.85;
  function drawCurrencyIcon(x, y, path) {
    context.beginPath();
    context.arc(x, y, iconRadius, 0, 2 * Math.PI);
    context.fillStyle = "#D5DAEF";
    context.fill();

    context.beginPath();
    context.arc(x, y, innerCircleRadius, 0, 2 * Math.PI);
    context.fillStyle = "#475385";
    context.fill();

    context.translate(x - 30, y - 30);
    context.fillStyle = "white";
    context.fill(path);
  }

  function getCurrencyPath(country) {
    switch (country.properties.name) {
      case "United States of America": return usdPath;
      case "United Kingdom": return gbpPath;
      case "Japan": return jpyPath;
      case "India": return inrPath;
      default: return eurPath;
    }
  }


  const specifiedCountries = ["United States of America", "United Kingdom", "Japan", "India", "Austria", "Belgium", "Cyprus", "Estonia", "Finland", "Germany", "Greece", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Portugal", "Slovakia", "Slovenia", "Spain"];
  let p1, p2 = [0, 0], r1, r2 = [0, 0, 0];
  while (true) {
    for (const country of countries) {
      if (!specifiedCountries.includes(country.properties.name)) continue;

      // $0.value = country.properties.name;
      yield render(country);

      // eslint-disable-next-line
      p1 = p2, p2 = d3.geoCentroid(country);
      // eslint-disable-next-line
      r1 = r2, r2 = [-p2[0], tilt - p2[1], 0];
      const ip = d3.geoInterpolate(p1, p2);
      const iv = Versor.interpolateAngles(r1, r2);

      await d3.transition()
        .duration(1500)
        .tween("render", () => t => {
          projection.rotate(iv(t));
          render(country, {type: "LineString", coordinates: [p1, ip(t)]});
        })
        .transition()
        .tween("render", () => t => {
          render(country, {type: "LineString", coordinates: [ip(t), p2]});
        })
        .end();
    }
  }
}


function _Versor() {
  return (
      class Versor {
        static fromAngles([l, p, g]) {
          l *= Math.PI / 360;
          p *= Math.PI / 360;
          g *= Math.PI / 360;
          const sl = Math.sin(l), cl = Math.cos(l);
          const sp = Math.sin(p), cp = Math.cos(p);
          const sg = Math.sin(g), cg = Math.cos(g);
          return [
            cl * cp * cg + sl * sp * sg,
            sl * cp * cg - cl * sp * sg,
            cl * sp * cg + sl * cp * sg,
            cl * cp * sg - sl * sp * cg
          ];
        }

        static toAngles([a, b, c, d]) {
          return [
            Math.atan2(2 * (a * b + c * d), 1 - 2 * (b * b + c * c)) * 180 / Math.PI,
            Math.asin(Math.max(-1, Math.min(1, 2 * (a * c - d * b)))) * 180 / Math.PI,
            Math.atan2(2 * (a * d + b * c), 1 - 2 * (c * c + d * d)) * 180 / Math.PI
          ];
        }

        static interpolateAngles(a, b) {
          const i = Versor.interpolate(Versor.fromAngles(a), Versor.fromAngles(b));
          return t => Versor.toAngles(i(t));
        }

        static interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) {
          //eslint-disable-next-line
          a2 -= a1, b2 -= b1, c2 -= c1, d2 -= d1;
          const x = new Array(4);
          return t => {
            const l = Math.hypot(x[0] = a1 + a2 * t, x[1] = b1 + b2 * t, x[2] = c1 + c2 * t, x[3] = d1 + d2 * t);
            //eslint-disable-next-line
            x[0] /= l, x[1] /= l, x[2] /= l, x[3] /= l;
            return x;
          };
        }

        static interpolate([a1, b1, c1, d1], [a2, b2, c2, d2]) {
          let dot = a1 * a2 + b1 * b2 + c1 * c2 + d1 * d2;
          //eslint-disable-next-line
          if (dot < 0) a2 = -a2, b2 = -b2, c2 = -c2, d2 = -d2, dot = -dot;
          if (dot > 0.9995) return Versor.interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]);
          const theta0 = Math.acos(Math.max(-1, Math.min(1, dot)));
          const x = new Array(4);
          const l = Math.hypot(a2 -= a1 * dot, b2 -= b1 * dot, c2 -= c1 * dot, d2 -= d1 * dot);
          //eslint-disable-next-line
          a2 /= l, b2 /= l, c2 /= l, d2 /= l;
          return t => {
            const theta = theta0 * t;
            const s = Math.sin(theta);
            const c = Math.cos(theta);
            x[0] = a1 * c + a2 * s;
            x[1] = b1 * c + b2 * s;
            x[2] = c1 * c + c2 * s;
            x[3] = d1 * c + d2 * s;
            return x;
          };
        }
      }
  )
}

function _name() {
  return (
      ""
  )
}

function _countries(topojson, world) {
  return (
      topojson.feature(world, world.objects.countries).features
  )
}

function _borders(topojson, world) {
  return (
      topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
  )
}

function _land(topojson, world) {
  return (
      topojson.feature(world, world.objects.land)
  )
}

function _world(FileAttachment) {
  return (
      FileAttachment("countries-110m.json").json()
  )
}

export default function define(runtime, observer) {
  const main = runtime.module();

  function toString() {
    return this.url;
  }

  const fileAttachments = new Map([
    ["countries-110m.json", {
      url: new URL("./files/topology.json", import.meta.url),
      mimeType: "application/json",
      toString
    }]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["html", "name"], _2);
  main.variable(observer("canvas")).define("canvas", ["width", "d3", "land", "borders", "countries", "mutable name", "Versor"], _canvas);
  main.variable(observer("Versor")).define("Versor", _Versor);
  main.define("initial name", _name);
  main.variable(observer("mutable name")).define("mutable name", ["Mutable", "initial name"], (M, _) => new M(_));
  main.variable(observer("name")).define("name", ["mutable name"], _ => _.generator);
  main.variable(observer("countries")).define("countries", ["topojson", "world"], _countries);
  main.variable(observer("borders")).define("borders", ["topojson", "world"], _borders);
  main.variable(observer("land")).define("land", ["topojson", "world"], _land);
  main.variable(observer("world")).define("world", ["FileAttachment"], _world);
  return main;
}
