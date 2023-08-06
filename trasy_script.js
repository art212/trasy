const szukajButton = document.getElementById('szukajButton');
const nazwaKursu = document.getElementById('nazwaKursu');
const trasaDiv = document.getElementById('trasa');

szukajButton.addEventListener('click', () => {
  const kurs = nazwaKursu.value;
  const trasa = getTrasaForKurs(kurs);
  trasaDiv.textContent = trasa || 'Brak trasy dla podanej nazwy kursu';
});

function getTrasaForKurs(kurs) {
  const trasyMap = {
    'kurs1': 'Łowicz, Kutno, Konin',
    'kurs2': 'Łódź, Sieradz, Ostrów Wielkopolski'
  };
  return trasyMap[kurs] || '';
}
