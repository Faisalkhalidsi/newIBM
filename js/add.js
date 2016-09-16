var map, layer;
var tampungKode1, tampungKode2, tampungKode3;
var infoWindow = new google.maps.InfoWindow();


// fungsi initialize untuk meload peta saat aplikasi pertama kali dijalankan

function initialize() 
{
    google.maps.visualRefresh = true;
    
    var mapOptions = 
    {
        center: new google.maps.LatLng(-6.39422921,106.81668181),
        zoom: 12,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById("map-container"),
            mapOptions);

    $.ajax({
        type: 'GET',
        url: 'php/data.php',
        dataType: 'json',
        success: function (data) {
            //data dibagi 3
            var kel1, kel2, kel3;
            var min = "";
            var med = "";
            var max = "";
            var jumlah,kode;
            
            
            for (var i = 0; i < data.kecamatan.length; i++)
            {
                
                jumlah = data.kecamatan[i].kejadian;
                mati = data.kecamatan[i].kematian;
                
                kode = data.kecamatan[i].kode;

                //new calculation
                if(jumlah > 0){
                    if(mati > 0){
                        max += kode + ",";
                    }else{
                        med += kode + ",";
                    }
                }else{
                    min += kode + ",";
                }
                
                /*
                if (jumlah <= 10 )
                {
                    min += kode + ",";
                } else 
                if (jumlah > 10 && jumlah < 25)
                {
                    med += kode + ",";
                } else
                {
                    max += kode + ",";
                }*/
            }      
            
            fusiontablelayer(min, med, max);
        }
    });
    
    var homeControlDiv = document.createElement('div');
    var homeControls = new legenda(homeControlDiv, map);
    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(homeControlDiv);
}


//fungsi untuk meload fushion tabel dan mewarnai sesuai dengan jumlah data


function fusiontablelayer(kode1, kode2, kode3)
{
	if (kode1=="")
	{
		kode1=0;
	}else{
		kode1 = removeLastString(kode1);
	}
	
	if (kode2=="")
	{
		kode2=0;
	}else{
		kode2 = removeLastString(kode2);
	}
	
	if (kode3=="")
	{
		kode3=0;
	}else{
		kode3 = removeLastString(kode3);
	}

    tampungKode1 = kode1;
    tampungKode2 = kode2;
    tampungKode3 = kode3;
    
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '12gREV-gw2vz3BI5InIkFjXNdqzOUIx6lWoL9jnjl',
        },
        options: {
            suppressInfoWindows: true
        },
        styles: [{
                where: 'id_kec IN (' + kode1 + ')',
                polygonOptions: {
                    fillColor: '#00FF00'
                }
            }, {
                where: 'id_kec IN (' + kode2 + ')',
                polygonOptions: {
                    fillColor: '#FFFF00'
                }
            }, {
                where: 'id_kec IN (' + kode3 + ')',
                polygonOptions: {
                    fillColor: '#d20000'
                }
            }]
    });
    
    layer.setMap(map);
    google.maps.event.addListener(layer, 'click', function (e) {
        //console.log(e);
        showData(e);
    });
}


//Fungsi untuk menghapus koma dibelakang
function removeLastString(kode)
{
    kode = kode.substring(0, kode.length - 1) + '';
    return kode;
}

//Fungsi untuk buat nambahin legenda		
function legenda(controlDiv, map) 
	{
    controlDiv.style.backgroundColor = 'white';
    controlDiv.title = 'Legenda';
    var isi1 = "<table class=\"table table-condensed\"><th><td>Legenda</td></th>";
    var isi2 = "<tr><td style=\"background-color:#00FF00\">&nbsp;&nbsp;&nbsp;</td><td>Aman</td></tr>";
    var isi3 = "<tr><td style=\"background-color:#FFFF00\">  </td><td>Non KLB</td></tr>";
    var isi4 = "<tr><td style=\"background-color:#FF0000\">  </td><td>KLB</td></tr>";
    var isi5 = "</table>";
    controlDiv.innerHTML = isi1 + isi2 + isi3 + isi4 + isi5;
	}

//Fungsi untuk mewarnai peta per kecamatan
function layerByKecamatan(kodeWilayah)
	{
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '12gREV-gw2vz3BI5InIkFjXNdqzOUIx6lWoL9jnjl',
            where: 'kode IN (' + kodeWilayah + ')', //id_kec adalah id di fushion table
        },
        options: {
            suppressInfoWindows: true
        },
        
        styles: [{
                where: 'kode IN (' + tampungKode1 + ')',
                polygonOptions: {
                    fillColor: '#00FF00'
                }
            }, {
                where: 'kode IN (' + tampungKode2 + ')',
                polygonOptions: {
                    fillColor: '#FFFF00'
                }
            }, {
                where: 'kode IN (' + tampungKode3 + ')',
                polygonOptions: {
                    fillColor: '#FF0000'
                }
            }],
    });

    layer.setMap(map);
    google.maps.event.addListener(layer, 'click', function (e){showData(e)});
    //map.setCenter(new google.maps.LatLng(-6.397297, 106.800462));
    //map.setZoom(13);
	}


//menampilkan data rinci ketika di klik pada peta tingkat kecamatan
function showData(e)
{
    
    var kodeBPS = e.row['id_kec'].value;
    var location = e.latLng;

    $.ajax({
        url: 'php/fetch.php',
        type: "POST",
        data: ({kode: kodeBPS}),
        success: function (data) {
            var isi = "";
            var json = $.parseJSON(data);

isi += "<div class='modal-dialog'> <div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'><h2><b>Informasi Rinci</b></h2></h4></div><div class='modal-body'>";
            
isi += "<table><tr><td><b>Kecamatan </b></td><td>: " + json.kecamatan[0].kecamatan + "</br></td></tr>";

isi += "<tr><td><b>Angka Kejadian  </b></td><td>: " + json.kecamatan[0].kejadian + "Jiwa</br></td></tr>";

isi += "<tr><td><b>Angka Kematian </b></td><td>: " + json.kecamatan[0].kematian + " Jiwa </br></td></tr>";

isi += "<tr><td><b>Jumlah Penduduk </b></td><td>: " + json.kecamatan[0].jumlah + " Jiwa</br></td></tr></table>";

isi += "</div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div>";

            $("#myModal").html(isi);
            $('#myModal').modal('toggle')

//                    infoWindow.setContent("<b>" + data.provinsi[i].provinsi + "</b>");
//                    infoWindow.setPosition(location);
//                    infoWindow.open(map);
        }
    });
} //akhir dari menampilkan kecamatan

//fungsi menampilkan peta kecamatan tertentu sesuai dengan pilihan
$(document).ready(function () {
    $('input[name="kecamatan"]').on('change', function () {
        layer.setMap(null);
        var value 		= $(this).val();
        var cinere 		= "1";
        var limo		= "2"; //id kec
        var beji 		= "3";
        var pancoran 	= "4";
        var cipayung	= "5";
        var sawangan 	= "6";
        var bojongsari 	= "7";
        var cilodong 	= "8";
        var tapos 		= "9";
        var cimanggis 	= "10";
        var sukmajaya 	= "11";
        switch (value)
        {
            case "Cinere":
                layerByKelurahan (cinere);
                break;
            case "Limo":
                layerByKelurahan(limo);
                break;
            case "Beji":
                layerByKelurahan(beji);
                break;
            case "Pancoran":
                layerByKelurahan(pancoran);
                break;
            case "Cipayung":
                layerByKelurahan(cipayung);
                break;
            case "Sawangan":
                layerByKelurahan(sawangan);
                break;
            case "Bojongsari":
                layerByKelurahan(bojongsari);
                break;
            case "Cilodong":
                layerByKelurahan(cilodong);
                break;
            case "Tapos":
                layerByKKelurahan(tapos);
                break;
            case "Cimanggis":
                layerByKelurahan(cimanggis);
                break;
            case "Sukmajaya":
                layerByKelurahan(sukmajaya);
                break;                
            default:
        }
    });

    $('#tipe_data').on('change', function () {
        var data = $('#tipe_data').val();
        var kml;
        
        if(data == "beji"){
        	kml = "sadsadsadasdasda";
        	
			
		}else if(data == "non beji"){
			kml = "sadsadsadasdasda";
			
		}
		
		layerByKecamatan(kode,kml);
    });
	
//Fungsi untuk mewarnai peta per kelurahan
function layerByKelurahan(kodeWilayah,kml)
	{
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1eGDDF1ug4s7pBaQ758Ty_Ek19Nv6ILTxTexStxii',
            where: 'id_kec IN (' + kodeWilayah + ')', //id_kec adalah id di fushion table
        },
        options: {
            suppressInfoWindows: true
        },
        
        styles: [{
                where: 'id_kec IN (' + tampungKode1 + ')',
                polygonOptions: {
                    fillColor: '#00FF00'
                }
            }, {
                where: 'id_kec IN (' + tampungKode2 + ')',
                polygonOptions: {
                    fillColor: '#FFFF00'
                }
            }, {
                where: 'id_kec IN (' + tampungKode3 + ')',
                polygonOptions: {
                    fillColor: '#FF0000'
                }
            }],
    });

    layer.setMap(map);
    google.maps.event.addListener(layer, 'click',function (e){ showDataKelurahan(e) });
    //map.setCenter(new google.maps.LatLng(-6.397297, 106.800462));
    //map.setZoom(13);
	}
});
