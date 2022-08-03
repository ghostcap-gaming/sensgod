

function senseConverter() {
  
  
  
  
  var from_game = document.getElementById("from_games").value;
  var to_game = document.getElementById("to_games").value;
  var from_dpi = document.getElementById("input_DPI").value;
  var to_dpi = document.getElementById("output_DPI").value;
  var from_sense = document.getElementById("input_sense").value;


  if (from_game != "CSGO"){
    toCSGO(from_game,to_game,from_sense,from_dpi,to_dpi);
  	
  } else {
    fromCSGO(to_game,from_sense,from_dpi,to_dpi);
  }
  
}


function toCSGO(from_game,to_game,sense,frm_dpi,to_dpi) {
  var sensitivity = parseFloat(sense);
  var fromDPI = parseFloat(frm_dpi);
  var toDPI = parseFloat(to_dpi);
  var output_sense;
  var inches;
  var centimeters;
  switch (from_game) {
    case "APEX_LEGENDS":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*sensitivity;
          
        } else {
          output_sense = sensitivity / (toDPI / fromDPI);
        }
        break;

    case "AIM_LAB":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*(sensitivity*2.2727);
          
        } else {
          output_sense = (sensitivity*2.2727) / (toDPI / fromDPI);
        }
        break;

      case "ARK_SURVIVAL_EVOLVE":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*(sensitivity*7.9537);
          
        } else {
          output_sense = (sensitivity*7.9537) / (toDPI / fromDPI);
        }
        break;

      case "BACK_4_BLOOD":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*(sensitivity*0.1061);
          
        } else {
          output_sense = (sensitivity*0.1061) / (toDPI / fromDPI);
        }
        break;

      case "BATTLEFIELD_1":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*0.156)+0.677);
          
        } else {
          output_sense = (((sensitivity-1)*0.156)+0.677)*(fromDPI/toDPI);
        }
        break;

      case "BATTLEFIELD_4":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*0.156)+0.677);
          
        } else {
          output_sense = (((sensitivity-1)*0.156)+0.677)*(fromDPI/toDPI);
        }
        break;

      case "BATTLEFIELD_v":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*0.156)+0.677);
          
        } else {
          output_sense = (((sensitivity-1)*0.156)+0.677)*(fromDPI/toDPI);
        }
        break;

      case "BATTLEFIELD_2042":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*0.079)+0.6);
          
        } else {
          output_sense = (((sensitivity-1)*0.079)+0.6)*(fromDPI/toDPI);
        }
        break;

      case "BLOODSQUAD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.2497) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.2497) / (toDPI/fromDPI);
        }
        break;

      case "BLOODHUNT":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.0027) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.0027) / (toDPI/fromDPI);
        }
        break;

      case "BORDERLAND_3":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.333) / (toDPI/fromDPI);
        }
        break;

      case "COD_BLACK_OPS_4":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "COD_BLACK_OPS_COLDWAR":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "COD_MORDERN_WARFARE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "COD_VANGUARDE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "COD_WARZONE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "DESTINY_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "OVERWATCH":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3) / (toDPI/fromDPI);
        }
        break;

      case "CS_1_6":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "CSS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "CSGO":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "DOOM_ETERNAL":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "GARRY_MOD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "HALF_LIFE_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "LEFT_4_DEAD_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "QUAKE_CHAMPIONS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "TEAM_FORTRESS_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "TITAN_FALL_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "CYBERPUNK_2077":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.4545) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.4545) / (toDPI/fromDPI);
        }
        break;

      case "DAYZ":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*8.1169) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*8.1169) / (toDPI/fromDPI);
        }
        break;

      case "DYING_LIGHT_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3788) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3788) / (toDPI/fromDPI);
        }
        break;

      case "ESCAPE_FROM_TARKOV":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*5.6818) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*5.6818) / (toDPI/fromDPI);
        }
        break;

      case "FALLOUT_4":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*171.8148) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*171.8148) / (toDPI/fromDPI);
        }
        break;

      case "FALLOUT_76":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*171.8148) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*171.8148) / (toDPI/fromDPI);
        }
        break;

      case "FAR_CRY_5":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.1295) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.1295) / (toDPI/fromDPI);
        }
        break;

      case "FORTNITE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.2525) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.2525) / (toDPI/fromDPI);
        }
        break;

      case "HALO_INFINITE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*1.0227) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*1.0227) / (toDPI/fromDPI);
        }
        break;

      case "HALO_REACH":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*1.0227) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*1.0227) / (toDPI/fromDPI);
        }
        break;

      case "HEROES_GENERALS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*6.8755) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*6.8755) / (toDPI/fromDPI);
        }
        break;

      case "HUNT_SHOWDOWN":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*1.9533) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*1.9533) / (toDPI/fromDPI);
        }
        break;

      case "HYPERSPACE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.2604) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.2604) / (toDPI/fromDPI);
        }
        break;

      case "INSURGENCY_SANDSTORM":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*6.3636) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*6.3636) / (toDPI/fromDPI);
        }
        break;

      case "NEW_WORLD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*45.4546) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*45.4546) / (toDPI/fromDPI);
        }
        break;

      case "OSU":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.6182) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.6182) / (toDPI/fromDPI);
        }
        break;

      case "PALADINS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.4161) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.4161) / (toDPI/fromDPI);
        }
        break;

      case "PAYDAY_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.6818) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.6818) / (toDPI/fromDPI);
        }
        break;

      case "RAINBOW_SIX_EXTRACTION":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.2604) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.2604) / (toDPI/fromDPI);
        }
        break;

      case "RAINBOW_SIX_SEIGE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.2604) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.2604) / (toDPI/fromDPI);
        }
        break;

      case "ROBLOX":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*18.0862) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*18.0862) / (toDPI/fromDPI);
        }
        break;

      case "RUST":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*5.1136) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*5.1136) / (toDPI/fromDPI);
        }
        break;

      case "SPELLBREAK":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3636) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3636) / (toDPI/fromDPI);
        }
        break;

      case "SPLITGATE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.4261) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.4261) / (toDPI/fromDPI);
        }
        break;

      case "SQUAD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*7.9537) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*7.9537) / (toDPI/fromDPI);
        }
        break;

      case "UNTURNED":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*4.5455) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*4.5455) / (toDPI/fromDPI);
        }
        break;

      case "VALHEIM":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*2.2727) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*2.2727) / (toDPI/fromDPI);
        }
        break;

      case "VALORANT":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.1818) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.1818) / (toDPI/fromDPI);
        }
        break;

      case "WARFACE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.1514) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.1514) / (toDPI/fromDPI);
        }
        break;
  }

  fromCSGO(to_game,output_sense*(toDPI / fromDPI),fromDPI,toDPI);
}


function fromCSGO(to_game,sense,frm_dpi,to_dpi) {

  var sensitivity = parseFloat(sense);
  var fromDPI = parseFloat(frm_dpi);
  var toDPI = parseFloat(to_dpi);
  var output_sense;
  var inches;
  var centimeters;
  switch (to_game) {
      case "APEX_LEGENDS":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*sensitivity;
          
        } else {
          output_sense = sensitivity / (toDPI / fromDPI);
        }
        break;

      case "AIM_LAB":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*(sensitivity*0.44);
          
        } else {
          output_sense = (sensitivity*0.44) / (toDPI / fromDPI);
        }
        break;

      case "ARK_SURVIVAL_EVOLVE":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*(sensitivity*0.126);
          
        } else {
          output_sense = (sensitivity*0.126) / (toDPI / fromDPI);
        }
        break;

      case "BACK_4_BLOOD":
        if (fromDPI > toDPI) {
          output_sense = (fromDPI / toDPI)*(sensitivity*9.43);
          
        } else {
          output_sense = (sensitivity*9.43) / (toDPI / fromDPI);
        }
        break;

      case "BATTLEFIELD_1":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*6.399541)+3.0622207);
          
        } else {
          output_sense = (((sensitivity-1)*6.399541)+3.0622207)*(fromDPI/toDPI);
        }
        break;

      case "BATTLEFIELD_4":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*6.399541)+3.0622207);
          
        } else {
          output_sense = (((sensitivity-1)*6.399541)+3.0622207)*(fromDPI/toDPI);
        }
        break;

      case "BATTLEFIELD_v":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*6.399541)+3.0622207);
          
        } else {
          output_sense = (((sensitivity-1)*6.399541)+3.0622207)*(fromDPI/toDPI);
        }
        break;

      case "BATTLEFIELD_2042":
        if (fromDPI == toDPI) {
          output_sense = (((sensitivity-1)*12.799082)+6.132414);
          
        } else {
          output_sense = (((sensitivity-1)*12.799082)+6.132414)*(fromDPI/toDPI);
        }
        break;

      case "BLOODSQUAD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*4.005) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*4.005) / (toDPI/fromDPI);
        }
        break;

      case "BLOODHUNT":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.333) / (toDPI/fromDPI);
        }
        break;

      case "BORDERLAND_3":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "COD_BLACK_OPS_4":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "COD_BLACK_OPS_COLDWAR":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "COD_MORDERN_WARFARE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "COD_VANGUARDE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "COD_WARZONE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "DESTINY_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "OVERWATCH":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.333) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.333) / (toDPI/fromDPI);
        }
        break;

      case "CS_1_6":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "CSS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "CSGO":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "DOOM_ETERNAL":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "GARRY_MOD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "HALF_LIFE_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "LEFT_4_DEAD_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "QUAKE_CHAMPIONS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "TEAM_FORTRESS_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "TITAN_FALL_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity) / (toDPI/fromDPI);
        }
        break;

      case "CYBERPUNK_2077":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*2.2) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*2.2) / (toDPI/fromDPI);
        }
        break;

      case "DAYZ":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.123) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.123) / (toDPI/fromDPI);
        }
        break;

      case "DYING_LIGHT_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*2.64) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*2.64) / (toDPI/fromDPI);
        }
        break;

      case "ESCAPE_FROM_TARKOV":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.176) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.176) / (toDPI/fromDPI);
        }
        break;

      case "FALLOUT_4":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.0058) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.0058) / (toDPI/fromDPI);
        }
        break;

      case "FALLOUT_76":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.0058) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.0058) / (toDPI/fromDPI);
        }
        break;

      case "FAR_CRY_5":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*7.722) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*7.722) / (toDPI/fromDPI);
        }
        break;

      case "FORTNITE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.9604) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.9604) / (toDPI/fromDPI);
        }
        break;

      case "HALO_INFINITE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.9778) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.9778) / (toDPI/fromDPI);
        }
        break;

      case "HALO_REACH":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.9778) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.9778) / (toDPI/fromDPI);
        }
        break;

      case "HEROES_GENERALS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.1454) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.1454) / (toDPI/fromDPI);
        }
        break;

      case "HUNT_SHOWDOWN":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.512) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.512) / (toDPI/fromDPI);
        }
        break;

      case "HYPERSPACE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.84) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.84) / (toDPI/fromDPI);
        }
        break;

      case "INSURGENCY_SANDSTORM":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.1571) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.1571) / (toDPI/fromDPI);
        }
        break;

      case "NEW_WORLD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.022) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.022) / (toDPI/fromDPI);
        }
        break;

      case "OSU":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.2764) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.2764) / (toDPI/fromDPI);
        }
        break;

      case "PALADINS":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*2.403) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*2.403) / (toDPI/fromDPI);
        }
        break;

      case "PAYDAY_2":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*1.4667) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*1.4667) / (toDPI/fromDPI);
        }
        break;

      case "RAINBOW_SIX_EXTRACTION":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.8397) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.8397) / (toDPI/fromDPI);
        }
        break;

      case "RAINBOW_SIX_SEIGE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*3.8397) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*3.8397) / (toDPI/fromDPI);
        }
        break;

      case "ROBLOX":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.0553) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.0553) / (toDPI/fromDPI);
        }
        break;

      case "RUST":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.1956) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.1956) / (toDPI/fromDPI);
        }
        break;

      case "SPELLBREAK":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*2.75) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*2.75) / (toDPI/fromDPI);
        }
        break;

      case "SPLITGATE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*2.3469) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*2.3469) / (toDPI/fromDPI);
        }
        break;

      case "SQUAD":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.1257) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.1257) / (toDPI/fromDPI);
        }
        break;

      case "UNTURNED":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.22) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.22) / (toDPI/fromDPI);
        }
        break;

      case "VALHEIM":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.44) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.44) / (toDPI/fromDPI);
        }
        break;

      case "VALORANT":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*0.3143) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*0.3143) / (toDPI/fromDPI);
        }
        break;

      case "WARFACE":
        if (fromDPI > toDPI) {
          output_sense = (sensitivity*6.6066) * (fromDPI/toDPI);
          
        } else {
          output_sense = (sensitivity*6.6066) / (toDPI/fromDPI);
        }
        break;

    }


  inches = 16363.64 / (sensitivity * fromDPI);
  centimeters = 41563.65 / (sensitivity * fromDPI);

  document.getElementById("output_sense").value = output_sense.toFixed(2);
  document.getElementById("In360").innerHTML = inches.toFixed(2);
  document.getElementById("Cm360").innerHTML = centimeters.toFixed(2);
}
