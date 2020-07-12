// maps component using react simple maps
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";

// mas geo data json format
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// call it if want to show latitude and longitude lines. 
function generateCircle(deg) {
  if (!deg) return [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]];
  return new Array(361).fill(1).map((d, i) => {
    return [-180 + i, deg];
  });
}

const MapChart = (props) => {

  // searching for the lat and log for the country of origin and country of destination.
  var search1 = props.from.firs;
  var search2 = props.from.sec;
  var lat = [], lon = [], lat1 = [], lon1 = [];

  for (var i=0 ; i < coordinates.length ; i++)
  {
    if (coordinates[i].alpha3 == search1) {
        lat.push(coordinates[i].latit);
        lon.push(coordinates[i].longit)
    }
    if (coordinates[i].alpha3 == search2) {
      lat1.push(coordinates[i].latit);
      lon1.push(coordinates[i].longit)
    }
  }
  return (
    // react-simple-map starts
    <ComposableMap projection="geoEqualEarth">
      <PatternLines
        id="lines"
        height={3}
        width={3}
        stroke="#000"
        strokeWidth={.2}
        background="#658EA9"
        orientation={["diagonal"]}
      />
      <PatternLines
        id="lines1"
        height={3}
        width={3}
        stroke="#000"
        strokeWidth={.2}
        background="#E98973"
        orientation={["diagonal"]} 
      />
      <Geographies geography={geoUrl} stroke="#000" fill="#F6F0E9" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map(geo => {
            
            // highlight the selected country 
            const highlighted = [ props.from.firs ];
            const highlighted1 = [ props.from.sec ];
            const isHighlighted = highlighted.indexOf(geo.properties.ISO_A3) !== -1;
            const isHighlighted1 = highlighted1.indexOf(geo.properties.ISO_A3) !== -1;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isHighlighted ? "url('#lines')" : isHighlighted1 ? "url(#lines1)" : ""}
                onClick={() => console.log(geo.properties.ISO_A3)}
              />
            );
          })
        }
      </Geographies>
      
      {/* connect lines between the countries selected */}
      <Line 
        from={[lon, lat]}
        to={[lon1,lat1]}
        stroke="#FF5533"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </ComposableMap>
  );
};

// json data used for the co-ordinates of countries(lat and long with ISO_3 code).
var coordinates = [
  {"\"Country\"":"Afghanistan","\"Alpha-2code\"":"AF","alpha3":"AFG","\"Numericcode\"":"4","latit":"33","longit":"65"},
  {"\"Country\"":"Albania","\"Alpha-2code\"":"AL","alpha3":"ALB","\"Numericcode\"":"8","latit":"41","longit":"20"},
  {"\"Country\"":"Algeria","\"Alpha-2code\"":"DZ","alpha3":"DZA","\"Numericcode\"":"12","latit":"28","longit":"3"},
  {"\"Country\"":"AmericanSamoa","\"Alpha-2code\"":"AS","alpha3":"ASM","\"Numericcode\"":"16","latit":"-14.3333","longit":"-170"},
  {"\"Country\"":"Andorra","\"Alpha-2code\"":"AD","alpha3":"AND","\"Numericcode\"":"20","latit":"42.5","longit":"1.6"},
  {"\"Country\"":"Angola","\"Alpha-2code\"":"AO","alpha3":"AGO","\"Numericcode\"":"24","latit":"-12.5","longit":"18.5"},
  {"\"Country\"":"Anguilla","\"Alpha-2code\"":"AI","alpha3":"AIA","\"Numericcode\"":"660","latit":"18.25","longit":"-63.1667"},
  {"\"Country\"":"Antarctica","\"Alpha-2code\"":"AQ","alpha3":"ATA","\"Numericcode\"":"10","latit":"-90","longit":"0"},
  {"\"Country\"":"AntiguaandBarbuda","\"Alpha-2code\"":"AG","alpha3":"ATG","\"Numericcode\"":"28","latit":"17.05","longit":"-61.8"},
  {"\"Country\"":"Argentina","\"Alpha-2code\"":"AR","alpha3":"ARG","\"Numericcode\"":"32","latit":"-34","longit":"-64"},
  {"\"Country\"":"Armenia","\"Alpha-2code\"":"AM","alpha3":"ARM","\"Numericcode\"":"51","latit":"40","longit":"45"},
  {"\"Country\"":"Aruba","\"Alpha-2code\"":"AW","alpha3":"ABW","\"Numericcode\"":"533","latit":"12.5","longit":"-69.9667"},
  {"\"Country\"":"Australia","\"Alpha-2code\"":"AU","alpha3":"AUS","\"Numericcode\"":"36","latit":"-27","longit":"133"},
  {"\"Country\"":"Austria","\"Alpha-2code\"":"AT","alpha3":"AUT","\"Numericcode\"":"40","latit":"47.3333","longit":"13.3333"},
  {"\"Country\"":"Azerbaijan","\"Alpha-2code\"":"AZ","alpha3":"AZE","\"Numericcode\"":"31","latit":"40.5","longit":"47.5"},
  {"\"Country\"":"Bahamas","\"Alpha-2code\"":"BS","alpha3":"BHS","\"Numericcode\"":"44","latit":"24.25","longit":"-76"},
  {"\"Country\"":"Bahrain","\"Alpha-2code\"":"BH","alpha3":"BHR","\"Numericcode\"":"48","latit":"26","longit":"50.55"},
  {"\"Country\"":"Bangladesh","\"Alpha-2code\"":"BD","alpha3":"BGD","\"Numericcode\"":"50","latit":"24","longit":"90"},
  {"\"Country\"":"Barbados","\"Alpha-2code\"":"BB","alpha3":"BRB","\"Numericcode\"":"52","latit":"13.1667","longit":"-59.5333"},
  {"\"Country\"":"Belarus","\"Alpha-2code\"":"BY","alpha3":"BLR","\"Numericcode\"":"112","latit":"53","longit":"28"},
  {"\"Country\"":"Belgium","\"Alpha-2code\"":"BE","alpha3":"BEL","\"Numericcode\"":"56","latit":"50.8333","longit":"4"},
  {"\"Country\"":"Belize","\"Alpha-2code\"":"BZ","alpha3":"BLZ","\"Numericcode\"":"84","latit":"17.25","longit":"-88.75"},
  {"\"Country\"":"Benin","\"Alpha-2code\"":"BJ","alpha3":"BEN","\"Numericcode\"":"204","latit":"9.5","longit":"2.25"},
  {"\"Country\"":"Bermuda","\"Alpha-2code\"":"BM","alpha3":"BMU","\"Numericcode\"":"60","latit":"32.3333","longit":"-64.75"},
  {"\"Country\"":"Bhutan","\"Alpha-2code\"":"BT","alpha3":"BTN","\"Numericcode\"":"64","latit":"27.5","longit":"90.5"},
  {"\"Country\"":"Bolivia,PlurinationalStateof","\"Alpha-2code\"":"BO","alpha3":"BOL","\"Numericcode\"":"68","latit":"-17","longit":"-65"},
  {"\"Country\"":"Bolivia","\"Alpha-2code\"":"BO","alpha3":"BOL","\"Numericcode\"":"68","latit":"-17","longit":"-65"},
  {"\"Country\"":"BosniaandHerzegovina","\"Alpha-2code\"":"BA","alpha3":"BIH","\"Numericcode\"":"70","latit":"44","longit":"18"},
  {"\"Country\"":"Botswana","\"Alpha-2code\"":"BW","alpha3":"BWA","\"Numericcode\"":"72","latit":"-22","longit":"24"},
  {"\"Country\"":"BouvetIsland","\"Alpha-2code\"":"BV","alpha3":"BVT","\"Numericcode\"":"74","latit":"-54.4333","longit":"3.4"},
  {"\"Country\"":"Brazil","\"Alpha-2code\"":"BR","alpha3":"BRA","\"Numericcode\"":"76","latit":"-10","longit":"-55"},
  {"\"Country\"":"BritishIndianOceanTerritory","\"Alpha-2code\"":"IO","alpha3":"IOT","\"Numericcode\"":"86","latit":"-6","longit":"71.5"},
  {"\"Country\"":"BruneiDarussalam","\"Alpha-2code\"":"BN","alpha3":"BRN","\"Numericcode\"":"96","latit":"4.5","longit":"114.6667"},
  {"\"Country\"":"Brunei","\"Alpha-2code\"":"BN","alpha3":"BRN","\"Numericcode\"":"96","latit":"4.5","longit":"114.6667"},
  {"\"Country\"":"Bulgaria","\"Alpha-2code\"":"BG","alpha3":"BGR","\"Numericcode\"":"100","latit":"43","longit":"25"},
  {"\"Country\"":"BurkinaFaso","\"Alpha-2code\"":"BF","alpha3":"BFA","\"Numericcode\"":"854","latit":"13","longit":"-2"},
  {"\"Country\"":"Burundi","\"Alpha-2code\"":"BI","alpha3":"BDI","\"Numericcode\"":"108","latit":"-3.5","longit":"30"},
  {"\"Country\"":"Cambodia","\"Alpha-2code\"":"KH","alpha3":"KHM","\"Numericcode\"":"116","latit":"13","longit":"105"},
  {"\"Country\"":"Cameroon","\"Alpha-2code\"":"CM","alpha3":"CMR","\"Numericcode\"":"120","latit":"6","longit":"12"},
  {"\"Country\"":"Canada","\"Alpha-2code\"":"CA","alpha3":"CAN","\"Numericcode\"":"124","latit":"60","longit":"-95"},
  {"\"Country\"":"CapeVerde","\"Alpha-2code\"":"CV","alpha3":"CPV","\"Numericcode\"":"132","latit":"16","longit":"-24"},
  {"\"Country\"":"CaymanIslands","\"Alpha-2code\"":"KY","alpha3":"CYM","\"Numericcode\"":"136","latit":"19.5","longit":"-80.5"},
  {"\"Country\"":"CentralAfricanRepublic","\"Alpha-2code\"":"CF","alpha3":"CAF","\"Numericcode\"":"140","latit":"7","longit":"21"},
  {"\"Country\"":"Chad","\"Alpha-2code\"":"TD","alpha3":"TCD","\"Numericcode\"":"148","latit":"15","longit":"19"},
  {"\"Country\"":"Chile","\"Alpha-2code\"":"CL","alpha3":"CHL","\"Numericcode\"":"152","latit":"-30","longit":"-71"},
  {"\"Country\"":"China","\"Alpha-2code\"":"CN","alpha3":"CHN","\"Numericcode\"":"156","latit":"35","longit":"105"},
  {"\"Country\"":"ChristmasIsland","\"Alpha-2code\"":"CX","alpha3":"CXR","\"Numericcode\"":"162","latit":"-10.5","longit":"105.6667"},
  {"\"Country\"":"Cocos(Keeling)Islands","\"Alpha-2code\"":"CC","alpha3":"CCK","\"Numericcode\"":"166","latit":"-12.5","longit":"96.8333"},
  {"\"Country\"":"Colombia","\"Alpha-2code\"":"CO","alpha3":"COL","\"Numericcode\"":"170","latit":"4","longit":"-72"},
  {"\"Country\"":"Comoros","\"Alpha-2code\"":"KM","alpha3":"COM","\"Numericcode\"":"174","latit":"-12.1667","longit":"44.25"},
  {"\"Country\"":"Congo","\"Alpha-2code\"":"CG","alpha3":"COG","\"Numericcode\"":"178","latit":"-1","longit":"15"},
  {"\"Country\"":"Congo,theDemocraticRepublicofthe","\"Alpha-2code\"":"CD","alpha3":"COD","\"Numericcode\"":"180","latit":"0","longit":"25"},
  {"\"Country\"":"CookIslands","\"Alpha-2code\"":"CK","alpha3":"COK","\"Numericcode\"":"184","latit":"-21.2333","longit":"-159.7667"},
  {"\"Country\"":"CostaRica","\"Alpha-2code\"":"CR","alpha3":"CRI","\"Numericcode\"":"188","latit":"10","longit":"-84"},
  {"\"Country\"":"Côted'Ivoire","\"Alpha-2code\"":"CI","alpha3":"CIV","\"Numericcode\"":"384","latit":"8","longit":"-5"},
  {"\"Country\"":"IvoryCoast","\"Alpha-2code\"":"CI","alpha3":"CIV","\"Numericcode\"":"384","latit":"8","longit":"-5"},
  {"\"Country\"":"Croatia","\"Alpha-2code\"":"HR","alpha3":"HRV","\"Numericcode\"":"191","latit":"45.1667","longit":"15.5"},
  {"\"Country\"":"Cuba","\"Alpha-2code\"":"CU","alpha3":"CUB","\"Numericcode\"":"192","latit":"21.5","longit":"-80"},
  {"\"Country\"":"Cyprus","\"Alpha-2code\"":"CY","alpha3":"CYP","\"Numericcode\"":"196","latit":"35","longit":"33"},
  {"\"Country\"":"CzechRepublic","\"Alpha-2code\"":"CZ","alpha3":"CZE","\"Numericcode\"":"203","latit":"49.75","longit":"15.5"},
  {"\"Country\"":"Denmark","\"Alpha-2code\"":"DK","alpha3":"DNK","\"Numericcode\"":"208","latit":"56","longit":"10"},
  {"\"Country\"":"Djibouti","\"Alpha-2code\"":"DJ","alpha3":"DJI","\"Numericcode\"":"262","latit":"11.5","longit":"43"},
  {"\"Country\"":"Dominica","\"Alpha-2code\"":"DM","alpha3":"DMA","\"Numericcode\"":"212","latit":"15.4167","longit":"-61.3333"},
  {"\"Country\"":"DominicanRepublic","\"Alpha-2code\"":"DO","alpha3":"DOM","\"Numericcode\"":"214","latit":"19","longit":"-70.6667"},
  {"\"Country\"":"Ecuador","\"Alpha-2code\"":"EC","alpha3":"ECU","\"Numericcode\"":"218","latit":"-2","longit":"-77.5"},
  {"\"Country\"":"Egypt","\"Alpha-2code\"":"EG","alpha3":"EGY","\"Numericcode\"":"818","latit":"27","longit":"30"},
  {"\"Country\"":"ElSalvador","\"Alpha-2code\"":"SV","alpha3":"SLV","\"Numericcode\"":"222","latit":"13.8333","longit":"-88.9167"},
  {"\"Country\"":"EquatorialGuinea","\"Alpha-2code\"":"GQ","alpha3":"GNQ","\"Numericcode\"":"226","latit":"2","longit":"10"},
  {"\"Country\"":"Eritrea","\"Alpha-2code\"":"ER","alpha3":"ERI","\"Numericcode\"":"232","latit":"15","longit":"39"},
  {"\"Country\"":"Estonia","\"Alpha-2code\"":"EE","alpha3":"EST","\"Numericcode\"":"233","latit":"59","longit":"26"},
  {"\"Country\"":"Ethiopia","\"Alpha-2code\"":"ET","alpha3":"ETH","\"Numericcode\"":"231","latit":"8","longit":"38"},
  {"\"Country\"":"FalklandIslands(Malvinas)","\"Alpha-2code\"":"FK","alpha3":"FLK","\"Numericcode\"":"238","latit":"-51.75","longit":"-59"},
  {"\"Country\"":"FaroeIslands","\"Alpha-2code\"":"FO","alpha3":"FRO","\"Numericcode\"":"234","latit":"62","longit":"-7"},
  {"\"Country\"":"Fiji","\"Alpha-2code\"":"FJ","alpha3":"FJI","\"Numericcode\"":"242","latit":"-18","longit":"175"},
  {"\"Country\"":"Finland","\"Alpha-2code\"":"FI","alpha3":"FIN","\"Numericcode\"":"246","latit":"64","longit":"26"},
  {"\"Country\"":"France","\"Alpha-2code\"":"FR","alpha3":"FRA","\"Numericcode\"":"250","latit":"46","longit":"2"},
  {"\"Country\"":"FrenchGuiana","\"Alpha-2code\"":"GF","alpha3":"GUF","\"Numericcode\"":"254","latit":"4","longit":"-53"},
  {"\"Country\"":"FrenchPolynesia","\"Alpha-2code\"":"PF","alpha3":"PYF","\"Numericcode\"":"258","latit":"-15","longit":"-140"},
  {"\"Country\"":"FrenchSouthernTerritories","\"Alpha-2code\"":"TF","alpha3":"ATF","\"Numericcode\"":"260","latit":"-43","longit":"67"},
  {"\"Country\"":"Gabon","\"Alpha-2code\"":"GA","alpha3":"GAB","\"Numericcode\"":"266","latit":"-1","longit":"11.75"},
  {"\"Country\"":"Gambia","\"Alpha-2code\"":"GM","alpha3":"GMB","\"Numericcode\"":"270","latit":"13.4667","longit":"-16.5667"},
  {"\"Country\"":"Georgia","\"Alpha-2code\"":"GE","alpha3":"GEO","\"Numericcode\"":"268","latit":"42","longit":"43.5"},
  {"\"Country\"":"Germany","\"Alpha-2code\"":"DE","alpha3":"DEU","\"Numericcode\"":"276","latit":"51","longit":"9"},
  {"\"Country\"":"Ghana","\"Alpha-2code\"":"GH","alpha3":"GHA","\"Numericcode\"":"288","latit":"8","longit":"-2"},
  {"\"Country\"":"Gibraltar","\"Alpha-2code\"":"GI","alpha3":"GIB","\"Numericcode\"":"292","latit":"36.1833","longit":"-5.3667"},
  {"\"Country\"":"Greece","\"Alpha-2code\"":"GR","alpha3":"GRC","\"Numericcode\"":"300","latit":"39","longit":"22"},
  {"\"Country\"":"Greenland","\"Alpha-2code\"":"GL","alpha3":"GRL","\"Numericcode\"":"304","latit":"72","longit":"-40"},
  {"\"Country\"":"Grenada","\"Alpha-2code\"":"GD","alpha3":"GRD","\"Numericcode\"":"308","latit":"12.1167","longit":"-61.6667"},
  {"\"Country\"":"Guadeloupe","\"Alpha-2code\"":"GP","alpha3":"GLP","\"Numericcode\"":"312","latit":"16.25","longit":"-61.5833"},
  {"\"Country\"":"Guam","\"Alpha-2code\"":"GU","alpha3":"GUM","\"Numericcode\"":"316","latit":"13.4667","longit":"144.7833"},
  {"\"Country\"":"Guatemala","\"Alpha-2code\"":"GT","alpha3":"GTM","\"Numericcode\"":"320","latit":"15.5","longit":"-90.25"},
  {"\"Country\"":"Guernsey","\"Alpha-2code\"":"GG","alpha3":"GGY","\"Numericcode\"":"831","latit":"49.5","longit":"-2.56"},
  {"\"Country\"":"Guinea","\"Alpha-2code\"":"GN","alpha3":"GIN","\"Numericcode\"":"324","latit":"11","longit":"-10"},
  {"\"Country\"":"Guinea-Bissau","\"Alpha-2code\"":"GW","alpha3":"GNB","\"Numericcode\"":"624","latit":"12","longit":"-15"},
  {"\"Country\"":"Guyana","\"Alpha-2code\"":"GY","alpha3":"GUY","\"Numericcode\"":"328","latit":"5","longit":"-59"},
  {"\"Country\"":"Haiti","\"Alpha-2code\"":"HT","alpha3":"HTI","\"Numericcode\"":"332","latit":"19","longit":"-72.4167"},
  {"\"Country\"":"HeardIslandandMcDonaldIslands","\"Alpha-2code\"":"HM","alpha3":"HMD","\"Numericcode\"":"334","latit":"-53.1","longit":"72.5167"},
  {"\"Country\"":"HolySee(VaticanCityState)","\"Alpha-2code\"":"VA","alpha3":"VAT","\"Numericcode\"":"336","latit":"41.9","longit":"12.45"},
  {"\"Country\"":"Honduras","\"Alpha-2code\"":"HN","alpha3":"HND","\"Numericcode\"":"340","latit":"15","longit":"-86.5"},
  {"\"Country\"":"HongKong","\"Alpha-2code\"":"HK","alpha3":"HKG","\"Numericcode\"":"344","latit":"22.25","longit":"114.1667"},
  {"\"Country\"":"Hungary","\"Alpha-2code\"":"HU","alpha3":"HUN","\"Numericcode\"":"348","latit":"47","longit":"20"},
  {"\"Country\"":"Iceland","\"Alpha-2code\"":"IS","alpha3":"ISL","\"Numericcode\"":"352","latit":"65","longit":"-18"},
  {"\"Country\"":"India","\"Alpha-2code\"":"IN","alpha3":"IND","\"Numericcode\"":"356","latit":"20","longit":"77"},
  {"\"Country\"":"Indonesia","\"Alpha-2code\"":"ID","alpha3":"IDN","\"Numericcode\"":"360","latit":"-5","longit":"120"},
  {"\"Country\"":"Iran,IslamicRepublicof","\"Alpha-2code\"":"IR","alpha3":"IRN","\"Numericcode\"":"364","latit":"32","longit":"53"},
  {"\"Country\"":"Iraq","\"Alpha-2code\"":"IQ","alpha3":"IRQ","\"Numericcode\"":"368","latit":"33","longit":"44"},
  {"\"Country\"":"Ireland","\"Alpha-2code\"":"IE","alpha3":"IRL","\"Numericcode\"":"372","latit":"53","longit":"-8"},
  {"\"Country\"":"IsleofMan","\"Alpha-2code\"":"IM","alpha3":"IMN","\"Numericcode\"":"833","latit":"54.23","longit":"-4.55"},
  {"\"Country\"":"Israel","\"Alpha-2code\"":"IL","alpha3":"ISR","\"Numericcode\"":"376","latit":"31.5","longit":"34.75"},
  {"\"Country\"":"Italy","\"Alpha-2code\"":"IT","alpha3":"ITA","\"Numericcode\"":"380","latit":"42.8333","longit":"12.8333"},
  {"\"Country\"":"Jamaica","\"Alpha-2code\"":"JM","alpha3":"JAM","\"Numericcode\"":"388","latit":"18.25","longit":"-77.5"},
  {"\"Country\"":"Japan","\"Alpha-2code\"":"JP","alpha3":"JPN","\"Numericcode\"":"392","latit":"36","longit":"138"},
  {"\"Country\"":"Jersey","\"Alpha-2code\"":"JE","alpha3":"JEY","\"Numericcode\"":"832","latit":"49.21","longit":"-2.13"},
  {"\"Country\"":"Jordan","\"Alpha-2code\"":"JO","alpha3":"JOR","\"Numericcode\"":"400","latit":"31","longit":"36"},
  {"\"Country\"":"Kazakhstan","\"Alpha-2code\"":"KZ","alpha3":"KAZ","\"Numericcode\"":"398","latit":"48","longit":"68"},
  {"\"Country\"":"Kenya","\"Alpha-2code\"":"KE","alpha3":"KEN","\"Numericcode\"":"404","latit":"1","longit":"38"},
  {"\"Country\"":"Kiribati","\"Alpha-2code\"":"KI","alpha3":"KIR","\"Numericcode\"":"296","latit":"1.4167","longit":"173"},
  {"\"Country\"":"Korea,DemocraticPeople'sRepublicof","\"Alpha-2code\"":"KP","alpha3":"PRK","\"Numericcode\"":"408","latit":"40","longit":"127"},
  {"\"Country\"":"Korea,Republicof","\"Alpha-2code\"":"KR","alpha3":"KOR","\"Numericcode\"":"410","latit":"37","longit":"127.5"},
  {"\"Country\"":"SouthKorea","\"Alpha-2code\"":"KR","alpha3":"KOR","\"Numericcode\"":"410","latit":"37","longit":"127.5"},
  {"\"Country\"":"Kuwait","\"Alpha-2code\"":"KW","alpha3":"KWT","\"Numericcode\"":"414","latit":"29.3375","longit":"47.6581"},
  {"\"Country\"":"Kyrgyzstan","\"Alpha-2code\"":"KG","alpha3":"KGZ","\"Numericcode\"":"417","latit":"41","longit":"75"},
  {"\"Country\"":"LaoPeople'sDemocraticRepublic","\"Alpha-2code\"":"LA","alpha3":"LAO","\"Numericcode\"":"418","latit":"18","longit":"105"},
  {"\"Country\"":"Latvia","\"Alpha-2code\"":"LV","alpha3":"LVA","\"Numericcode\"":"428","latit":"57","longit":"25"},
  {"\"Country\"":"Lebanon","\"Alpha-2code\"":"LB","alpha3":"LBN","\"Numericcode\"":"422","latit":"33.8333","longit":"35.8333"},
  {"\"Country\"":"Lesotho","\"Alpha-2code\"":"LS","alpha3":"LSO","\"Numericcode\"":"426","latit":"-29.5","longit":"28.5"},
  {"\"Country\"":"Liberia","\"Alpha-2code\"":"LR","alpha3":"LBR","\"Numericcode\"":"430","latit":"6.5","longit":"-9.5"},
  {"\"Country\"":"LibyanArabJamahiriya","\"Alpha-2code\"":"LY","alpha3":"LBY","\"Numericcode\"":"434","latit":"25","longit":"17"},
  {"\"Country\"":"Libya","\"Alpha-2code\"":"LY","alpha3":"LBY","\"Numericcode\"":"434","latit":"25","longit":"17"},
  {"\"Country\"":"Liechtenstein","\"Alpha-2code\"":"LI","alpha3":"LIE","\"Numericcode\"":"438","latit":"47.1667","longit":"9.5333"},
  {"\"Country\"":"Lithuania","\"Alpha-2code\"":"LT","alpha3":"LTU","\"Numericcode\"":"440","latit":"56","longit":"24"},
  {"\"Country\"":"Luxembourg","\"Alpha-2code\"":"LU","alpha3":"LUX","\"Numericcode\"":"442","latit":"49.75","longit":"6.1667"},
  {"\"Country\"":"Macao","\"Alpha-2code\"":"MO","alpha3":"MAC","\"Numericcode\"":"446","latit":"22.1667","longit":"113.55"},
  {"\"Country\"":"Macedonia,theformerYugoslavRepublicof","\"Alpha-2code\"":"MK","alpha3":"MKD","\"Numericcode\"":"807","latit":"41.8333","longit":"22"},
  {"\"Country\"":"Madagascar","\"Alpha-2code\"":"MG","alpha3":"MDG","\"Numericcode\"":"450","latit":"-20","longit":"47"},
  {"\"Country\"":"Malawi","\"Alpha-2code\"":"MW","alpha3":"MWI","\"Numericcode\"":"454","latit":"-13.5","longit":"34"},
  {"\"Country\"":"Malaysia","\"Alpha-2code\"":"MY","alpha3":"MYS","\"Numericcode\"":"458","latit":"2.5","longit":"112.5"},
  {"\"Country\"":"Maldives","\"Alpha-2code\"":"MV","alpha3":"MDV","\"Numericcode\"":"462","latit":"3.25","longit":"73"},
  {"\"Country\"":"Mali","\"Alpha-2code\"":"ML","alpha3":"MLI","\"Numericcode\"":"466","latit":"17","longit":"-4"},
  {"\"Country\"":"Malta","\"Alpha-2code\"":"MT","alpha3":"MLT","\"Numericcode\"":"470","latit":"35.8333","longit":"14.5833"},
  {"\"Country\"":"MarshallIslands","\"Alpha-2code\"":"MH","alpha3":"MHL","\"Numericcode\"":"584","latit":"9","longit":"168"},
  {"\"Country\"":"Martinique","\"Alpha-2code\"":"MQ","alpha3":"MTQ","\"Numericcode\"":"474","latit":"14.6667","longit":"-61"},
  {"\"Country\"":"Mauritania","\"Alpha-2code\"":"MR","alpha3":"MRT","\"Numericcode\"":"478","latit":"20","longit":"-12"},
  {"\"Country\"":"Mauritius","\"Alpha-2code\"":"MU","alpha3":"MUS","\"Numericcode\"":"480","latit":"-20.2833","longit":"57.55"},
  {"\"Country\"":"Mayotte","\"Alpha-2code\"":"YT","alpha3":"MYT","\"Numericcode\"":"175","latit":"-12.8333","longit":"45.1667"},
  {"\"Country\"":"Mexico","\"Alpha-2code\"":"MX","alpha3":"MEX","\"Numericcode\"":"484","latit":"23","longit":"-102"},
  {"\"Country\"":"Micronesia,FederatedStatesof","\"Alpha-2code\"":"FM","alpha3":"FSM","\"Numericcode\"":"583","latit":"6.9167","longit":"158.25"},
  {"\"Country\"":"Moldova,Republicof","\"Alpha-2code\"":"MD","alpha3":"MDA","\"Numericcode\"":"498","latit":"47","longit":"29"},
  {"\"Country\"":"Monaco","\"Alpha-2code\"":"MC","alpha3":"MCO","\"Numericcode\"":"492","latit":"43.7333","longit":"7.4"},
  {"\"Country\"":"Mongolia","\"Alpha-2code\"":"MN","alpha3":"MNG","\"Numericcode\"":"496","latit":"46","longit":"105"},
  {"\"Country\"":"Montenegro","\"Alpha-2code\"":"ME","alpha3":"MNE","\"Numericcode\"":"499","latit":"42","longit":"19"},
  {"\"Country\"":"Montserrat","\"Alpha-2code\"":"MS","alpha3":"MSR","\"Numericcode\"":"500","latit":"16.75","longit":"-62.2"},
  {"\"Country\"":"Morocco","\"Alpha-2code\"":"MA","alpha3":"MAR","\"Numericcode\"":"504","latit":"32","longit":"-5"},
  {"\"Country\"":"Mozambique","\"Alpha-2code\"":"MZ","alpha3":"MOZ","\"Numericcode\"":"508","latit":"-18.25","longit":"35"},
  {"\"Country\"":"Myanmar","\"Alpha-2code\"":"MM","alpha3":"MMR","\"Numericcode\"":"104","latit":"22","longit":"98"},
  {"\"Country\"":"Burma","\"Alpha-2code\"":"MM","alpha3":"MMR","\"Numericcode\"":"104","latit":"22","longit":"98"},
  {"\"Country\"":"Namibia","\"Alpha-2code\"":"NA","alpha3":"NAM","\"Numericcode\"":"516","latit":"-22","longit":"17"},
  {"\"Country\"":"Nauru","\"Alpha-2code\"":"NR","alpha3":"NRU","\"Numericcode\"":"520","latit":"-0.5333","longit":"166.9167"},
  {"\"Country\"":"Nepal","\"Alpha-2code\"":"NP","alpha3":"NPL","\"Numericcode\"":"524","latit":"28","longit":"84"},
  {"\"Country\"":"Netherlands","\"Alpha-2code\"":"NL","alpha3":"NLD","\"Numericcode\"":"528","latit":"52.5","longit":"5.75"},
  {"\"Country\"":"NetherlandsAntilles","\"Alpha-2code\"":"AN","alpha3":"ANT","\"Numericcode\"":"530","latit":"12.25","longit":"-68.75"},
  {"\"Country\"":"NewCaledonia","\"Alpha-2code\"":"NC","alpha3":"NCL","\"Numericcode\"":"540","latit":"-21.5","longit":"165.5"},
  {"\"Country\"":"NewZealand","\"Alpha-2code\"":"NZ","alpha3":"NZL","\"Numericcode\"":"554","latit":"-41","longit":"174"},
  {"\"Country\"":"Nicaragua","\"Alpha-2code\"":"NI","alpha3":"NIC","\"Numericcode\"":"558","latit":"13","longit":"-85"},
  {"\"Country\"":"Niger","\"Alpha-2code\"":"NE","alpha3":"NER","\"Numericcode\"":"562","latit":"16","longit":"8"},
  {"\"Country\"":"Nigeria","\"Alpha-2code\"":"NG","alpha3":"NGA","\"Numericcode\"":"566","latit":"10","longit":"8"},
  {"\"Country\"":"Niue","\"Alpha-2code\"":"NU","alpha3":"NIU","\"Numericcode\"":"570","latit":"-19.0333","longit":"-169.8667"},
  {"\"Country\"":"NorfolkIsland","\"Alpha-2code\"":"NF","alpha3":"NFK","\"Numericcode\"":"574","latit":"-29.0333","longit":"167.95"},
  {"\"Country\"":"NorthernMarianaIslands","\"Alpha-2code\"":"MP","alpha3":"MNP","\"Numericcode\"":"580","latit":"15.2","longit":"145.75"},
  {"\"Country\"":"Norway","\"Alpha-2code\"":"NO","alpha3":"NOR","\"Numericcode\"":"578","latit":"62","longit":"10"},
  {"\"Country\"":"Oman","\"Alpha-2code\"":"OM","alpha3":"OMN","\"Numericcode\"":"512","latit":"21","longit":"57"},
  {"\"Country\"":"Pakistan","\"Alpha-2code\"":"PK","alpha3":"PAK","\"Numericcode\"":"586","latit":"30","longit":"70"},
  {"\"Country\"":"Palau","\"Alpha-2code\"":"PW","alpha3":"PLW","\"Numericcode\"":"585","latit":"7.5","longit":"134.5"},
  {"\"Country\"":"PalestinianTerritory,Occupied","\"Alpha-2code\"":"PS","alpha3":"PSE","\"Numericcode\"":"275","latit":"32","longit":"35.25"},
  {"\"Country\"":"Panama","\"Alpha-2code\"":"PA","alpha3":"PAN","\"Numericcode\"":"591","latit":"9","longit":"-80"},
  {"\"Country\"":"PapuaNewGuinea","\"Alpha-2code\"":"PG","alpha3":"PNG","\"Numericcode\"":"598","latit":"-6","longit":"147"},
  {"\"Country\"":"Paraguay","\"Alpha-2code\"":"PY","alpha3":"PRY","\"Numericcode\"":"600","latit":"-23","longit":"-58"},
  {"\"Country\"":"Peru","\"Alpha-2code\"":"PE","alpha3":"PER","\"Numericcode\"":"604","latit":"-10","longit":"-76"},
  {"\"Country\"":"Philippines","\"Alpha-2code\"":"PH","alpha3":"PHL","\"Numericcode\"":"608","latit":"13","longit":"122"},
  {"\"Country\"":"Pitcairn","\"Alpha-2code\"":"PN","alpha3":"PCN","\"Numericcode\"":"612","latit":"-24.7","longit":"-127.4"},
  {"\"Country\"":"Poland","\"Alpha-2code\"":"PL","alpha3":"POL","\"Numericcode\"":"616","latit":"52","longit":"20"},
  {"\"Country\"":"Portugal","\"Alpha-2code\"":"PT","alpha3":"PRT","\"Numericcode\"":"620","latit":"39.5","longit":"-8"},
  {"\"Country\"":"PuertoRico","\"Alpha-2code\"":"PR","alpha3":"PRI","\"Numericcode\"":"630","latit":"18.25","longit":"-66.5"},
  {"\"Country\"":"Qatar","\"Alpha-2code\"":"QA","alpha3":"QAT","\"Numericcode\"":"634","latit":"25.5","longit":"51.25"},
  {"\"Country\"":"Réunion","\"Alpha-2code\"":"RE","alpha3":"REU","\"Numericcode\"":"638","latit":"-21.1","longit":"55.6"},
  {"\"Country\"":"Romania","\"Alpha-2code\"":"RO","alpha3":"ROU","\"Numericcode\"":"642","latit":"46","longit":"25"},
  {"\"Country\"":"RussianFederation","\"Alpha-2code\"":"RU","alpha3":"RUS","\"Numericcode\"":"643","latit":"60","longit":"100"},
  {"\"Country\"":"Russia","\"Alpha-2code\"":"RU","alpha3":"RUS","\"Numericcode\"":"643","latit":"60","longit":"100"},
  {"\"Country\"":"Rwanda","\"Alpha-2code\"":"RW","alpha3":"RWA","\"Numericcode\"":"646","latit":"-2","longit":"30"},
  {"\"Country\"":"SaintHelena,AscensionandTristandaCunha","\"Alpha-2code\"":"SH","alpha3":"SHN","\"Numericcode\"":"654","latit":"-15.9333","longit":"-5.7"},
  {"\"Country\"":"SaintKittsandNevis","\"Alpha-2code\"":"KN","alpha3":"KNA","\"Numericcode\"":"659","latit":"17.3333","longit":"-62.75"},
  {"\"Country\"":"SaintLucia","\"Alpha-2code\"":"LC","alpha3":"LCA","\"Numericcode\"":"662","latit":"13.8833","longit":"-61.1333"},
  {"\"Country\"":"SaintPierreandMiquelon","\"Alpha-2code\"":"PM","alpha3":"SPM","\"Numericcode\"":"666","latit":"46.8333","longit":"-56.3333"},
  {"\"Country\"":"SaintVincentandtheGrenadines","\"Alpha-2code\"":"VC","alpha3":"VCT","\"Numericcode\"":"670","latit":"13.25","longit":"-61.2"},
  {"\"Country\"":"SaintVincent&theGrenadines","\"Alpha-2code\"":"VC","alpha3":"VCT","\"Numericcode\"":"670","latit":"13.25","longit":"-61.2"},
  {"\"Country\"":"St.VincentandtheGrenadines","\"Alpha-2code\"":"VC","alpha3":"VCT","\"Numericcode\"":"670","latit":"13.25","longit":"-61.2"},
  {"\"Country\"":"Samoa","\"Alpha-2code\"":"WS","alpha3":"WSM","\"Numericcode\"":"882","latit":"-13.5833","longit":"-172.3333"},
  {"\"Country\"":"SanMarino","\"Alpha-2code\"":"SM","alpha3":"SMR","\"Numericcode\"":"674","latit":"43.7667","longit":"12.4167"},
  {"\"Country\"":"SaoTomeandPrincipe","\"Alpha-2code\"":"ST","alpha3":"STP","\"Numericcode\"":"678","latit":"1","longit":"7"},
  {"\"Country\"":"SaudiArabia","\"Alpha-2code\"":"SA","alpha3":"SAU","\"Numericcode\"":"682","latit":"25","longit":"45"},
  {"\"Country\"":"Senegal","\"Alpha-2code\"":"SN","alpha3":"SEN","\"Numericcode\"":"686","latit":"14","longit":"-14"},
  {"\"Country\"":"Serbia","\"Alpha-2code\"":"RS","alpha3":"SRB","\"Numericcode\"":"688","latit":"44","longit":"21"},
  {"\"Country\"":"Seychelles","\"Alpha-2code\"":"SC","alpha3":"SYC","\"Numericcode\"":"690","latit":"-4.5833","longit":"55.6667"},
  {"\"Country\"":"SierraLeone","\"Alpha-2code\"":"SL","alpha3":"SLE","\"Numericcode\"":"694","latit":"8.5","longit":"-11.5"},
  {"\"Country\"":"Singapore","\"Alpha-2code\"":"SG","alpha3":"SGP","\"Numericcode\"":"702","latit":"1.3667","longit":"103.8"},
  {"\"Country\"":"Slovakia","\"Alpha-2code\"":"SK","alpha3":"SVK","\"Numericcode\"":"703","latit":"48.6667","longit":"19.5"},
  {"\"Country\"":"Slovenia","\"Alpha-2code\"":"SI","alpha3":"SVN","\"Numericcode\"":"705","latit":"46","longit":"15"},
  {"\"Country\"":"SolomonIslands","\"Alpha-2code\"":"SB","alpha3":"SLB","\"Numericcode\"":"90","latit":"-8","longit":"159"},
  {"\"Country\"":"Somalia","\"Alpha-2code\"":"SO","alpha3":"SOM","\"Numericcode\"":"706","latit":"10","longit":"49"},
  {"\"Country\"":"SouthAfrica","\"Alpha-2code\"":"ZA","alpha3":"ZAF","\"Numericcode\"":"710","latit":"-29","longit":"24"},
  {"\"Country\"":"SouthGeorgiaandtheSouthSandwichIslands","\"Alpha-2code\"":"GS","alpha3":"SGS","\"Numericcode\"":"239","latit":"-54.5","longit":"-37"},
  {"\"Country\"":"Spain","\"Alpha-2code\"":"ES","alpha3":"ESP","\"Numericcode\"":"724","latit":"40","longit":"-4"},
  {"\"Country\"":"SriLanka","\"Alpha-2code\"":"LK","alpha3":"LKA","\"Numericcode\"":"144","latit":"7","longit":"81"},
  {"\"Country\"":"Sudan","\"Alpha-2code\"":"SD","alpha3":"SDN","\"Numericcode\"":"736","latit":"15","longit":"30"},
  {"\"Country\"":"Suriname","\"Alpha-2code\"":"SR","alpha3":"SUR","\"Numericcode\"":"740","latit":"4","longit":"-56"},
  {"\"Country\"":"SvalbardandJanMayen","\"Alpha-2code\"":"SJ","alpha3":"SJM","\"Numericcode\"":"744","latit":"78","longit":"20"},
  {"\"Country\"":"Swaziland","\"Alpha-2code\"":"SZ","alpha3":"SWZ","\"Numericcode\"":"748","latit":"-26.5","longit":"31.5"},
  {"\"Country\"":"Sweden","\"Alpha-2code\"":"SE","alpha3":"SWE","\"Numericcode\"":"752","latit":"62","longit":"15"},
  {"\"Country\"":"Switzerland","\"Alpha-2code\"":"CH","alpha3":"CHE","\"Numericcode\"":"756","latit":"47","longit":"8"},
  {"\"Country\"":"SyrianArabRepublic","\"Alpha-2code\"":"SY","alpha3":"SYR","\"Numericcode\"":"760","latit":"35","longit":"38"},
  {"\"Country\"":"Taiwan,ProvinceofChina","\"Alpha-2code\"":"TW","alpha3":"TWN","\"Numericcode\"":"158","latit":"23.5","longit":"121"},
  {"\"Country\"":"Taiwan","\"Alpha-2code\"":"TW","alpha3":"TWN","\"Numericcode\"":"158","latit":"23.5","longit":"121"},
  {"\"Country\"":"Tajikistan","\"Alpha-2code\"":"TJ","alpha3":"TJK","\"Numericcode\"":"762","latit":"39","longit":"71"},
  {"\"Country\"":"Tanzania,UnitedRepublicof","\"Alpha-2code\"":"TZ","alpha3":"TZA","\"Numericcode\"":"834","latit":"-6","longit":"35"},
  {"\"Country\"":"Thailand","\"Alpha-2code\"":"TH","alpha3":"THA","\"Numericcode\"":"764","latit":"15","longit":"100"},
  {"\"Country\"":"Timor-Leste","\"Alpha-2code\"":"TL","alpha3":"TLS","\"Numericcode\"":"626","latit":"-8.55","longit":"125.5167"},
  {"\"Country\"":"Togo","\"Alpha-2code\"":"TG","alpha3":"TGO","\"Numericcode\"":"768","latit":"8","longit":"1.1667"},
  {"\"Country\"":"Tokelau","\"Alpha-2code\"":"TK","alpha3":"TKL","\"Numericcode\"":"772","latit":"-9","longit":"-172"},
  {"\"Country\"":"Tonga","\"Alpha-2code\"":"TO","alpha3":"TON","\"Numericcode\"":"776","latit":"-20","longit":"-175"},
  {"\"Country\"":"TrinidadandTobago","\"Alpha-2code\"":"TT","alpha3":"TTO","\"Numericcode\"":"780","latit":"11","longit":"-61"},
  {"\"Country\"":"Trinidad&Tobago","\"Alpha-2code\"":"TT","alpha3":"TTO","\"Numericcode\"":"780","latit":"11","longit":"-61"},
  {"\"Country\"":"Tunisia","\"Alpha-2code\"":"TN","alpha3":"TUN","\"Numericcode\"":"788","latit":"34","longit":"9"},
  {"\"Country\"":"Turkey","\"Alpha-2code\"":"TR","alpha3":"TUR","\"Numericcode\"":"792","latit":"39","longit":"35"},
  {"\"Country\"":"Turkmenistan","\"Alpha-2code\"":"TM","alpha3":"TKM","\"Numericcode\"":"795","latit":"40","longit":"60"},
  {"\"Country\"":"TurksandCaicosIslands","\"Alpha-2code\"":"TC","alpha3":"TCA","\"Numericcode\"":"796","latit":"21.75","longit":"-71.5833"},
  {"\"Country\"":"Tuvalu","\"Alpha-2code\"":"TV","alpha3":"TUV","\"Numericcode\"":"798","latit":"-8","longit":"178"},
  {"\"Country\"":"Uganda","\"Alpha-2code\"":"UG","alpha3":"UGA","\"Numericcode\"":"800","latit":"1","longit":"32"},
  {"\"Country\"":"Ukraine","\"Alpha-2code\"":"UA","alpha3":"UKR","\"Numericcode\"":"804","latit":"49","longit":"32"},
  {"\"Country\"":"UnitedArabEmirates","\"Alpha-2code\"":"AE","alpha3":"ARE","\"Numericcode\"":"784","latit":"24","longit":"54"},
  {"\"Country\"":"UnitedKingdom","\"Alpha-2code\"":"GB","alpha3":"GBR","\"Numericcode\"":"826","latit":"54","longit":"-2"},
  {"\"Country\"":"UnitedStates","\"Alpha-2code\"":"US","alpha3":"USA","\"Numericcode\"":"840","latit":"38","longit":"-97"},
  {"\"Country\"":"UnitedStatesMinorOutlyingIslands","\"Alpha-2code\"":"UM","alpha3":"UMI","\"Numericcode\"":"581","latit":"19.2833","longit":"166.6"},
  {"\"Country\"":"Uruguay","\"Alpha-2code\"":"UY","alpha3":"URY","\"Numericcode\"":"858","latit":"-33","longit":"-56"},
  {"\"Country\"":"Uzbekistan","\"Alpha-2code\"":"UZ","alpha3":"UZB","\"Numericcode\"":"860","latit":"41","longit":"64"},
  {"\"Country\"":"Vanuatu","\"Alpha-2code\"":"VU","alpha3":"VUT","\"Numericcode\"":"548","latit":"-16","longit":"167"},
  {"\"Country\"":"Venezuela,BolivarianRepublicof","\"Alpha-2code\"":"VE","alpha3":"VEN","\"Numericcode\"":"862","latit":"8","longit":"-66"},
  {"\"Country\"":"Venezuela","\"Alpha-2code\"":"VE","alpha3":"VEN","\"Numericcode\"":"862","latit":"8","longit":"-66"},
  {"\"Country\"":"VietNam","\"Alpha-2code\"":"VN","alpha3":"VNM","\"Numericcode\"":"704","latit":"16","longit":"106"},
  {"\"Country\"":"Vietnam","\"Alpha-2code\"":"VN","alpha3":"VNM","\"Numericcode\"":"704","latit":"16","longit":"106"},
  {"\"Country\"":"VirginIslands,British","\"Alpha-2code\"":"VG","alpha3":"VGB","\"Numericcode\"":"92","latit":"18.5","longit":"-64.5"},
  {"\"Country\"":"VirginIslands,U.S.","\"Alpha-2code\"":"VI","alpha3":"VIR","\"Numericcode\"":"850","latit":"18.3333","longit":"-64.8333"},
  {"\"Country\"":"WallisandFutuna","\"Alpha-2code\"":"WF","alpha3":"WLF","\"Numericcode\"":"876","latit":"-13.3","longit":"-176.2"},
  {"\"Country\"":"WesternSahara","\"Alpha-2code\"":"EH","alpha3":"ESH","\"Numericcode\"":"732","latit":"24.5","longit":"-13"},
  {"\"Country\"":"Yemen","\"Alpha-2code\"":"YE","alpha3":"YEM","\"Numericcode\"":"887","latit":"15","longit":"48"},
  {"\"Country\"":"Zambia","\"Alpha-2code\"":"ZM","alpha3":"ZMB","\"Numericcode\"":"894","latit":"-15","longit":"30"},
  {"\"Country\"":"Zimbabwe","\"Alpha-2code\"":"ZW","alpha3":"ZWE","\"Numericcode\"":"716","latit":"-20","longit":"30"}
]

export default MapChart;
