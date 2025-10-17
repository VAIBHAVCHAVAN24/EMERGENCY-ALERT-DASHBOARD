
 let map, markers=[], active=0, resolved=0, alerts=[];
    const college="Dr J J Magdum College of Engineering, Jaysingpur";

    function initMap(){
      map=new google.maps.Map(document.getElementById("map"),{
        zoom:15,
        center:{lat:16.7768,lng:74.5559},
        styles:[
          {elementType:"geometry",stylers:[{color:"#1e293b"}]},
          {elementType:"labels.text.stroke",stylers:[{color:"#1e293b"}]},
          {elementType:"labels.text.fill",stylers:[{color:"#f1f5f9"}]},
          {featureType:"poi.park",elementType:"geometry",stylers:[{color:"#172338"}]},
          {featureType:"water",stylers:[{color:"#0a192f"}]}
        ]
      });
      new google.maps.Marker({
        map,
        position:{lat:16.7768,lng:74.5559},
        title:college,
        icon:{
          path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          scale:5,
          fillColor:"#ff6b6b",
          fillOpacity:1,
          strokeWeight:1
        }
      });
    }
    window.onload=initMap;

    function updateStats(){
      document.getElementById('active').innerText=active;
      document.getElementById('resolved').innerText=resolved;
      document.getElementById('last').innerText=alerts[0]?new Date(alerts[0].time).toLocaleTimeString():"—";
    }

    function rebuildTable(){
      const tb=document.getElementById('alertBody'); tb.innerHTML="";
      if(!alerts.length){
        tb.innerHTML='<tr><td colspan="5">No alerts yet</td></tr>'; return;
      }
      alerts.forEach((a,i)=>{
        tb.innerHTML+=`<tr>
          <td>${i+1}</td>
          <td>${a.id}</td>
          <td>${new Date(a.time).toLocaleTimeString()}</td>
          <td>${a.status}</td>
          <td>${a.status==='Active'
            ?'<button class="btn-resolve" onclick="resolveAlert('+i+')">Resolve</button>'
            :'—'}</td>
        </tr>`;
      });
    }


    // ⚠️ Replace this manual trigger with real ESP endpoint data after hardware setup

    
    function triggerAlert(){
      const lat=16.7768+(Math.random()-0.5)/500;
      const lng=74.5559+(Math.random()-0.5)/500;
      const id="ESP"+Math.floor(Math.random()*900+100);
      const alert={id,lat,lng,time:Date.now(),status:"Active"};
      alerts.unshift(alert); active++; updateStats(); rebuildTable();
      const marker=new google.maps.Marker({
        position:{lat,lng},
        map,
        title:id,
        animation:google.maps.Animation.DROP
      });
      markers.unshift(marker);
      map.panTo({lat,lng});
    }

    function resolveAlert(i){
      if(alerts[i].status==="Resolved") return;
      alerts[i].status="Resolved"; active--; resolved++;
      updateStats(); rebuildTable();
      markers[i].setIcon({
        path:google.maps.SymbolPath.CIRCLE,
        scale:6,
        fillColor:"#27ae60",
        fillOpacity:1,
        strokeWeight:1
      });
    }

    document.getElementById('triggerBtn').onclick=triggerAlert;
