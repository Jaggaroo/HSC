// Button Toggle function

// var abmn = document.getElementById("albertamanitoba");
// const onqc = document.getElementById("ontarioquebec");
// const nb = document.getElementById("newbrunswick");
// const ns = document.getElementById("novascotia");

// Alberta and Manitoba
function toggleabmn() {
  // alert('Alberta & Manitoba');
  var abmn = document.getElementById("albertamanitoba");
  var onqc = document.getElementById("ontarioquebec");
  var pe = document.getElementById("princeedwardisland");
  onqc.style.display = 'none';
  pe.style.display = 'none';
  abmn.style.display = 'block';
}

// Ontario and Quebec
function toggleonqc() {
  // alert('Ontario & Quebec');
  var abmn = document.getElementById("albertamanitoba");
  var onqc = document.getElementById("ontarioquebec");
  var pe = document.getElementById("princeedwardisland");
  abmn.style.display = 'none';
  pe.style.display = 'none';
  onqc.style.display = 'block';
}

// New Brunswick
function togglenb() {
  alert('New Brunswick');
}

// Newfoundland & Labrador
function togglenl() {
  alert('Newfoundland & Labrador');
}

// Nova Scotia
function togglens() {
  alert('Nova Scotia');
}

// Prine Edward Island
function togglepe() {
  var abmn = document.getElementById("albertamanitoba");
  var onqc = document.getElementById("ontarioquebec");
  var pe = document.getElementById("princeedwardisland");
  abmn.style.display = 'none';
  onqc.style.display = 'none';
  pe.style.display = 'block';
}
