fetch('https://whatyearisit-backend-pied-nu.vercel.app/date')
 .then(response => response.json())
 .then(data => {
    document.querySelector('#year').textContent = data.now
 });