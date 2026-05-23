window.showPage = function(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
};

// Création de la carte
const initialCenter = [47.8, 13.8];
const initialZoom = 4;
const map = L.map('map').setView(initialCenter, initialZoom);


// Fond de carte OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Marqueur
const franceAnjouMarker = L.marker([47.47,-0.55])
    .addTo(map)
    .bindPopup(`
      <div style="gap:10px; width:270px;">
        <div>
          <div class="premligne">
            <div style="display:flex; flex-direction:row; align-items:flex-start;">
              
              <img src="https://tse4.mm.bing.net/th/id/OIP.BER4vYgAaItdmAOt2M-dcQHaFA?rs=1&pid=ImgDetMain&o=7&rm=3"
                   style="width:100px; height:100px; object-fit:cover; border-radius:8px;">

              <div style="display:flex; flex-direction:column; align-items:flex-start;">         
                
                <h3 style="margin:5px;">Camomille Romaine</h3>
                <p style="margin:5px; font-size:12px; line-height:1.4;">
                  🌼 La Camomille Romaine est souvent utilisée pour favoriser 
                  le sommeil et apaiser les peaux sensibles.
                </p>
              </div>
            </div>
          </div>  
          <div>
            <p style="margin:5px 0; font-size:12px;">
              📍 Lieu : Anjou, France
            </p>
            <p style="margin:5px; font-size:12px;">
              🏭 Fournisseur : Py'still
            </p>
          </div>
        </div>
      </div>
    `);
franceAnjouMarker.on('click', function () {
    map.flyTo([46.603354, 1.888334], 5);
});

const franceQuercyMarker = L.marker([44.4,1.54])
    .addTo(map)
    .bindPopup(`
      <div style="gap:10px; width:270px;">
        <div>
          <div class="premligne">
            <div style="display:flex; flex-direction:row; align-items:flex-start;">
              <img src="https://www.fermedelours.fr/wp-content/uploads/2021/03/lavande-fine-min.png"
                   style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
              <div style="display:flex; flex-direction:column; align-items:flex-start;">         
                <h3 style="margin:5px;">Lavande Fine</h3>
                <p style="margin:5px; font-size:12px; line-height:1.4;">
                  🌿 La Lavande Fine est utilisée pour réduire le stress, 
                  favoriser le sommeil et parfumer les soins.
                </p>
              </div>
            </div>
          </div>  
          <div>
            <p style="margin:5px 0; font-size:12px;">
              📍 Lieu : Quercy, France
            </p>
            <p style="margin:5px; font-size:12px;">
              🏭 Fournisseur : Py'still
            </p>
          </div>
        </div>
      </div>
    `);
franceQuercyMarker.on('click', function () {
    map.flyTo([46.603354, 1.888334], 5);
});

const franceOccitanieMarker = L.marker([43.6,3.88])
    .addTo(map)
    .bindPopup(`
      <div style="gap:10px; width:270px;">
        <div>
          <div class="premligne">
            <div style="display:flex; flex-direction:row; align-items:flex-start;">         
              <img src="https://tse3.mm.bing.net/th/id/OIP.J8P9wvHJQzL0xojkP8c0eQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                   style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
              <div style="display:flex; flex-direction:column; align-items:flex-start;">                   
                <h3 style="margin:5px;">Menthe Poivrée</h3>
                <p style="margin:5px; font-size:12px; line-height:1.4;">
                  🌿 La Menthe Poivrée est souvent utilisée pour soulager les maux de tête 
                  et favoriser la concentration.
                </p>
              </div>
            </div>
          </div>  
          <div>
            <p style="margin:5px 0; font-size:12px;">
              📍 Lieu : Occitanie, France
            </p>
            <p style="margin:5px; font-size:12px;">
              🏭 Fournisseur : Py'still
            </p>
          </div>
        </div>
      </div>
`);
franceOccitanieMarker.on('click', function () {
    map.flyTo([46.603354, 1.888334], 5);
});

const franceHautesPyreneesMarker = L.marker([43.09,0.11])
    .addTo(map)
    .bindPopup(`
      <div style="gap:10px; width:270px;">
        <div>
          <div class="premligne">
            <div style="display:flex; flex-direction:row; align-items:flex-start;">             
              <img src="https://www.rustica.fr/images/shutterstock-198891434.jpg"
                   style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
              <div style="display:flex; flex-direction:column; align-items:flex-start;">                        
                <h3 style="margin:5px;">Carotte</h3>
                <p style="margin:5px; font-size:12px; line-height:1.4;">
                  🥕 L’huile essentielle de Carotte est souvent utilisée 
                  dans les soins de la peau pour redonner éclat et vitalité.
                </p>
              </div>
            </div>
          </div>  
          <div>
            <p style="margin:5px 0; font-size:12px;">
              📍 Lieu : Hautes-Pyrénées, France
            </p>
            <p style="margin:5px; font-size:12px;">
              🏭 Fournisseur : Py'still
            </p>
          </div>
        </div>
      </div>
    `);
franceHautesPyreneesMarker.on('click', function () {
    map.flyTo([46.603354, 1.888334], 5);
});
const franceSudOuestMarker = L.marker([44.50,-0.57])
    .addTo(map)
    .bindPopup(`
      <div style="gap:10px; width:270px;">
        <div>
          <div class="premligne">
            <div style="display:flex; flex-direction:row; align-items:flex-start;">         
              <img src="https://th.bing.com/th/id/R.dad3def06c97a876d25842cb6ad50b22?rik=n8hbUfmKV9UOTQ&pid=ImgRaw&r=0"
                   style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
              <div style="display:flex; flex-direction:column; align-items:flex-start;">                     
                <h3 style="margin:5px;">Huile essentielle d'Immortelle</h3>
                <p style="margin:5px; font-size:12px; line-height:1.4;">
                  🌼 L’Immortelle est très appréciée dans les soins anti-âge 
                  et pour aider à atténuer les marques et rougeurs de la peau.
                </p>
              </div>
            </div>
          </div>  
          <div>
            <p style="margin:5px 0; font-size:12px;">
              📍 Lieu : Sud-Ouest, France
            </p>
            <p style="margin:5px; font-size:12px;">
              🏭 Fournisseur : Py'still
            </p>
          </div>
        </div>
      </div>
    `);
franceSudOuestMarker.on('click', function () {
    map.flyTo([46.603354, 1.888334], 5);
});

const ItalieMarker = L.marker([41.87, 12.57])
    .addTo(map)
    .bindPopup(`
    <div style="gap:10px; width:270px;">
      <div>
        <div class="premligne">
          <div style="display:flex; flex-direction:row; align-items:flex-start;" >
          <img src="https://minnetonkaorchards.com/wp-content/uploads/2021/06/Bergamot-Orange-Tree-640x427.jpg"
             style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
            <div style="display:flex; flex-direction:column; align-items:flex-start;">         
           <h3 style="margin:5px;">Bergamote</h3>
            <p style="margin:5px; font-size:12px;">
                🌿 Très utilisée en parfum et cosmétiques pour apporter de la fraîcheur
            </p>
          </div>
          </div>
        </div>  
        <div>
            </p >
            <p style="margin:5px 0; font-size:12px;">
                📍 Lieu : Italie
            </p>
            <p style="margin:5px; font-size:12px;">
                🏭 Fournisseur : Florihana
            </p>
        </div>
      </div>
    </div>
    `);
ItalieMarker.on('click', function () {
    map.flyTo([43.828633, 11.174411], 6);
});

const EspagneMarker = L.marker([40.46, -3.74])
    .addTo(map)
    .bindPopup(`
    <div style="gap:10px; width:270px;">
      <div>
        <div class="premligne">
          <div style="display:flex; flex-direction:row; align-items:flex-start;" >
          <img src="https://img.cuisineaz.com/1200x675/2020/11/30/i156336-citron-vert.jpeg"
             style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
            <div style="display:flex; flex-direction:column; align-items:flex-start;">         
           <h3 style="margin:5px;">Citron Vert</h3>
            <p style="margin:5px; font-size:12px;">
                🌿 Très utilisée en parfum et cosmétiques pour apporter de la fraîcheur
            </p>
          </div>
          </div>
        </div>  
        <div>
            </p >
            <p style="margin:5px 0; font-size:12px;">
                📍 Lieu : Espagne
            </p>
            <p style="margin:5px; font-size:12px;">
                🏭 Fournisseur : Florihana
            </p>
        </div>
      </div>
    </div>
    `);
EspagneMarker.on('click', function () {
    map.flyTo([40.854495, -3.869755], 6);
});

const AllemagneMarker = L.marker([51.17, 10.45])
    .addTo(map)
    .bindPopup(`
    <div style="gap:10px; width:270px;">
      <div>
        <div class="premligne">
          <div style="display:flex; flex-direction:row; align-items:flex-start;">
            <img src="https://tse1.mm.bing.net/th/id/OIP.Mckl1GkOhJRnJMEsFl_iQwAAAA?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                 style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
            <div style="display:flex; flex-direction:column; align-items:flex-start;">         
              <h3 style="margin:5px;">Mûre graine</h3>
              <p style="margin:5px; font-size:12px;">
                🌿 Extraction CO2 utilisée pour préserver les propriétés naturelles et les actifs aromatiques
              </p>
            </div>
          </div>
        </div>  
        <div>
          <p style="margin:5px 0; font-size:12px;">
            📍 Lieu : Allemagne
          </p>
          <p style="margin:5px; font-size:12px;">
            🏭 Fournisseur : Florihana
          </p>
        </div>
      </div>
    </div>
    `);
AllemagneMarker.on('click', function () {
    map.flyTo([50.985804, 10.135325], 6);
});

const PortugalMarker = L.marker([39.40, -8.22])
    .addTo(map)
    .bindPopup(`
    <div style="gap:10px; width:270px;">
      <div>
        <div class="premligne">
          <div style="display:flex; flex-direction:row; align-items:flex-start;">
            <img src="https://th.bing.com/th/id/R.c5f7e367b572c389affe0ed3b15d5213?rik=ARBjjnUrN4ZQgg&riu=http%3a%2f%2fmedia.ooreka.fr%2fpublic%2fimage%2fplant%2f1529%2ffurtherImage%2fb4jzroaorj4gkww4gsggwcs44-source-12773677.jpg&ehk=048LscnHUA2i1L73ljkkJWaH3wff5iYRJ9Vxu5ZkZLs%3d&risl=&pid=ImgRaw&r=0"
                 style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
            <div style="display:flex; flex-direction:column; align-items:flex-start;">         
              <h3 style="margin:5px;">Huile essentielle de Pin Maritime</h3>
              <p style="margin:5px; font-size:12px;">
                🌿 Connue pour ses notes boisées et fraîches, utilisée en aromathérapie et parfumerie
              </p>
            </div>
          </div>
        </div>  
        <div>
          <p style="margin:5px 0; font-size:12px;">
            📍 Lieu : Portugal
          </p>
          <p style="margin:5px; font-size:12px;">
            🏭 Fournisseur : Florihana
          </p>
        </div>
      </div>
    </div>
    `);
PortugalMarker.on('click', function () {
    map.flyTo([39.223637, -8.122096], 6);
});
 
const HongrieMarker = L.marker([47.16,19.50])
    .addTo(map)
    .bindPopup(`
    <div style="gap:10px; width:270px;">
      <div>
        <div class="premligne">
          <div style="display:flex; flex-direction:row; align-items:flex-start;">
            <img src="https://tse2.mm.bing.net/th/id/OIP.SJX0_0e_BZquq5gL4mCsjgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                 style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
            <div style="display:flex; flex-direction:column; align-items:flex-start;">         
              <h3 style="margin:5px;">Fenouil Doux</h3>
              <p style="margin:5px; font-size:12px;">
                🌿 Appréciée pour ses notes anisées et ses usages traditionnels en bien-être et cosmétique
              </p>
            </div>
          </div>
        </div>  
        <div>
          <p style="margin:5px; font-size:12px;">
            📍 Lieu : Hongrie
          </p>
          <p style="margin:5px; font-size:12px;">
            🏭 Fournisseur : Florihana
          </p>
        </div>
      </div>
    </div>
    `);
HongrieMarker.on('click', function () {
    map.flyTo([46.819361, 19.047064], 6);
});

const BulgarieMarker = L.marker([42.51,27.47])
    .addTo(map)
    .bindPopup(`
      <div style="gap:10px; width:270px;">
        <div>
          <div class="premligne">
            <div style="display:flex; flex-direction:row; align-items:flex-start;">
              <img src="https://tse1.mm.bing.net/th/id/OIP.N4JH7HF3qMrbBJD2TjgNHQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
                   style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
              <div style="display:flex; flex-direction:column; align-items:flex-start;">         
                <h3 style="margin:5px;">Rose Damascena</h3>
                <p style="margin:5px; font-size:12px; line-height:1.4;">
                  🌹 Réputée pour son parfum floral élégant, 
                  la Rose Damascena est prisée en parfumerie de luxe.
                </p>
              </div>
            </div>
          </div>  
          <div>
            <p style="margin:5px 0; font-size:12px;">
              📍 Lieu : Bulgarie
            </p>
            <p style="margin:5px; font-size:12px;">
              🏭 Fournisseur : Florihana
            </p>
          </div>
        </div>
      </div>
    `);
BulgarieMarker.on('click', function () {
    map.flyTo([42.743518, 25.265326], 6);
});

map.on('popupclose', function () {
    map.flyTo(initialCenter, initialZoom);
});



let openBtn = document.getElementById("bouton2");
let popup = document.querySelector(".boxcoutour");
let closeBtn = document.getElementById("closePopup");

  
document.getElementById('bouton').addEventListener('click', function(){
  var nom = document.getElementById('monexp1').value;
  var nomdesociete = document.getElementById('monexp2').value;
   var email = document.getElementById('monexp3').value;
  var message = document.getElementById('monexp4').value;
  if(nom === "" || nomdesociete === "" || email === "" || message === ""){
    alert("Veuillez remplir tous les champs !");
    return;
  }

  if(!email.includes("@") || !email.includes(".")){
    alert("Veuillez entrer une adresse mail valide !");
    return;
  }

  var corps = "Bonjour l'équipe KAN,\n\n"
    + "Je suis " + nom + ", fournisseur de la société " + nomdesociete + ".\n\n"
    + "Je suis très intéressé.e pour être affiché dans votre base de données.\n\n"
    + "Mes disponibilités sont les suivantes : " + message + "\n\n"
    + "Bien Cordialement,\n\n"
    + nom;

  var mailto = "mailto:aurelien.lule@gmail.com"
    + "?subject=" + encodeURIComponent("Demande de référencement de " + nomdesociete)
    + "&body=" + encodeURIComponent(corps);

  window.location.href = mailto;
});

openBtn.addEventListener("click", function () {
  alert("e")
  popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

var email = document.getElementById('monexp3').value;

